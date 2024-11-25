const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      token: localStorage.getItem('token'),
      loading: false,
      error: null,
      isAuthenticated: false,
    },
    reducers: {
      // Regular reducer for logout
      logout: (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem('token');
      },
      // Clear error state
      clearError: (state) => {
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isAuthenticated = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { logout, clearError } = authSlice.actions;
  export default authSlice.reducer;