import React, { useState ,useEffect} from 'react'
import {fetchDailtData} from '../../api/index'
import {Line,Bar} from 'react-chartjs-2'
import './chart.css'

function Chart({data:{confirmed,deaths,recovered},country}) {

    const [dailyData,setDailydata] = useState([])

    useEffect(() => {
       const fetchAPI = async () => {

        setDailydata(await fetchDailtData())
    }
    console.log(dailyData)
    fetchAPI()
    },[])

    const lineChart = (
       dailyData.length !== 0 ? (<Line
            data={{
                labels:dailyData.map(({date}) => date),
                datasets:[{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true
                },{
                    data:dailyData.map(({deaths}) => deaths),
                    label:'Deaths',
                    borderColor:'red',
                    fill:true
                }]
            }}
        />) : null
    ) 

    const barChart = (
    confirmed ? 
        (<Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:[ 'rgb(89, 89, 212)','rgb(60, 224, 134)','rgb(207, 5, 39)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
            }}
        />): null
    )
    return (
        <div className='container2'>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
