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
    "date": new Date('Fri Apr 19 2021 19:08:55 GMT-0500 (CDT)'),
    "value": 154,
    'lineColor': 'grey',
    "bullet": "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2MTc1YzAgNyA1IDEyIDEyIDEyaDE3NWM2IDAgMTEtNSAxMS0xMlYxN2MwLTYtNS0xMS0xMS0xMUgxOHoiIGZpbGw9IiMwMDI0N2QiLz48cGF0aCBkPSJNNiAzOXYxN2w4NCA0OS04NCA0OHYxOGw5OS01OCA5OSA1OHYtMThsLTg0LTQ4IDg0LTQ5VjM5bC05OSA1N0w2IDM5eiIgZmlsbD0iI2NmMTQyYiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgZmlsbCBzdHJva2UiLz48cGF0aCBkPSJNODggNnY4Mkg2djM0aDgydjgyaDM0di04Mmg4MlY4OGgtODJWNkg4OHoiIGZpbGw9IiNjZjE0MmIiIHBhaW50LW9yZGVyPSJtYXJrZXJzIGZpbGwgc3Ryb2tlIi8+PHBhdGggZD0iTTg1IDZ2NzVMNiAzNXY4bDcyIDQySDYyTDYgNTN2N2w0MyAyNUg2djZoODZWNnptMzQgMHY4NWg4NXYtNmgtNDJsNDItMjV2LTdsLTU1IDMyaC0xN2w3Mi00MnYtOGwtNzggNDZWNnpNOTIgMTE5SDZ2Nmg0M0w2IDE0OXY4bDU2LTMyaDE2TDYgMTY3djdsNzktNDV2NzVoN3YtNzl6bTI3IDB2ODVoN3YtNzVsNzggNDV2LTdsLTcyLTQyaDE3bDU1IDMydi04bC00Mi0yNGg0MnYtNmgtODV6IiBzdHlsZT0ibGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO3NoYXBlLXBhZGRpbmc6MDtpc29sYXRpb246YXV0bzttaXgtYmxlbmQtbW9kZTpub3JtYWwiIGNvbG9yPSIjMDAwIiBmb250LXdlaWdodD0iNDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgd2hpdGUtc3BhY2U9Im5vcm1hbCIgb3ZlcmZsb3c9InZpc2libGUiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIGZpbGwgc3Ryb2tlIi8+PC9zdmc+"
  }, {
    "date": new Date(2021, 3, 21, 2),
    "value": 155,
    "bullet": "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2MTc1YzAgNyA1IDEyIDEyIDEyaDE3NWM2IDAgMTEtNSAxMS0xMlYxN2MwLTYtNS0xMS0xMS0xMUgxOHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTA1IDY3bC03IDEyLTYtMiAzIDIxLTktMTEtMiA1LTEyLTEgMyAxMS01IDMgMTMgMTBjMSAxIDUgNCA1IDZsLTEgNCAzLTEgMTQtMnYyMGgydi0yMGwxNCAyIDMgMXMtMi0zLTEtNGMwLTIgNC01IDUtNmw4LTYgNi00LTUtMyAyLTExLTExIDEtMi01LTEwIDEzIDMtMjMtNiAyek0xOCA2QzExIDYgNiAxMSA2IDE3djE3NWMwIDcgNSAxMiAxMiAxMmgzMVY2SDE4ek0xOTMgNmM2IDAgMTEgNSAxMSAxMXYxNzVjMCA3LTUgMTItMTEgMTJoLTMyVjZ6IiBmaWxsPSJyZWQiIHBhaW50LW9yZGVyPSJtYXJrZXJzIGZpbGwgc3Ryb2tlIi8+PC9zdmc+"
  }, {
    "date": new Date(2021, 3, 21, 10),
    "value": 160.5,
    "bullet": "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2MTc1YzAgNyA1IDEyIDEyIDEyaDE3NWM2IDAgMTEtNSAxMS0xMlYxN2MwLTYtNS0xMS0xMS0xMUgxOHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTA1IDY3bC03IDEyLTYtMiAzIDIxLTktMTEtMiA1LTEyLTEgMyAxMS01IDMgMTMgMTBjMSAxIDUgNCA1IDZsLTEgNCAzLTEgMTQtMnYyMGgydi0yMGwxNCAyIDMgMXMtMi0zLTEtNGMwLTIgNC01IDUtNmw4LTYgNi00LTUtMyAyLTExLTExIDEtMi01LTEwIDEzIDMtMjMtNiAyek0xOCA2QzExIDYgNiAxMSA2IDE3djE3NWMwIDcgNSAxMiAxMiAxMmgzMVY2SDE4ek0xOTMgNmM2IDAgMTEgNSAxMSAxMXYxNzVjMCA3LTUgMTItMTEgMTJoLTMyVjZ6IiBmaWxsPSJyZWQiIHBhaW50LW9yZGVyPSJtYXJrZXJzIGZpbGwgc3Ryb2tlIi8+PC9zdmc+"
  }, {
    "date": new Date(2021, 3, 22, 1),
    "value": 151.8,
    "bullet": "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2MTc1YzAgNyA1IDEyIDEyIDEyaDE3NWM2IDAgMTEtNSAxMS0xMlYxN2MwLTYtNS0xMS0xMS0xMUgxOHoiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIxMDUiIGN5PSIxMDUiIHI9IjM2IiBmaWxsPSIjYmMwMDJkIiBwYWludC1vcmRlcj0ibWFya2VycyBmaWxsIHN0cm9rZSIvPjwvc3ZnPg=="
  }, {
    "date": new Date(2021, 3, 22, 5),
    "value": 152.9,
    "bullet": "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2NTVoMTk4VjE3YzAtNi01LTExLTExLTExaC04N3pNNiAxMzh2NTRjMCA3IDUgMTIgMTIgMTJoMTc1YzYgMCAxMS01IDExLTEydi01NHoiIGZpbGw9IiNlZDI5MzciLz48cGF0aCBkPSJNNiA3MnY2NmgxOThWNzJINnoiIGZpbGw9IiNmOWY5ZjkiLz48L3N2Zz4="
  }, {
    "date": new Date(2021, 3, 22, 9),
    "value": 157.2,
    "bullet": "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2MTc1YzAgNyA1IDEyIDEyIDEyaDU0VjZIMTh6Ii8+PHBhdGggZD0iTTEzOCA2djE5OGg1NWM2IDAgMTEtNSAxMS0xMlYxN2MwLTYtNS0xMS0xMS0xMXoiIGZpbGw9IiNlZDI5MzkiLz48cGF0aCBkPSJNNzIgNnYxOThoNjZWNkg3MnoiIGZpbGw9IiNmYWUwNDIiLz48L3N2Zz4="
  }, {
    "date": new Date(2021, 3, 23),
    "value": 162.6,
    "bullet": "data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2ODhoMTk4VjE3YzAtNi01LTExLTExLTExSDE4eiIgZmlsbD0iI2RmMTEyYiIvPjxwYXRoIGQ9Ik02IDEwNXY4N2MwIDcgNSAxMiAxMiAxMmgxNzVjNiAwIDExLTUgMTEtMTJ2LTg3SDZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
  }];
  bullet = 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9Ijc5NCIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDIxMCAyMTAiIHdpZHRoPSI3OTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDZDMTEgNiA2IDExIDYgMTd2ODhoMTk4VjE3YzAtNi01LTExLTExLTExSDE4eiIgZmlsbD0iI2RmMTEyYiIvPjxwYXRoIGQ9Ik02IDEwNXY4N2MwIDcgNSAxMiAxMiAxMmgxNzVjNiAwIDExLTUgMTEtMTJ2LTg3SDZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+';
  star = 'https://www.amcharts.com/lib/images/star.svg';

  constructor() {
    // format chart data and add bullet icon/img
    this.chartdata.forEach(x => {
      if (x.value >= 160) {
        x.bullet = this.star;
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

     // Create axes
     var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
 
    //  dateAxis.renderer.minGridDistance = 30;  // set grid width

dateAxis.renderer.cellStartLocation = 0.2;
dateAxis.renderer.cellEndLocation = 0.8;

     // Create value axis
     var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
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
     latitudeLabel.label.horizontalCenter = "right";
     latitudeLabel.label.verticalCenter = "bottom";
     latitudeLabel.label.dx = 14;
 
     // Add simple bullet
     var bullet = lineSeries.bullets.push(new am4charts.Bullet());
     var image = bullet.createChild(am4core.Image);
     image.width = 12;
     image.height = 12;
     image.horizontalCenter = "middle";
     image.verticalCenter = "middle";
     image.propertyFields.href = "bullet";
 
     bullet.tooltipText = "Value: [bold]{value}[/]";  // show tooltip
 
     // image.filters.push(new am4core.DropShadowFilter());   // set img shadow
 
     // set zoom 
 
     // chart.cursor = new am4charts.XYCursor();
 
     // let scrollbarX = new am4core.Scrollbar();
     // chart.scrollbarX = scrollbarX;
 
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
