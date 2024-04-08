import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams to get courseId from URL
import { fetchCourse, updateCourse } from '../../slices/courseSlice';

const CourseEdit = () => {
    const dispatch = useDispatch();
    const ID = useParams(); // Get courseId from URL
    const courseId=ID.id;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        domain: '',
        price: '',
        description: ''
    });

    // Fetch course data when component mounts
    useEffect(() => {
        dispatch(fetchCourse(courseId))
            .then((response) => {
                // Populate formData with fetched course data
                setFormData(response.payload);
            })
            .catch((error) => {
                console.error('Error fetching course:', error);
            });
    }, [dispatch, courseId]);

    const handleClick = () => {
        navigate('../card');
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCourse({ courseId, courseData: formData }));
        // Optionally, you can handle redirection or display a success message here
    };
    return (
        <div id="defaultModal" aria-hidden="true" className="border-1 rounded-lg dark:border-gray-700">
            <div className=" ">
                <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Update Course</h3>
                        <button
                            onClick={handleClick}
                            className="focus:outline-none text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        >
                            Go back
                        </button>                       </div>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
                                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                            </div>
                            <div>
                                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
                                <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                            </div>
                            <div>
                                <label for="domain" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">domain</label>
                                <input type="text" id="domain" name="domain" value={formData.domain} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" name="description" rows="4" value={formData.description} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="focus:outline-none text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                        Update Course
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CourseEdit