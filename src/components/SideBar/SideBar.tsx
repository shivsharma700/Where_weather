import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

const SideBar = () => {
  return (
    <div className="basis-3/12 overflow-y-auto  flex flex-col items-center justify-center text-black rounded-tl-3xl rounded-bl-3xl" style={{background: 'rgba(255,255,255,0.81)'}}>
        <UpperHalf/>
        <div className=" h-[1px] w-[87%] bg-[#e9ecef] mt-8 rounded-md " ></div>
        <LowerHalf/>
    </div>
  )
}

export default SideBar