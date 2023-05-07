import Experience from "../Experience";
import HandleJS from "./HandleJS";

export default class {
    constructor() {
        this.experience = new Experience();
        this.canvas = this.experience.canvas;
        this.scene = this.experience.scene;
        this.loadDom();
        this.createDomElements();
        this.HandleJS = new HandleJS(this.domElements)
    }

    loadDom() {
        this.loadPages();
        this.loadButtons();
        this.loadReplacers();
    }

    loadPages() {
        this.loadSignupInputs();
        this.loadSignInInputs();
        this.navbar = document.querySelector('nav');
        this.loginPage = document.querySelector('.login-container');
        this.signupPage = document.querySelector('.signup-container');
        this.loader = document.querySelector('.loader-container');
        this.statsBox = document.querySelector('.stats-box');
        this.stringAndEye = document.querySelector('.string-and-eye');
        this.chart = document.querySelector('.graph-parent');
    }

    loadSignupInputs(){
        this.usernameInput = document.querySelector('#username');
        this.emailSUInput = document.querySelector('#email-s');
        this.passwdSUInput = document.querySelector('#password-s');
        this.confirmPasswd = document.querySelector('#password-sc');
    }

    loadSignInInputs(){
        this.emailSIInput = document.querySelector("#signin-input");
        this.passwdSIInput = document.querySelector("#signin-passwd");
    }

    loadButtons() {
        this.loadNavButtons();
        this.loadLoginButtons();
        this.loadsignupButtons();
        this.loadstatsBoxButtons();
    }

    loadReplacers(){
        this.stringReplace = document.querySelector(".string-flash");
        this.timeReplace = document.querySelector("#stat-op3");
    }

    loadNavButtons() {
        this.nvb1 = document.querySelector('#nvb1');
        this.nvb2 = document.querySelector('#nvb2');
        this.nvb3 = document.querySelector('#nvb3');
        this.nvb4 = document.querySelector('#nvb4');
        this.nvb5 = document.querySelector('#nvb5');
        this.nvb6 = document.querySelector('#nvb6');
        this.nvb7 = document.querySelector('#nvb7');
        this.nvb8 = document.querySelector('#nvb8');
        this.nvb9 = document.querySelector('#nvb9');
        this.nvb10 = document.querySelector('#nvb10');
        this.nvb11 = document.querySelector('#nvb11');

        this.logoutButton = document.querySelector('#logout');
    }

    loadLoginButtons() {
        this.l_loginButton = document.querySelector('#l-login')
        this.l_signupButton = document.querySelector('#l-signup')
        this.loginCloseButton = document.querySelector('#login-close-btn');
    }
    
    loadsignupButtons() {
        this.s_loginButton = document.querySelector('#s-login');
        this.s_signupButton = document.querySelector('#s-signup');
        this.signupCloseButton = document.querySelector('#signup-close-btn');
    }

    loadstatsBoxButtons(){
        this.statsBoxClose = document.querySelector('.stb-three-dot-container');
    }
    

    createDomElements() {

        this.domElements = {};

        this.domElements.navbar = this.navbar;
        this.domElements.loginPage = this.loginPage;
        this.domElements.signupPage = this.signupPage;
        this.domElements.loader = this.loader ;
        this.domElements.statsBox = this.statsBox ;
        this.domElements.stringAndEye = this.stringAndEye ;
        this.domElements.chart = this.chart ; 

        this.domElements.nvb1 = this.nvb1;
        this.domElements.nvb2 = this.nvb2;
        this.domElements.nvb3 = this.nvb3;
        this.domElements.nvb4 = this.nvb4;
        this.domElements.nvb5 = this.nvb5;
        this.domElements.nvb6 = this.nvb6;  
        this.domElements.nvb7 = this.nvb7;
        this.domElements.nvb8 = this.nvb8;
        this.domElements.nvb9 = this.nvb9;
        this.domElements.nvb10 = this.nvb10;
        this.domElements.nvb11 = this.nvb11;

        this.domElements.l_loginButton = this.l_loginButton;
        this.domElements.l_signupButton = this.l_signupButton;
        this.domElements.s_loginButton = this.s_loginButton;
        this.domElements.s_signupButton = this.s_signupButton;
        this.domElements.loginclose = this.loginCloseButton;
        this.domElements.signupclose = this.signupCloseButton;
        this.domElements.statsClose = this.statsBoxClose ; 

        this.domElements.stringReplace = this.stringReplace ;
        this.domElements.timeReplace = this.timeReplace ; 

        this.domElements.emailSIInput = this.emailSIInput ; 
        this.domElements.passwdSIInput = this.passwdSIInput ;

        this.domElements.usernameInp = this.usernameInput ; 
        this.domElements.emailSUInput = this.emailSUInput ; 
        this.domElements.passwdSUInput = this.passwdSUInput ;
        this.domElements.confirmPasswd = this.confirmPasswd ;  


    }
}