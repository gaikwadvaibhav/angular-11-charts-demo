import { AfterViewInit, Component } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import * as CanvasJS from '../assets/canvasjs.min';  // Canvasjs dependacy imported
// import { Chart } from 'chart.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'charts-demo';

  constructor() {
  }

  ngAfterViewInit(): void {
    this.loadAmchart()
    //   ------------------- Canvasjs line char -----------------
    this.loadCanvasChart();
    this.loadChartJs()
  }

  loadAmchart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    // Add data
    chart.data = [{
      "date": new Date(2018, 3, 20),
      "value": 90
    }, {
      "date": new Date(2018, 3, 21),
      "value": 102
    }, {
      "date": new Date(2018, 3, 22),
      "value": 65
    }, {
      "date": new Date(2018, 3, 23),
      "value": 62
    }, {
      "date": new Date(2018, 3, 24),
      "value": 55
    }, {
      "date": new Date(2018, 3, 25),
      "value": 81
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    image.href = "https://www.amcharts.com/lib/images/star.svg";
    image.width = 30;
    image.height = 30;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";
  }

  loadCanvasChart() {
    let charts = new CanvasJS.Chart("chartContainer",
      {
        title: {
          text: "Custom Marker on dataPoint"
        },
        data: [
          {
            type: "line",
            showInLegend: true,
            dataPoints: [
              { x: 10, y: 71, indexLabel: "71", markerType: "circle", markerColor: "grey", markerSize: 12 },
              { x: 20, y: 55, indexLabel: "55", markerType: "circle", markerColor: "grey", markerSize: 12 },
              { x: 30, y: 50, indexLabel: "50", markerType: "circle", markerColor: "grey", markerSize: 12 },
              { x: 40, y: 65, indexLabel: "65", markerType: "circle", markerColor: "grey", markerSize: 12 },
              { x: 50, y: 85, indexLabel: "85", markerType: "triangle", markerColor: "red", markerSize: 12 },
              { x: 60, y: 68, indexLabel: "68", markerType: "circle", markerColor: "grey", markerSize: 12 },
              { x: 70, y: 28, indexLabel: "28", markerType: "circle", markerColor: "grey", markerSize: 12 },
              { x: 80, y: 34, indexLabel: "34", markerType: "circle", markerColor: "grey", markerSize: 12 },
              { x: 90, y: 24, indexLabel: "24", markerType: "circle", markerColor: "grey", markerSize: 12 }
            ]
          }
        ]
      });

    charts.render();
  }

  loadChartJs() {
    var ctx: any = document.getElementById('myChart');
    var myChart: any = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['21-04-2021', '21-04-2021', '21-04-2021', '22-04-2021', '23-04-2021', '24-04-2021'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55],
          pointStyle: 'triangle',
          pointBackgroundColor: 'rgba(255, 0, 0)',
          pointBorderColor: 'rgba(255, 0, 0)',
          pointBorderWidth: 8,
          fill: true,
          borderColor: 'rgb(75, 192, 192)'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
