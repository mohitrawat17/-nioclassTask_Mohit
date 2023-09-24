import { configureStore } from "@reduxjs/toolkit";
import LandingPageSlice from "./LandingPageSlice";
import TestPageSlice from "./TestPageSlice";


const store=configureStore({
    reducer:{
        landingpage:LandingPageSlice,
        testpage:TestPageSlice
    }
})

export default store