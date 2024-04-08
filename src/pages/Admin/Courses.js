import React,{useState} from 'react'
// import SidebarAdmin from '../../components/Sidebar/SidebarAdmin'
// import NavbarAdmin from '../../components/Navbar/NavbarAdmin'

const Courses = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        // <div class="antialiased bg-gray-50 dark:bg-gray-900">
        //     <SidebarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        //     <NavbarAdmin toggleSidebar={toggleSidebar} />
        //     <div className="p-4 sm:ml-64">
        //         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        //             <h1>Welcome to the course!</h1>
        //             <p>This is the dashboard content.</p>
        //         </div>
        //     </div>
        // </div>
  
        <div class="p-4 sm:ml-64 mt-10 sm:mt-0 bg-white">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <h1>Welcome to the course!</h1>
                <p>This is the dashboard content.</p>
            </div>
        </div>

    )
}

export default Courses