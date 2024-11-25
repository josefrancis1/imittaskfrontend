import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Create async thunk for login
export const userRegistration = createAsyncThunk(
    'auth/register',
    async (body, { rejectWithValue }) => {
        console.log(body);

        try {
            // Replace with your actual API endpoint
            const response = await axios.post('http://localhost:3001/user/signup', body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            //   
            console.log(response, 'hjh');

            //   const data = await response.json();
            // Store token in localStorage
            //   localStorage.setItem('token', data.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




export const userLogin = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
    try {
        // Replace with your actual API endpoint
        const response = await axios.post('http://localhost:3001/user/login', body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });


        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const getposts = createAsyncThunk(
    'posts/getposts',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3001/user/getposts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const likepost = createAsyncThunk(
    'posts/likeposts',
    async (body, { rejectWithValue }) => {
        console.log(body,'kkk');
        
        try {
            const response = await axios.post('http://localhost:3001/user/likepost',body);
            console.log(response);
            
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const commentpost = createAsyncThunk(
    'posts/commentposts',
    async (body, { rejectWithValue }) => {
        console.log(body,'kkk');
        
        try {
            const response = await axios.post('http://localhost:3001/user/addcomment',body);
            console.log(response);
            
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);  