import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LearningLog, ResponseLearningLogSchema } from '~/entities/learning-log'
import { WEBAPP_API_URI } from '~/env/uri'
import request from '~/modules/requests'

export interface LearningLogState {
  learningLog: LearningLog
}

const initialState: LearningLogState = {
  learningLog: undefined,
}

export const readLearningLog = createAsyncThunk<
  { LearningLog: LearningLog },
  {},
  { rejectValue: undefined }
>('learningLog/raedLearningLog', async (_, thunkApi) => {
  try {
    const res = await request.get<ResponseLearningLogSchema>({
      url: `${WEBAPP_API_URI}/home`,
    })
    const { data, status } = res
    const learningLog = new LearningLog(data)
    return { learningLog }
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

export const learningLogSlice = createSlice({
    name: 'learningLog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(readLearningLog.fulfilled, (state, action) => {
            state.learningLog = action.payload.LearningLog
        })
    }
})

export default learningLogSlice.reducer
