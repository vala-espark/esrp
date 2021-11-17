import React, { Component } from "react";
import Chart from "react-apexcharts";
import './donut.style.scss'
import { Table } from "react-bootstrap";

const dataSet = {
  // options: {
  //   tooltip: {
  //     enabled: false
  //   },
  //   labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
  // },
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    colors: ['#9072D5', '#FEC167', '#F46571', '#01F1E3', '#E6E8ED']
  },
};

const DonutChart = () => {
  return (
    <>
      <div className="card donut-chart-card">
        <div className="card-body">
          <div className="mixed-chart">
            <Chart
              options={dataSet.options}
              series={dataSet.series}
              type="donut"
              width="100%"
            />
          </div>

          <div className="card-title">
            <label htmlFor="">Total earning</label>
          </div>

          <div className="chart-price">
            <h4>$12,875
              <span className="up">&#9650;12%</span>
              {/* <span className="down">&#9660;12%</span> */}
            </h4>
          </div>

          <div className="summary">
            <label htmlFor="">Compared to $21,504 last year</label>
          </div>


          <div className="line-chart-table">
            <Table width="100%">
              <tbody>
                <tr>
                  <td className="name">Data</td>
                  <td className="value">350</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </Table>
          </div>

        </div>
      </div>
    </>
  )
}

export default DonutChart;
