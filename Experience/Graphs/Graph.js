import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import Experience from "../Experience";
export default class {
    constructor() {
        this.experience = new Experience();
        this.canavas = this.experience.graph_canvas;
        this.handleToggle();
        this.createChart();
    }

    handleToggle(){
        this.chartBtn = this.experience.handleHTML.domElements.nvb3 ; 
        this.chart = this.experience.handleHTML.domElements.chart ; 
        this.displayChart = false ; 
        this.chartBtn.addEventListener('click' , ()=>{
            if(this.displayChart){
                this.chart.style.display = 'none';
                this.displayChart = false ; 
            }
            else{
                this.chart.style.display = 'block';
                this.displayChart = true ; 
            }
        })
    }

    createChart() {

        this.ctx = this.canavas.getContext('2d');
        Chart.defaults.color = "#ffffff";
        this.myChart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [3, 10, 4, 7, 12, 8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1 , 
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            color: "white"
                        }
                    },
                    y: {
                        ticks: {
                            color: "white"
                        }
                    } ,
                }
            }
        });
    }
}