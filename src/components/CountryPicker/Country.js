import React,{useState,useEffect} from 'react'
import {fetchCountries} from '../../api/index'
import {FormControl,NativeSelect} from '@material-ui/core'
import './country.css'

function Country({handleCountryChange}) {
    const [Coun,setCoun] = useState([])

    useEffect(() => {
      const fetchAPI = async () => {
          setCoun(await fetchCountries())
      }
      fetchAPI()
      
    }, [setCoun])
    console.log(Coun);
    return (
      <FormControl className='form-control'>
          <NativeSelect className='native-select' defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
              <option  value='Global'>Global</option>
              {Coun.map((country,index) => <option className='option' key={index} value={country}>{country}</option>)}
          </NativeSelect>
      </FormControl>
    )
}

export default Country
