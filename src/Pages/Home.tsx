import MainData from "../components/MainData/MainData"
import SideBar from "../components/SideBar/SideBar"

import cloudyNight from ".././Assets/cloudyNight.jpg";
import { useEffect, useState } from "react";
import { ChangeTemp, fetchData } from "../Redux/Slices/ForecastSlice";
import { useAppDispatch } from "../Hooks/useAppDispatch";
import axios from "axios";

const Home = () => {

  const dispatch = useAppDispatch();
  const [city, setCity] = useState<string>("");
  dispatch(ChangeTemp("F"));

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOC_API_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&`);
      setCity(response?.data?.address?.city)
    });
    if(!city){
      dispatch(fetchData("delhi"));
    }else{
      dispatch(fetchData(city));
    }
  },[city]);

  return (
    <div className="h-[100vh] px-8 py-4 flex flex-row justify-center items-stretch " style={{backgroundSize: 'cover', backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cloudyNight})`}} >
        {/* <div className=" " > */}
           <SideBar/>
           <MainData/>
        {/* </div> */}
    </div>
  )
}

export default Home