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

  chartdata = [{
    "date": new Date(2021, 4, 21, 0, 30, 20),
    "value": 154,
    'lineColor': 'grey'
  }, {
    "date": new Date(2021, 4, 21, 3, 56, 10),
    "value": 155
  }, {
    "date": new Date(2021, 4, 21, 6, 46, 28),
    "value": 160.5
  }, {
    "date": new Date(2021, 4, 21, 9, 45, 20),
    "value": 151.8
  }, {
    "date": new Date(2021, 4, 22, 12, 30, 50),
    "value": 152.9
  }, {
    "date": new Date(2021, 4, 24, 9, 15, 47),
    "value": 157.2
  }, {
    "date": new Date(2021, 4, 25, 4, 16, 48),
    "value": 162.6
  }];
  bullet = 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA5IDkiIGhlaWdodD0iOSIgd2lkdGg9IjkiPgo8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iMC42IiBmaWxsPSJibGFjayIgcj0iNC41IiBjeT0iNC41IiBjeD0iNC41Ij48L2NpcmNsZT4KPC9zdmc+Cg==';
  star = 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxMiIgaGVpZ2h0PSIxMiIgd2lkdGg9IjE2Ij4KPHBhdGggZmlsbD0iI0UxNTMxRCIgZD0iTTAgMTJIMTZMOCAwTDAgMTJaTTguNzI3MjcgMTAuMTA1M0g3LjI3MjczVjguODQyMUg4LjcyNzI3VjEwLjEwNTNaTTguNzI3MjcgNy41Nzg5NUg3LjI3MjczVjUuMDUyNjNIOC43MjcyN1Y3LjU3ODk1WiI+PC9wYXRoPgo8L3N2Zz4=';

  constructor() {
    // format chart data and add bullet icon/img
    this.chartdata.forEach(x => {
      if (x.value >= 160) {
        x["bullet"] = this.star;
      }
      else {
        x['bullet'] = this.bullet
      }
    })
  }

  ngAfterViewInit(): void {
    this.loadAmchart()
    // this.loadCanvasChart();
    // this.loadChartJs()
    // this.loadChart()



  }

  loadAmchart() {
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    // chart.marginRight = 40;

    // Add data
    chart.data = this.chartdata;
    chart.responsive.enabled = true;
    //  chart.dateFormatter.inputDateFormat = "yyyyMMdd  HH:mm:ss"

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter = new am4core.DateFormatter();


    //  dateAxis.dateFormatter.dateFormat = "d MMM, yyyy";
    dateAxis.periodChangeDateFormats.setKey("hour", "MM/dd");
    // chart.dateFormatter.inputDateFormat = "yyyyMMdd  HH:mm:ss"


    // dateAxis.renderer.minGridDistance = 510;
    // dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.renderer.labels.template.location = 0.1;
    //  dateAxis.renderer.minGridDistance = 50;
    dateAxis.paddingRight = 25;
    dateAxis.paddingLeft = 25;
    dateAxis.gridIntervals.setAll([
      { timeUnit: "hour", count: 1 }
    ])

    dateAxis.skipEmptyPeriods = true;
    dateAxis.groupData = false;
    dateAxis.groupCount = 120;

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    dateAxis.renderer.ticks.template.location = 0;
    valueAxis.min = 120;
    valueAxis.max = 250


    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.tooltipText = "value:{valueY})";
    // lineSeries.showOnInit = true;
    lineSeries.propertyFields.stroke = "lineColor";
    lineSeries.propertyFields.fill = "lineColor";

    lineSeries.strokeWidth = 2;




    var latitudeLabel = lineSeries.bullets.push(new am4charts.LabelBullet());
    latitudeLabel.label.text = "{value}";
    latitudeLabel.label.horizontalCenter = "left";
    latitudeLabel.label.verticalCenter = "bottom";
    latitudeLabel.label.dx = 14;

    // Add simple bullet
    var bullet = lineSeries.bullets.push(new am4charts.Bullet());
    var image = bullet.createChild(am4core.Image);
    image.width = 14;
    image.height = 12;
    image.horizontalCenter = "left";
    image.verticalCenter = "middle";
    image.propertyFields.href = "bullet";

    bullet.tooltipText = "Value: [bold]{value}[/]";  // show tooltip

    // image.filters.push(new am4core.DropShadowFilter());   // set img shadow

    // set zoom

    // chart.cursor = new am4charts.XYCursor();

    //  let scrollbarX = new am4core.Scrollbar();
    //  chart.scrollbarX = scrollbarX;

    /* Create axes */
    // var theXAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    // theXAxis.dataFields.category = "xValue";
    // theXAxis.renderer.minGridDistance = 30;
    // // theXAxis.renderer.grid.template.stroke = "#ff0000";
    // theXAxis.renderer.grid.template.strokeWidth = 1;
    // theXAxis.renderer.grid.template.strokeOpacity = .2; //make the change more visible for demo purposes
    // // base/zero line
    // // theXAxis.renderer.baseGrid.stroke = "#ff0000";

    // /* Create value axis */
    // var theYAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // theYAxis.renderer.labels.template.disabled = false;
    // // theYAxis.renderer.grid.template.stroke = "#ff0000";
    // theYAxis.renderer.grid.template.strokeWidth = 1;
    // theYAxis.renderer.grid.template.strokeOpacity = .2; //make the change more visible for demo purposes
    // base/zero line
    // theYAxis.renderer.baseGrid.stroke = "#ff0000";

    //border around chart:
    // chart.plotContainer.background.stroke = "#ff0000";
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
              { x: 10, y: 72, indexLabel: "71", markerType: "circle", markerColor: "grey", markerSize: 12 },
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
          data: [65, 59, 80, 82, 56, 55],
          pointStyle: 'triangle',
          pointBackgroundColor: 'rgba(255, 0, 0)',
          pointBorderColor: 'rgba(255, 0, 0)',
          pointBorderWidth: 8,
          fill: false,
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
