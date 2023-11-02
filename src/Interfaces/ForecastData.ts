import currentDayForecast from "./CurrentDayForecast";
import DayForecast from "./DayForecast";

export default interface forecastData {
    location : { localtime : string , country : string, region : string, name : string },
    dayForecast : DayForecast[],
    currentData : currentDayForecast
}