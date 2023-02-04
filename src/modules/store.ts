import { configureStore } from '@reduxjs/toolkit'
import authReducer from '~/modules/features/auth/authSlice'
import learningLogReducer from '~/modules/features/learning-log/learningLogSlice'
import curriculumReducer from '~/modules/features/curriculum/curriculumSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    learningLog: learningLogReducer,
    curriculums: curriculumReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
