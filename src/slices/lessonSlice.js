import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
    lessons: [],
    loading: false,
    error: null
};

// Async thunk for fetching lessons
const fetchLessons = createAsyncThunk('lessons/fetchLessons', async (courseId) => {
    const response = await axios.get(`http://localhost:8000/api/courses/${courseId}/lessons`);
    return response.data;
});

// Async thunk for creating a lesson
const createLesson = createAsyncThunk('lessons/createLesson', async ({ courseId, lessonData }) => {
    const response = await axios.post(`http://localhost:8000/api/courses/${courseId}/lessons`, lessonData);
    return response.data;
});

// Async thunk for updating a lesson
const updateLesson = createAsyncThunk('lessons/updateLesson', async ({ courseId, lessonId, lessonData }) => {
    const response = await axios.put(`http://localhost:8000/api/courses/${courseId}/lessons/${lessonId}`, lessonData);
    return response.data;
});

// Async thunk for deleting a lesson
const deleteLesson = createAsyncThunk('lessons/deleteLesson', async ({ courseId, lessonId }) => {
    await axios.delete(`http://localhost:8000/api/courses/${courseId}/lessons/${lessonId}`);
    return lessonId;
});

// Define the slice
const lessonSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch lessons reducers
            .addCase(fetchLessons.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLessons.fulfilled, (state, action) => {
                state.loading = false;
                state.lessons = action.payload;
            })
            .addCase(fetchLessons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Create lesson reducers
            .addCase(createLesson.pending, (state) => {
                state.loading = true;
            })
            .addCase(createLesson.fulfilled, (state, action) => {
                state.loading = false;
                state.lessons.push(action.payload);
            })
            .addCase(createLesson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Update lesson reducers
            .addCase(updateLesson.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateLesson.fulfilled, (state, action) => {
                state.loading = false;
                const updatedLesson = action.payload;
                state.lessons = state.lessons.map((lesson) =>
                    lesson.id === updatedLesson.id ? updatedLesson : lesson
                );
            })
            .addCase(updateLesson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Delete lesson reducers
            .addCase(deleteLesson.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteLesson.fulfilled, (state, action) => {
                state.loading = false;
                const deletedLessonId = action.payload;
                state.lessons = state.lessons.filter((lesson) => lesson.id !== deletedLessonId);
            })
            .addCase(deleteLesson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default lessonSlice.reducer;

// Export async thunks
export {
    fetchLessons,
    createLesson,
    updateLesson,
    deleteLesson
};
