import Experience from "./Experience";

export default class{
    constructor(elements){
        this.experience = new Experience();
        this.elements = elements ; 
        console.log(this.elements)
        this.handleFunctionalities();
    }

    handleFunctionalities(){
        this.handleLoader();
        this.handleSignupLogin();
        this.handleNav();
        this.handleStatsBox();
        this.handleStringAndEye();
    }
    // login-handle
    handleLoader(){
        this.elements.loader.style.display = 'none';
    }

    //handleNav
    handleNav(){
        this.elements.navbar.style.display = 'block';
    }

    //handleStatBox
    handleStatsBox(){
        this.elements.statsBox.style.display = 'block';
        this.handleStatsBoxClose();
    }

    handleStatsBoxClose(){
        this.elements.statsClose.addEventListener('click' , ()=>{
            this.elements.statsBox.style.display = 'none' ;
        })
    }
    //string And Eye
    handleStringAndEye(){
        this.elements.stringAndEye.style.display = 'flex';

    }

    
    handleSignupLogin(){
        this.handleSigninClick();
        this.toggleLoginPageToSignUpAndViceVersa();
        this.handleCloseButtonSL();
    }

    handleSigninClick(){
        //signinClick
        this.elements.nvb10.addEventListener('click' , ()=>{
            this.elements.signupPage.style.display = 'block'
        })
    }

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
