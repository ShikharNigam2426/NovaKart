import { configureStore } from '@reduxjs/toolkit'
import userLoginSlice from '../features/usersLogin/userLoginSlice'
import checkOutSlice from '../features/checkOut/checkOutSlice'

export const store = configureStore({
  reducer: {
    logger: userLoginSlice,
    checkout: checkOutSlice, 
  },
})
