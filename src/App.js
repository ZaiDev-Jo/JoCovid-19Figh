import React from 'react';

import { Cards, Chart, CountryPicker, One, Two} from './Components';
import styles from'./App.module.css';
import { fetchData } from './api';
import image from './Components/images/image1.png';

class App extends React.Component {
state = {
    data: {},
    country: '',
}
   async componentDidMount() {
        const fetchedData = await fetchData();

        
        this.setState({ data: fetchedData});
    } 

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

this.setState({ data: fetchedData, country: country });
    }
    render() {
        const { data, country } = this.state
        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                      <Cards data={data} />
                      <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <One />
                <Two />
                <h1 className={styles.fott}>THIS SITE WAS DEVELOPED BY ZAID AHMAD</h1>
            </div>
        )
    }
}

export default App;