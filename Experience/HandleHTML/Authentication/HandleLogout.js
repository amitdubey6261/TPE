import Experience from '../../Experience';
import axios from 'axios';


export default class{
    constructor(elements){
        this.experience = new Experience();
        this.elements = elements ; 

        this.logoutBtn = this.elements.nvb11 ; 

        this.handleLogout();
    }

    handleLogout(){
        this.logoutBtn.addEventListener('click', ()=>{
            this.elements.loader.style.display = 'block';
            this.sendRequest();
        })

    }

    sendRequest(){
        axios.get( 'http://localhost:5000/api/v1/users/logout').then((res)=>{
            console.log(res);
            this.loader.style.display = 'none';
        }).catch((e)=>{
            console.log(e)
        })
    }

}