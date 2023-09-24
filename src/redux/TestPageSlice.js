import { createSlice } from "@reduxjs/toolkit";


const TestPageSlice=createSlice({
    name:"testpage",
    initialState:{
        questionTimer:[],
        questionIndex:0,
        totalTime:0
    },
    reducers:{
        addIndex:(state,action)=>{
          state.questionIndex=action.payload
        },
        addQuestionTimer:(state,action)=>{
            if(state.questionTimer.length ==0 || state.questionIndex >= state.questionTimer.length){
                state.questionTimer.push(action.payload);
            }
            else{
                state.questionTimer[state.questionIndex]=action.payload;
            }
        },
        addTotalTime:(state,action)=>{
                 state.totalTime=action.payload
        }
    }
})

export const{addQuestionTimer,addIndex,addTotalTime}=TestPageSlice.actions;
export default TestPageSlice.reducer