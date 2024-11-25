import {configureStore} from '@reduxjs/toolkit'
import feedSlice from './feeds/reducers/index'
const store=configureStore({
    reducer:{
        feeds:feedSlice
    }
})
export default store