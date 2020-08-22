import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

import './Charts.css'

const Charts = ({ loading, setLoading, name, id, time }) => {
  const [data, setData] = useState([{timestamps: undefined, prices: undefined}])
  const [title, setTitle] = useState('Charting Data...')

  // Fetch single currency values over time
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // set start date
      let date = await moment().subtract(time[0], time[1])
      date = date.toISOString()
      let res = await axios.get(`https://api.nomics.com/v1/currencies/sparkline?key=4582ca2d8e989291b7cb5c9236018ace&ids=${id}&start=${date}`)

      //check if data exists and reformat dates for display
      if (res.data.length) {
        let convertedData = res.data[0].timestamps.map((el) => {
          let timeStamp = moment(el)
          let dateComponent = timeStamp.utc().format('MM-DD-YYYY')
          let timeComponent = timeStamp.utc().format('HH:mm:ss')
          return `${dateComponent} ${timeComponent}`
        })
        res.data[0].timestamps = convertedData
        setData(res.data);
        setTitle(`${name} Value Over Time`);
      } else {
        setData([{timestamps: undefined, prices: undefined}])
        setTitle('No Data Provided')
      }
      setLoading(false);
    }
    fetchData();
  }, [id, name, setLoading, time]);

  // Setup chart
  const chartData ={
      labels: data[0]['timestamps'],
      datasets: [
        {
          label: 'Value($)',
          fill: false,
          lineTension: 0.3,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: data[0]['prices']
        }
      ]
    }

  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          title:{
            display:true,
            text:title,
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
}

export default Charts
