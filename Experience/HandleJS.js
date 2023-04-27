import Experience from "./Experience";

export default class{
    constructor(elements){
        this.experience = new Experience();
        this.elements = elements ; 
        console.log(this.elements);
        this.handleFunctionalities();
    }

    handleFunctionalities(){
        this.handleSignupLogin();
    }
    
    handleSignupLogin(){
        this.toggleLoginPageToSignUpAndViceVersa();
        this.handleCloseButtonSL();
    }

    //toggle the signup login signup
    toggleLoginPageToSignUpAndViceVersa(){

        this.elements.l_signupButton.addEventListener('click' , ()=>{
            this.elements.loginPage.style.display = 'none';
            this.elements.signupPage.style.display = 'block';
        })

        this.elements.s_loginButton.addEventListener('click',()=>{
            this.elements.signupPage.style.display = 'none';
            this.elements.loginPage.style.display = 'block';
        })

    }

    handleCloseButtonSL(){
        this.elements.loginclose.addEventListener('click' , ()=>{
            this.elements.loginPage.style.display = 'none';
        })
        this.elements.signupclose.addEventListener('click' , ()=>{
            this.elements.signupPage.style.display = 'none';
        })
    }
}
