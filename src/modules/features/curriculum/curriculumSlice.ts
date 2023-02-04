import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { WEBAPP_API_URI } from '~/env/uri'
import request from '~/modules/requests'
import {
  ResponseLearningContentSchema,
  ResponseCurriculumsSchema,
  ResponseLanguageSchema,
} from '~/entities/curriculum'

interface CurriculumState {
  languages: ResponseLanguageSchema[]
  contents: ResponseLearningContentSchema[]
}

const initialState: CurriculumState = {
  languages: [],
  contents: [],
}

export const readLangsContents = createAsyncThunk<{
  languages: ResponseLanguageSchema[]
  contents: ResponseLearningContentSchema[]
}>('curriculums/readLangsContents', async ({}, thunkApi) => {
  try {
    const res = await request.get<ResponseCurriculumsSchema>({
      url: `${WEBAPP_API_URI}/open/curriculums`,
    })
    const { data, status } = res
    return { languages: data.languages, contents: data.contents }
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

export const curriculumSlice = createSlice({
  name: 'curriculums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readLangsContents.fulfilled, (state, action) => {
      state.languages = action.payload.languages
      state.contents = action.payload.contents
    })
  },
})

export default curriculumSlice.reducer
