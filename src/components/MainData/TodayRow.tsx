import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";
import TempCard from "../TempCard";
import cloudyImage from "../../Assets/iconPartlyCloudyDay.png"

const TodayRow = () => {

  const dayForecast = useSelector((state : ReduxState) => state.forecast.data.dayForecast[0].hour);
  const temp = useSelector((state : ReduxState) => state.forecast.temp )

  return (
    <div className="w-full px-12 py-2 flex flex-wrap gap-5" >
      { dayForecast && dayForecast.map((hour,idx)=> {
        return  <TempCard key={idx} temperature={temp == "C" ?  hour.temp_c.toString() + "°C" : hour.temp_f.toString() + "°F"} image={cloudyImage} title={`${hour.time.substring(10,hour.time.length)}`} />
      })}
    </div>
  )
}

export default TodayRow