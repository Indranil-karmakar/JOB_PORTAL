
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import Autoplay from "embla-carousel-autoplay";

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const plugin = React.useRef(
        Autoplay({ delay: 1000, stopOnInteraction: true })
    );

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='bg-gradient-to-br from-blue-10 via-purple-100 to-pink-10 relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20'>
            {/* Decorative Background Elements */}
            <div className='absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
            <div className='absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
            <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent'>
                    Browse by Category
                </h2>

                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto my-8 md:my-12 lg:my-16"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {category.map((cat) => (
                            <CarouselItem key={cat} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <Button
                                    onClick={() => searchJobHandler(cat)}
                                    variant="outline"
                                    className="w-full rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 border-gray-200 bg-white/80 backdrop-blur-sm text-sm sm:text-base py-6 sm:py-7 font-semibold hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden sm:flex bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-gray-200' />
                    <CarouselNext className='hidden sm:flex bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-gray-200' />
                </Carousel>


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

export default CategoryCarousel
