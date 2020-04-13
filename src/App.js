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
            </div>
            <div className={styles.fott}>
                <h1 className={styles.one}>THIS SITE WAS DEVELOPED BY ZAIDDEV™</h1>
                <h2 className={styles.rights}>All rights reserved ZAIDDEV|2020®</h2>
            </div>
        )
    }
}

export default App;