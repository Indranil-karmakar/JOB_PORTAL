

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-gradient-to-br from-blue-50 via-purple-30 to-pink-10 relative overflow-hidden'>
            {/* Decorative Background Elements */}
            <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
            <div className='absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
            <div className='absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
            <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>

            <div className='relative flex flex-col gap-5 my-8 md:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12'>
                <span className='mx-auto px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#F83002] font-medium text-sm sm:text-base shadow-sm border border-orange-100'>
                    No. 1 Job Hunt Website
                </span>

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent'>
                    Search, Apply & <br className='hidden sm:block' /> Get Your <span className='bg-gradient-to-r from-[#6A38C2] to-purple-600 bg-clip-text text-transparent'>Dream Jobs</span>
                </h1>

                <p className='text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4 font-medium'>
                    Discover thousands of job opportunities from top companies. Find your perfect match and advance your career today.
                </p>

                <div className='flex w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] shadow-xl border border-gray-300/50 pl-3 sm:pl-4 rounded-full items-center gap-2 sm:gap-4 mx-auto hover:shadow-2xl transition-all duration-400 bg-white/95 backdrop-blur-md'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-sm sm:text-base py-2 sm:py-3 bg-transparent placeholder:text-gray-400'
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="rounded-r-full bg-gradient-to-r from-[#6A38C2] to-purple-600 hover:from-[#5b30a6] hover:to-purple-700 transition-all duration-300 px-4 sm:px-6 shadow-lg hover:shadow-xl"
                    >
                        <Search className='h-4 w-4 sm:h-5 sm:w-5' />
                    </Button>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    )
}

export default HeroSection