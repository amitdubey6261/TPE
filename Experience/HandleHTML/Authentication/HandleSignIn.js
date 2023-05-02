import axios from "axios";
import Experience from "../../Experience";
import validator from "validator";

export default class{
    constructor(elements){
        this.experience = new Experience();
        this.elements = elements ; 

        this.loadInputs();
        this.handleSignIn();
    }

    loadInputs(){
        this.emaiComp = this.elements.emailSIInput ; 
        this.passwdComp = this.elements.passwdSIInput ; 
        this.loginBtn = this.elements.l_loginButton ; 
    }

    handleSignIn(){
        this.loginBtn.addEventListener( 'click' , ()=>{
            this.elements.loader.style.display = 'block';

            this.email = this.emaiComp.value ; 
            this.passwd = this.passwdComp.value ; 

            console.log(' login : ' , this.email , this.passwd );
            this.validateData();
        })

    }

    validateData(){
        if( (validator.isEmpty(this.email)) || validator.isEmpty(this.passwd) ){
            alert('Fields are Empty !');
        }
        else if(!validator.isEmail(this.email)){
            alert('fields are wrong ');
        }
        else if( this.passwd.length < 8 ){
            alert('password is incorrect');
        }
        else{
            this.sendRequest();
        }
    }

    sendRequest(){
        this.data = {} ; 
        this.data.email = this.email ; 
        this.data.password = this.passwd ; 

        axios.post('http://localhost:5000/api/v1/users/login' , this.data ).then((res)=>{
            console.log(res);
            this.elements.loader.style.display = 'none';
        }).catch((e)=>{
            this.elements.loader.style.display = 'none';
            console.log(e);
        })
    }

}