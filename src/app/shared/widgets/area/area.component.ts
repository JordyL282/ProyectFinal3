import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions= {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions ={
        chart: {
            type: 'area'
        },
        title: {
            text: 'MIS CURSOS'
        },
        subtitle: {
            text: 'Prueba Dashboard'
        },
        xAxis: {
            categories: ['PUNTOS:', '10', '25', '50', '75', '85', '100'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
       
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'PROGRAMACION',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'COMPILADORES',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'SISTEMAS OPERATIVOS',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'ANALISIS DE SISTEMAS',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }]
    };
    }
  }


