import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import Loading from '../components/Loading/Loading';
import AdminLayout from '../pages/Admin/AdminLayout';
import React from 'react';

// import UserProfile from '../pages/User/UserProfile';
// import UserCourses from '../pages/User/UserCourses';
// import CourseDetail from '../pages/Course/CourseDetail';
// import LessonDetail from '../pages/Course/LessonDetail';
// import TestDetail from '../pages/Test/TestDetail';
// import CertificateDetail from '../pages/Certificate/CertificateDetail';
// import ProfileSettingsPage from '../pages/Settings/ProfileSettingsPage';
// import SecuritySettingsPage from '../pages/Settings/SecuritySettingsPage';
// import AppearanceSettingsPage from '../pages/Settings/AppearanceSettingsPage';

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route index element={<Loading />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="resetPassword" element={<ResetPassword />} />
                    <Route path="admin/*" element={<AdminLayout />} />
                        {/* <Route index element={<AdminLayout />} /> */}
                       
                        {/* Add other admin routes here */}
                        {/* <Route path="users" element={<Users />} />
                        <Route path="courses/:courseId" element={<AdminCourseDetail />} />
                        <Route path="courses/:courseId/lessons/:lessonId" element={<AdminLessonDetail />} />
                        <Route path="settings" element={<AdminSettings />} /> */}
                    {/* </Route> */}
                    {/* <Route path="user">
                        <Route index element={<UserProfile />} />
                        <Route path="profile" element={<UserProfile />} />
                        <Route path="courses" element={<UserCourses />} />
                    </Route>
                    <Route path="course/:courseId" element={<CourseDetail />}>
                        <Route path="lesson/:lessonId" element={<LessonDetail />} />
                    </Route>
                    <Route path="test" element={<TestDetail />} />
                    <Route path="certificate" element={<CertificateDetail />} />
                    <Route path="settings">
                        <Route path="profile" element={<ProfileSettingsPage />} />
                        <Route path="security" element={<SecuritySettingsPage />} />
                        <Route path="appearance" element={<AppearanceSettingsPage />} />
                    </Route> */}
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterComponent;
