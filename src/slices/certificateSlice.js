// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define initial state
// const initialState = {
//     certificates: [],
//     loading: false,
//     error: null
// };

// // Async thunk for fetching certificates
// export const fetchCertificates = createAsyncThunk('certificates/fetchCertificates', async () => {
//     const response = await axios.get('http://localhost:8000/api/certificates');
//     return response.data;
// });

// // Async thunk for creating a certificate
// export const createCertificate = createAsyncThunk('certificates/createCertificate', async (certificateData) => {
//     const response = await axios.post('http://localhost:8000/api/certificates', certificateData);
//     return response.data;
// });

// // Async thunk for updating a certificate
// export const updateCertificate = createAsyncThunk('certificates/updateCertificate', async ({ certificateId, certificateData }) => {
//     const response = await axios.put(`http://localhost:8000/api/certificates/${certificateId}`, certificateData);
//     return response.data;
// });

// // Async thunk for deleting a certificate
// export const deleteCertificate = createAsyncThunk('certificates/deleteCertificate', async (certificateId) => {
//     await axios.delete(`http://localhost:8000/api/certificates/${certificateId}`);
//     return certificateId;
// });

// // Define the slice
// const certificateSlice = createSlice({
//     name: 'certificates',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // Fetch certificates reducers
//             .addCase(fetchCertificates.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchCertificates.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.certificates = action.payload;
//             })
//             .addCase(fetchCertificates.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             // Create certificate reducers
//             .addCase(createCertificate.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(createCertificate.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.certificates.push(action.payload);
//             })
//             .addCase(createCertificate.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             // Update certificate reducers
//             .addCase(updateCertificate.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(updateCertificate.fulfilled, (state, action) => {
//                 state.loading = false;
//                 const updatedCertificate = action.payload;
//                 state.certificates = state.certificates.map((certificate) =>
//                     certificate.id === updatedCertificate.id ? updatedCertificate : certificate
//                 );
//             })
//             .addCase(updateCertificate.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//             // Delete certificate reducers
//             .addCase(deleteCertificate.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(deleteCertificate.fulfilled, (state, action) => {
//                 state.loading = false;
//                 const deletedCertificateId = action.payload;
//                 state.certificates = state.certificates.filter((certificate) => certificate.id !== deletedCertificateId);
//             })
//             .addCase(deleteCertificate.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             });
//     },
// });

// export default certificateSlice.reducer;

// // Export async thunks
// export {
//     fetchCertificates,
//     createCertificate,
//     updateCertificate,
//     deleteCertificate
// };
