import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios'

import './Charts.css'

const Charts = ({ loading, setLoading, id }) => {
  const [data, setData] = useState([{timestamps: null, prices: null}])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nomics.com/v1/currencies/sparkline?key=4582ca2d8e989291b7cb5c9236018ace&ids=${id}&start=${convertStartDate()}`)
      setData(res.data);
      setLoading(false);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convertStartDate = () => {
    let date = new Date()
    let converted = date.toISOString()
    let arr = converted.split('')
    arr.splice(2, 2, 19)
    let yearAgo = arr.join('')
    return yearAgo
  }

  const chartData ={
      labels: data[0]['timestamps'],
      datasets: [
        {
          label: 'Values',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: data[0]['prices']
        }
      ]
    }

  if(loading) {
    return <h2>Charting data...</h2>
  }
  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          title:{
            display:true,
            text:`${id}`,
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
