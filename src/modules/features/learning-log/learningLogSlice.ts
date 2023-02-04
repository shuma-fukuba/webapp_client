import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LearningLog, ResponseLearningLogSchema } from '~/entities/learning-log'
import { WEBAPP_API_URI } from '~/env/uri'
import request from '~/modules/requests'

export interface LearningLogState {
  learningLog: LearningLog
  loadingMarkers: boolean
}

const initialState: LearningLogState = {
  learningLog: new LearningLog({
    today_time: 0,
    monthly_learning_times: [],
    monthly_sum: 0,
    total_sum: 0,
    language_circle: [],
    content_circle: [],
  }),
  loadingMarkers: false,
}

export const readLearningLog = createAsyncThunk<
  { learningLog: LearningLog },
  {},
  { rejectValue: { learningLog: undefined } }
>('learningLog/readLearningLog', async (_, thunkApi) => {
  try {
    thunkApi.dispatch(setLoadingMarkers(true))
    const res = await request.get<ResponseLearningLogSchema>({
      url: `${WEBAPP_API_URI}/private/home`,
    })
    const { data, status } = res
    const learningLog = new LearningLog(data)
    return { learningLog }
  } catch (error) {
    return thunkApi.rejectWithValue(null)
  } finally {
    thunkApi.dispatch(setLoadingMarkers(false))
  }
})

export const createLearningLog = createAsyncThunk<
  { learningLog: LearningLog },
  { body: any },
  { rejectValue: { learningLog: undefined } }
>(
  'learningLog/createlearningLog',
  async ({ body }: { body: any }, thunkApi) => {
    try {
      thunkApi.dispatch(setLoadingMarkers(true))
      const res = await request.post<ResponseLearningLogSchema>({
        url: `${WEBAPP_API_URI}/private/home`,
        data: body,
      })
      const { data, status } = res
      const learningLog = new LearningLog(data)
      return { learningLog }
    } catch (error) {
      return thunkApi.rejectWithValue(null)
    } finally {
      thunkApi.dispatch(setLoadingMarkers(false))
    }
  }
)

export const learningLogSlice = createSlice({
  name: 'learningLog',
  initialState,
  reducers: {
    setLoadingMarkers: (state, action: PayloadAction<boolean>) => {
      state.loadingMarkers = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readLearningLog.fulfilled, (state, action) => {
      state.learningLog = action.payload.learningLog
    })
    builder.addCase(readLearningLog.rejected, (state, action) => {
      state.learningLog = action.payload.learningLog
    })
    builder.addCase(createLearningLog.fulfilled, (state, action) => {
      state.learningLog = action.payload.learningLog
    })
    builder.addCase(createLearningLog.rejected, (state, action) => {
      state.learningLog = action.payload.learningLog
    })
  },
})

export const { setLoadingMarkers } = learningLogSlice.actions

export default learningLogSlice.reducer
