import Experience from "../../Experience";
import validator from "validator";
import axios from "axios";

export default class {
    constructor(elements) {
        this.experinence = new Experience();
        this.elements = elements;

        //elements ; 
        this.usernameComp = this.elements.usernameInp ;
        this.emailComp = this.elements.emailSUInput ; 
        this.passwdComp = this.elements.passwdSUInput ; 
        this.confirmPasswdComp = this.elements.confirmPasswd ;  
        this.signUpBtn = this.elements.s_signupButton;
        
        this.switchKeyboardLister();
        this.handleSignUp();

        console.log(validator)
    }

    switchKeyboardLister() {
        this.elements.nvb10.addEventListener('click', () => {
            window.removeEventListener('keydown', this.experinence.handleTyping.fun);
        })
    }

    handleSignUp() {
        this.signUpBtn.addEventListener('click', (e) => {
            this.username = this.usernameComp.value ; 
            this.email = this.emailComp.value ; 
            this.passwd = this.passwdComp.value ; 
            this.confirmPasswd = this.confirmPasswdComp.value ; 

            console.log( 'SignUp :' , this.username , this.email , this.passwd , this.confirmPasswd );

            this.validateData();
        })
    }

    validateData(){
        if( (validator.isEmpty(this.email)) || (validator.isEmpty(this.username)) || (validator.isEmpty(this.passwd)) || (validator.isEmpty(this.confirmPasswd))){
            alert('some fields are Empty');
        }
        else if(!validator.isEmail(this.email)){
            alert('Email is not correct');
        }
        else if( this.passwd != this.confirmPasswd ){
            alert('Password  not match');
        }
        else if( this.passwd.length < 8 ){
            alert('minimum 8 chars are required ');
        }
        else{
            this.elements.loader.style.display = 'block';
            this.sendRequest();
        }
    }
    
    sendRequest(){
        this.data = {};
        
        this.data.name = this.username ;
        this.data.email = this.email ; 
        this.data.passwdord = this.passwd ; 
        
        axios.post('http://localhost:5000/api/v1/users/signup' , {
            name : this.username , 
            email : this.email , 
            password : this.passwd
        }).then((res)=>{
            console.log(res);
            this.elements.loader.style.display = 'none';
        }).catch((e)=>{
            this.elements.loader.style.display = 'none';
            console.log(e)
        })

    }   
}