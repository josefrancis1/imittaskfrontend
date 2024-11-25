import {createSlice} from '@reduxjs/toolkit'
import {userRegistration,userLogin, getposts} from '../../actions/methods';
const feedsSlice = createSlice({
    name: 'feeds',
    initialState: {
        value: [],
        loading: false,
        user:{},
        token: localStorage.getItem('token'),
        error:false,
        isAuthenticated: false,
        posts:[]
    },
    reducers: {
        addFeeds: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(userRegistration.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(userRegistration.fulfilled, (state, action) => {
            console.log(action.payload,action);
            
            state.loading = false;
            state.user = action.payload.data.user;
            // state.token = action.payload.token;
            state.isAuthenticated = true;
          })
          .addCase(userRegistration.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          .addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(userLogin.fulfilled, (state, action) => {
            console.log(action.payload,action);
            
            state.loading = false;
            state.user = action.payload.user;
            // state.token = action.payload.token;
            state.isAuthenticated = true;
          })
          .addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          .addCase(getposts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getposts.fulfilled, (state, action) => {
            console.log(action.payload,action);
            
            state.loading = false;
            state.posts = action.payload.posts;
            // state.token = action.payload.token;
            state.isAuthenticated = true;
          })
          .addCase(getposts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
      },
    
})

export default feedsSlice.reducer