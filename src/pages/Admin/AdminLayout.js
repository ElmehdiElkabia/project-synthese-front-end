import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../../components/Sidebar/SidebarAdmin';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Users from './Users';
import Dashboard from './Dashboard';
import CourseList from '../../components/Course/CourseList';
import NavbarAdmin from '../../components/Navbar/NavbarAdmin';
import Footer from '../../components/Footer/Footer';
import CourseCreate from '../../components/Course/CourseCreate';
import CourseDetail from '../../components/Course/CourseDetail';
import CourseEdit from '../../components/Course/CourseEdit';

const AdminLayout = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [role, setRole] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedRole = localStorage.getItem('role');
        const storedUrl = localStorage.getItem('url');
        
        if (storedToken) {
            setToken(storedToken);
            if (storedRole === 'admin') {
                // Render the component
                setRole(storedRole);
            } else {
                // Redirect to loading page if role is not 'admin'
                navigate(storedUrl); // Replace '/loading' with your loading page route
            }
        } else {
            // Redirect to login if token is not found
            navigate('/login'); // Replace '/login' with your actual login route
        }
    }, []);

    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            {role === 'admin' && (
                <>
                <NavbarAdmin toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <SidebarAdmin isSidebarOpen={isSidebarOpen} /> 
                <div className='p-4 md:ml-64 h-auto pt-20'> 

                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="courses">
                        <Route index path="card" element={<CourseList />} />
                        <Route path="create" element={<CourseCreate />} />
                        <Route path="edit/:id" element={<CourseEdit />} />
                        <Route path="preview/:id" element={<CourseDetail />} />
                        
                    </Route>
                    <Route path="users" element={<Users />} />
                </Routes>
                <Footer />
                </div>
                </>
            )}
        </div>
    );
};

export default AdminLayout;
