import { configureStore } from '@reduxjs/toolkit'
import WineService from './wines/WineService'

const store = configureStore({
  reducer: {
    wineList: WineService
  },
})

// React redux documentation code
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;