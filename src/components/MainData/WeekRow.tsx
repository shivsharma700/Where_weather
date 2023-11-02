import TempCard from "../TempCard"
import cloudyImage from "../../Assets/iconPartlyCloudyDay.png"
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

const WeekRow = () => {

  const dayForecast = useSelector((state : ReduxState) => state.forecast.data.dayForecast);
  const temp = useSelector((state : ReduxState) => state.forecast.temp )

  const WeekDays = [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरूवार",
    "शुक्रवार",
    "शनिवार"
  ]

  return (
    <div className="w-full px-12 py-2 flex flex-wrap gap-5" >
      { dayForecast && dayForecast.map((day,idx)=> {
        return  <TempCard key={idx} temperature={temp == "C" ? day.avgtemp_c.toString() + "°C" : day.avgtemp_f.toString() + "°F"} image={cloudyImage} title={WeekDays[(new Date(day.date)).getDay()]} />
      })}
    </div>
  )
}

export default WeekRow