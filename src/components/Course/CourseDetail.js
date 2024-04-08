import React, { useEffect,useState } from 'react';
import { MdAdd } from "react-icons/md";
import image from "../../assest/relation.png"
import relation from "../../assest/relation.png"
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCourse } from '../../slices/courseSlice';


const CourseDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});


    useEffect(() => {
        dispatch(fetchCourse(id))
            .then((response) => {
                // Populate formData with fetched course data
                setFormData(response.payload);
            })
            .catch((error) => {
                console.error('Error fetching course:', error);
            });
    }, [dispatch, id]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-1  gap-6 mb-6"> {/* Grid layout with margin */}
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="Product Image" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {formData.title}</h5>
                    <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Price: {formData.price}</h6>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Details: {formData.description}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">price: {formData.price}$</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {formData.domain}</p>
                </div>
            </div>
            <div className='p-4 bg-white rounded-lg shadow dark:bg-gray-800 '>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white rounded-t border-b pb-4 mb-4  sm:mb-5">
                    List Lesson
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full w-full">
                        <a href="#">
                            <img class="rounded-t-lg" src={relation} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Relation Many to Many</h5>
                            </a>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex rounded-lg shadow items-center justify-center w-full h-full">
                        <a href="#" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <MdAdd className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Add New Lesson</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;
