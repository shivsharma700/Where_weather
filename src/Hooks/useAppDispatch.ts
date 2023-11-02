import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/Store";


export const useAppDispatch = () => useDispatch<AppDispatch>();