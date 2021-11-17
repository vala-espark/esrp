import React, { Component } from "react";
import Chart from "react-apexcharts";
import './linechart.style.scss'
import { Table } from "react-bootstrap";

const dataSet = {
  options: {
    tooltip: {
      enabled: false
    },
    chart: {
      toolbar: {
        show: false
      },
      id: "basic-bar"
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    xaxis: {
      show: false,
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      labels: {
        show: false,
      },
      lines: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      colors: ['#5c86c1', '#81cab2']
    },
    yaxis: {
      labels: {
        show: false,
      },
      lines: {
        show: false
      }
    }
  },
  series: [{
    name: 'series1',
    data: [11, 40, 28, 60, 42, 52, 60],
  }, {
    name: 'series2',
    data: [11, 52, 45, 25, 34, 52, 60]
  }]
};

const LineChart = () => {
  return (
    <>
      <div className="card line-chart-card">
        <div className="card-body">

          <div className="card-title">
            <label htmlFor="">Market trend</label>
          </div>

          <div className="chart-price">
            <h3>64.3
              <span>%</span>
            </h3>
          </div>

          <div className="summary">
            <label htmlFor="">Compared to $21,504 last year</label>
          </div>

          <div className="mixed-chart">
            <Chart
              options={dataSet.options}
              series={dataSet.series}
              type="line"
              width="100%"
            />
          </div>

          <div className="line-chart-table">
            <Table width="100%">
              <tbody>
                <tr>
                  <td className="circle"><span style={{ borderColor: '#5c86c1' }}></span></td>
                  <td className="name">Mark</td>
                  <td className="progress-bar-wrapper">
                    <div className="progress-bar-inner">
                      <div className="progress-bar" style={{ width: '75%', backgroundColor: '#5c86c1' }}></div>
                      <div className="progress-bar-back"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="circle"><span style={{ borderColor: '#81cab2' }}></span></td>
                  <td className="name">Product</td>
                  <td className="progress-bar-wrapper">
                    <div className="progress-bar-inner">
                      <div className="progress-bar" style={{ width: '75%', backgroundColor: '#81cab2' }}></div>
                      <div className="progress-bar-back"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="circle"><span style={{ borderColor: '#f5b954' }}></span></td>
                  <td className="name">Sales</td>
                  <td className="progress-bar-wrapper">
                    <div className="progress-bar-inner">
                      <div className="progress-bar" style={{ width: '75%', backgroundColor: '#f5b954' }}></div>
                      <div className="progress-bar-back"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

        </div>
      </div>
    </>
  );

}

export default LineChart;