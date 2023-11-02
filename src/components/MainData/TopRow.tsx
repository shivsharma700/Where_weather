import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { ChangeTemp } from "../../Redux/Slices/ForecastSlice";
import ReduxState from "../../Interfaces/ReduxState";

function TopRow({SetRow, row}: {SetRow : CallableFunction, row : string}) {

    const dispatch = useAppDispatch();
    const temp = useSelector((state : ReduxState) => state.forecast.temp )

    return (
        <div className="flex justify-between items-center w-full px-12 py-2">
            <div className="flex items-center cursor-pointer justify-center text-xl font-semibold">
                {/* Today or week */}
                <div className={`mr-4 ${row == "Today" ? "text-black" : "text-primary"} `} onClick={() => SetRow("Today")} >
                    Today 
                </div>
                <div className={`mr-4 ${row == "Week" ? "text-black" : "text-primary"} `} onClick={() => SetRow("Week")} >
                    Week
                </div>
            </div>

            <div className="flex items-center font-bold text-xl justify-center ">
                {/* C or F */}
                <div
                 onClick={() => dispatch(ChangeTemp("C"))}
                 className= {`mr-8 flex items-center justify-center border rounded-[100%] w-[3rem] h-[3rem] ${temp == "C" ? "bg-black text-white": "bg-white text-black"} `}
                >
                    °C
                </div>

                <div
                 onClick={() => dispatch(ChangeTemp("F"))}
                 className={`mr-8 flex items-center justify-center border rounded-[100%] w-[3rem] h-[3rem] ${temp == "F" ? "bg-black text-white": "bg-white text-black"} `}
                >
                    °F
                </div>
            </div>
        </div>
    )
}

export default TopRow;