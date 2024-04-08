import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
    courses: [],
    loading: false,
    error: null
};

const headers = {
    // Add your headers here
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json', // Example header
};
// Async thunk for fetching courses
const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
    const response = await axios.get('http://localhost:8000/api/courses', { headers });
    return response.data;
});

// Async thunk for fetching a single course
const fetchCourse = createAsyncThunk('courses/fetchCourse', async (courseId) => {
    const response = await axios.get(`http://localhost:8000/api/courses/${courseId}`,{ headers });
    return response.data;
});

// Async thunk for creating a course
const createCourse = createAsyncThunk('courses/createCourse', async (courseData) => {
    const response = await axios.post('http://localhost:8000/api/courses', courseData,{ headers });
    return response.data;
});

// Async thunk for updating a course
const updateCourse = createAsyncThunk('courses/updateCourse', async ({ courseId, courseData }) => {
    const response = await axios.put(`http://localhost:8000/api/courses/${courseId}`, courseData,{ headers });
    return response.data;
});

// Async thunk for deleting a course
const deleteCourse = createAsyncThunk('courses/deleteCourse', async (courseId) => {
    await axios.delete(`http://localhost:8000/api/courses/${courseId}`,{ headers });
    return courseId;
});

// Define the slice
const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch courses reducers
            .addCase(fetchCourses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Fetch courses reducers
            .addCase(fetchCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })
            .addCase(fetchCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Create course reducers
            .addCase(createCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCourse.fulfilled, (state, action) => {
                state.loading = false;
                state.courses.push(action.payload);
            })
            .addCase(createCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Update course reducers
            .addCase(updateCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCourse.fulfilled, (state, action) => {
                state.loading = false;
                const updatedCourse = action.payload;
                state.courses = state.courses.map((course) =>
                    course.id === updatedCourse.id ? updatedCourse : course
                );
            })
            .addCase(updateCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Delete course reducers
            .addCase(deleteCourse.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCourse.fulfilled, (state, action) => {
                state.loading = false;
                const deletedCourseId = action.payload;
                state.courses = state.courses.filter((course) => course.id !== deletedCourseId);
            })
            .addCase(deleteCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default courseSlice.reducer;

// Export async thunks
export {
    fetchCourses,
    fetchCourse,
    createCourse,
    updateCourse,
    deleteCourse
};
