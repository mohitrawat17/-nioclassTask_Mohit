import { createSlice } from "@reduxjs/toolkit";


const LandingPageSlice=createSlice({
    name:"landingpage",
    initialState:{
         name:"",
         questions:[],
    },
    reducers:{
         addName:(state,action)=>{
             state.name=action.payload;
         },
         addQuestions:(state,action)=>{
            state.questions.push(action.payload);
         },
         removeQuestions:(state,action)=>{
            state.questions=state.questions.filter((items)=>{
                return items != action.payload
            })
         }

    }

})

export const{addName,addQuestions,removeQuestions}=LandingPageSlice.actions
export default LandingPageSlice.reducer