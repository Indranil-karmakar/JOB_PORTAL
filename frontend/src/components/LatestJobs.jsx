import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className='max-w-7xl mx-auto my-12 md:my-16 lg:my-20 px-4 sm:px-6 lg:px-8 bg-white'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-800'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-5'>
                {
                    allJobs.length <= 0 ? (
                        <div className='col-span-full text-center py-12'>
                            <span className='text-gray-500 text-lg'>No Job Available</span>
                        </div>
                    ) : allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                }
            </div>
        </div>
    )
}

export default LatestJobs