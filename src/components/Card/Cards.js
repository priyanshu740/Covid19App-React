import React from 'react'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import './card.css' 

function Cards({data: {confirmed,deaths,recovered,lastUpdate}}) {
    // console.log(confirmed);
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className='container'>
            <Grid container spacing={3} justify='center'> 
                <Grid item component={Card} className='grid infected'>
                    <CardContent >
                        <Typography color='textSecondary'>Confirmed</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2}/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>total</Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card} className='grid recovered'>
                    <CardContent >
                        <Typography color='textSecondary'>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={2}/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>total</Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card} className='grid deaths'>
                    <CardContent >
                        <Typography color='textSecondary'>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={2}/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>total</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
