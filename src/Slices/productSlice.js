import { createSlice } from "@reduxjs/toolkit";

export const Statutes = Object.freeze({
    IDLE : 'idle',
    LOADING : 'loading',
    ERROR : 'error',
})

const productSlice = createSlice({
        name : 'product',
        initialState :{
            data: [],
            status : Statutes.IDLE,
        },
        reducers :{
              setProduct : (state,action) =>{
                   state.data = action.payload;
              } ,
              setStatus :(state,action) =>{
                      state.status = action.payload;
              }
        }

})

export const {setProduct ,setStatus} = productSlice.actions
export default productSlice.reducer

export function fetchProduct() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(Statutes.LOADING));
   try {
    const res = await fetch('https://fakestoreapi.com/products')
      let data = await res.json();
      dispatch(setProduct(data))
      dispatch(setStatus(Statutes.IDLE))
   } catch (error) {
    console.log(error)
    dispatch(setStatus(Statutes.ERROR))
   }
    }
}