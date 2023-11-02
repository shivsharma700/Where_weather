import { BsDropletFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import ReduxState from "../../Interfaces/ReduxState";
import {useSelector} from "react-redux";

function LowerHalf() {

    const currentData = useSelector((state : ReduxState) => state.forecast.data.currentData);
    const location = useSelector((state : ReduxState) => state.forecast.data.location);

    return (
        <div className="h-[40%] w-full p-4"> 
           
            <div className="h-[50%] w-full p-4 flex flex-col justify-between"> 
                <div className="flex flex-col">
                    {/* precipitation */}
                    <div className="flex items-center gap-4  text-sm">
                        <div>
                            <AiFillCloud />
                        </div>
                        <div>
                            {currentData.condition}
                        </div>
                    </div>
    
                    <div className="flex items-center gap-4 my-2 text-sm">
                        <div>
                            <BsDropletFill />
                        </div>
                        <div>
                            Perc - {currentData.chance_of_rain}%
                        </div>
                    </div>
                </div>
    
                <div className="flex gap-2 mt-24 items-center">
                    {/* location */}
                    <div><MdLocationPin /></div>
    
                    <div>{location.name}, {location.region}, {location.country}</div>
                </div>
            </div>
        </div>
    )
}


export default LowerHalf;