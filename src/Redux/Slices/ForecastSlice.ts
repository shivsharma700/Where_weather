import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import forcastDataState from "../../Interfaces/ForcastDataState";
import axiosInstance from "../../Config/axiosInstance";

const initialState : forcastDataState = {
    status : 'default',
    data: {
        location: {
            country: '',
            region: '',
            name: '',
            localtime: ''
        },
        dayForecast: [],
        currentData: {
            uv: 0,
            wind_kmph: 0,
            humidity: 0,
            vis_km: 0,
            aqi: 0,
            sunrise: '',
            sunset: '',
            temp_c: 0,
            temp_f: 0,
            condition: '',
            is_day: false,
            chance_of_rain: 0,
        },
    },
    temp : "C"
}

export const fetchData = createAsyncThunk('data/fetchdata', async (city : string) => {
    try {
        const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=${city}`);
        console.log(response);
        return response;
    } catch(error) {
        console.log(error);
    }
});
const forecastSlice = createSlice({
    name : 'forecast',
    initialState,
    reducers : {
        ChangeTemp : (state,action) => {
            state.temp = action.payload;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchData.fulfilled, (state,action) =>{
            if(!action.payload) return;
            state.status = "success";
            const {location, forecast, current} = action.payload.data;

            // setting location
            state.data.location.country = location?.country;
            state.data.location.region = location?.region;
            state.data.location.name = location?.name;
            state.data.location.localtime = location?.localtime;

            //setting dayForecast
            state.data.dayForecast = forecast.forecastday.map((day : any) => {
                return {
                    date : day?.date,
                    avgtemp_c : day?.day?.avgtemp_c,
                    avgtemp_f : day?.day?.avgtemp_f,
                    conditoin : day?.day?.condition?.text,
                    hour : day?.hour
                }
            })

            //setting currentData
            state.data.currentData.uv =  current.uv;
            state.data.currentData.wind_kmph = current.wind_kph;
            state.data.currentData.humidity = current.humidity;
            state.data.currentData.vis_km = current.vis_km;
            state.data.currentData.aqi = current.air_quality.pm2_5;
            state.data.currentData.sunrise = forecast.forecastday[0].astro.sunrise;
            state.data.currentData.sunset = forecast.forecastday[0].astro.sunset;
            state.data.currentData.temp_c = current.temp_c;
            state.data.currentData.temp_f = current.temp_f;
            state.data.currentData.condition = current.condition.text;
            state.data.currentData.is_day = current.is_day;
            state.data.currentData.chance_of_rain =  forecast.forecastday[0].day.daily_chance_of_rain;

        })
        .addCase(fetchData.pending,(state) => {
            state.status = "loading";
        })
    }
})

export const {ChangeTemp} = forecastSlice.actions;
export default forecastSlice.reducer;