// Ref: https://qiita.com/hibohiboo/items/5d20423ec6ba96e0f521
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'
import { Optional } from '~/entities/base'

export interface AuthState {
  user: Optional<CognitoUser>
  isCurrentUserChecked: boolean
}

const initialState: AuthState = {
  user: undefined,
  isCurrentUserChecked: false,
}

export interface SignInArgs {
  email: string
  password: string
}

export const signIn = createAsyncThunk<
  { user: CognitoUser },
  SignInArgs,
  { rejectValue: { user: undefined } }
>('auth/signIn', async ({ email, password }, thunkApi) => {
  try {
    const user: CognitoUser = await Auth.signIn(email, password)
    return { user }
  } catch (error) {
    return thunkApi.rejectWithValue({ user: undefined })
  }
})

export const signOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: undefined }
>('auth/signOut', async (_, thunkApi) => {
  try {
    await Auth.signOut()
    return undefined
  } catch (error) {
    return thunkApi.rejectWithValue(undefined)
  }
})

export const setCurrentUser = createAsyncThunk<
  any,
  undefined,
  { rejectValue: undefined }
>('auth/setCurrentUser', async (_, thunkApi) => {
  try {
    const currentUser = await Auth.currentAuthenticatedUser()

    return currentUser
  } catch (error) {
    return thunkApi.rejectWithValue(undefined)
  }
})

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ username }: { username: string }, thunkApi) => {
    try {
      await Auth.forgotPassword(username)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const forgotPasswordSubmit = createAsyncThunk(
  'auth/forgotPasswordSubmit',
  async (
    {
      username,
      code,
      password,
    }: {
      username: string
      code: string
      password: string
    },
    thunkApi
  ) => {
    try {
      await Auth.forgotPasswordSubmit(username, code, password)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.user = action.payload.user
    })
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(signOut.rejected, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(setCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.isCurrentUserChecked = true
    })
    builder.addCase(setCurrentUser.rejected, (state, action) => {
      state.user = action.payload
      state.isCurrentUserChecked = true
    })
  },
})

export default authSlice.reducer
