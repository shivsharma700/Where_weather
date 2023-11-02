import { useSelector } from "react-redux";
import HighlightCard from "../HighLightCard"
import ReduxState from "../../Interfaces/ReduxState";

const HighlightRow = () => {

  function uvRange() : string {
    if(currentData.uv <= 5) return "Low"
    else if (currentData.uv > 5 && currentData.uv < 8) return "moderate"
    else return "high"
  }
  function humidity() : string{
    if(currentData.humidity <= 30)return "Dry";
    else if(currentData.humidity <= 45)return "Ideal";
    else return "High"
  }

  function airQuality() : string {
    if(currentData.aqi <= 50) return "good";
    else if(currentData.aqi <= 250) return "moderate";
    else return "Very Unhealthy😨"
  }

  const currentData = useSelector((state : ReduxState) => state.forecast.data.currentData);
  return (
    <div className="flex flex-wrap gap-6 px-12 py-2" >
        <HighlightCard footer={uvRange()} data={currentData.uv.toString()} title={"UV Index"} />
        <HighlightCard footer={"km/h"} data={currentData.wind_kmph.toString()} title={"Wind Status"} />
        <HighlightCard footer={currentData.sunset} data={currentData.sunrise} title={"Sunrise & Sunset"} />
        <HighlightCard footer={humidity()} data={currentData.humidity.toString() + "%"} title={"Humidity"} />
        <HighlightCard footer={"Clear Air"} data={currentData.vis_km.toString()} title={"Visibility"} />
        <HighlightCard footer={airQuality()} data={currentData.aqi.toString()} title={"Air Quality"} />

    </div>
  )
}

export default HighlightRow