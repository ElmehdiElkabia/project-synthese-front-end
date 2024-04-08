import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdGroups, MdArrowForwardIos, MdCardMembership } from "react-icons/md";

const SidebarAdmin = ({ isSidebarOpen }) => { // Removed toggleSidebar prop
    const [visible, setVisible] = useState(false);

    // Define an array of sidebar items
    const style = { width: '1.5em', height: '1.5em', color: '#6b7280' }; // Adjust styles as needed
    const sidebarItems = [
        { to: "/admin", icon: <MdDashboard style={style} />, text: "Dashboard" },
        { to: "/admin/courses", icon: <MdCardMembership style={style} />, text: "Course", subItems: ["card", "create", "Invoice"] },
        { to: "/admin/users", icon: <MdGroups style={style} />, text: "Users" }
        // Add other sidebar items as needed
    ];

    // Function to toggle the visibility of the "Course" section
    const toggleCourseVisibility = () => {
        setVisible(!visible);
    };

    return (
        <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {/* Map over sidebarItems array */}
                    {sidebarItems.map((item, index) => (
                        <li key={index}>
                            {/* Conditionally render link or section header based on item */}
                            {item.subItems ? (
                                // Render section header with toggle button
                                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={toggleCourseVisibility}>
                                    {item.icon}
                                    <span className="ms-3">{item.text}</span>
                                    <MdArrowForwardIos className={`w-3 h-3 ${visible ? 'transform rotate-90' : ''}`} aria-hidden="true" />
                                </div>
                            ) : (
                                // Render regular link
                                <Link to={item.to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    {item.icon}
                                    <span className="ms-3">{item.text}</span>
                                </Link>
                            )}

                            {/* Render sub-items if the "Course" section is visible */}
                            {item.subItems && visible && (
                                <ul className="py-2 space-y-2">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link to={`/admin/courses/${subItem}`} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{subItem}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default SidebarAdmin;
