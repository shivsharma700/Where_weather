import HighlightRow from "./HighlightRow"
import TodayRow from "./TodayRow";
import TopRow from "./TopRow"
import WeekRow from "./WeekRow"
import {useState} from "react";

const MainData = () => {
  const [row, setRow] = useState<string>("Week");

  function SetRow(text : string){
    setRow(text);
  }

  return (
    <div className="overflow-y-auto flex flex-col justify-start items-center py-4 basis-9/12 text-black  bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl" >
        <TopRow row={row} SetRow={SetRow} />
        {row == "Week" ? <WeekRow/> : <TodayRow/>}
        <div className="font-semibold text-2xl mt-8 text-left w-full px-12 py-2 " >
          Today's Highlights
        </div>
        <HighlightRow/>
    </div>
  )
}

export default MainData