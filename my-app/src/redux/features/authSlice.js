import { createSlice } from "@reduxjs/toolkit"


const initialState={
    user:JSON.parse(localStorage.getItem('user')) || null,
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
    setUser:()=>{},
    logout:()=>{}
    }
})


export const {setUser,logout}=authSlice.reducer;
export default authSlice.reducer;