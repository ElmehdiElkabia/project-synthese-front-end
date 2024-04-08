import React from 'react'

const CourseCard = () => {
  return (
    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="Product Image" />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: Apple iMac 27</h5>
        <h6 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Price: $2222</h6>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Details: Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: Electronics/PC</p>
      </div>
    </div>
  )
}

export default CourseCard