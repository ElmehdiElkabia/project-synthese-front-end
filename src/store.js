// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import registerReducer from './slices/registerSlice';
import courseReducer from './slices/courseSlice';
import lessonReducer from './slices/lessonSlice';
import certificateReducer from './slices/certificateSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
        courses: courseReducer,
        lessons: lessonReducer,
        certificates: certificateReducer,
    },
});
