import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice'
export default configureStore({
  reducer: {
    mail: mailReducer,    // This mail Reducer will manage the mailSlice
    user: userReducer,
  },
});
