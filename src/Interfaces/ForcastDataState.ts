import forecastData from "./ForecastData";

export default interface forcastDataState {
    status : 'default' | 'loading' | 'success' | 'failure',
    data : forecastData,
    temp : string 
}