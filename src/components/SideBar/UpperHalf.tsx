import {CiSearch} from "react-icons/ci";
import iconCloudyNight from "../../Assets/iconCloudyNight.png"
import ReduxState from "../../Interfaces/ReduxState";
import {useSelector} from "react-redux";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { fetchData } from "../../Redux/Slices/ForecastSlice";
import { useState } from "react";

const UpperHalf = () => {

    const currentData = useSelector((state : ReduxState) => state.forecast.data.currentData);
    const temp = useSelector((state : ReduxState) => state.forecast.temp )
    const dispatch = useAppDispatch();
    const [loc , setLoc] = useState<string>("");
  return (
    <div className=" max-h-[30rem] w-full p-4 flex flex-col justify-center items-start  " >
        <div className=" flex flex-row w-full mt-12 " >
            {/* Search Bar */}
            <input 
               type="text" 
               placeholder="Search"
               onChange={(e) => {setLoc(e.target.value)}}
               className=" px-2 py-2 basis-[90%] block rounded-tl-md rounded-bl-md bg-white text-black "
            />
        <button onClick={() => {dispatch(fetchData(loc))}} className=" basis-[10%] block  text-white text-lg font-semibold bg-sky-500 p-4 rounded-tr-md rounded-br-md  " >
           <CiSearch/>
        </button>     
        </div>

        <div className=" w-full h-[50%] flex justify-center mt-7 " >
            {/* image container */}
            <img src={iconCloudyNight} alt="" className="w-[50%] h-full " />
        </div>
        
        <div className="flex flex-col mt-7">
            {/* temperature data */}
            <div className=" text-7xl text-black flex flex-row items-start " >
                <div>{temp == "C" ? currentData.temp_c : currentData.temp_f}</div>
                <div className=" text-5xl mt-2 " >{temp == "C" ? "°C" : "°F"}</div>
            </div>
            <div className=" text-black text-md " >
                {new Date().toUTCString()}
            </div>
        </div>
    </div>
  )
}

export default UpperHalf