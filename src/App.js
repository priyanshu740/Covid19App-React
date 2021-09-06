import React from 'react';
import './App.css';
import Cards from './components/Card/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/CountryPicker/Country';
import {fetchData} from './api'

class App extends React.Component{
  state = {
    data: {},
    country:''
}

  async componentDidMount() {
    const fetcheddata =await fetchData()
    this.setState({data:fetcheddata})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ data:fetchedData, country:country})
    // console.log(fetchedData);
  }

  render(){
    const {data,country} = this.state
  
    return(
      <div className='container'>
        <Cards data={data}/>
        <Country handleCountryChange={this.handleCountryChange}/>     
        <Chart data={data} country={country}/>
      </div>
    )
  }
}
export default App