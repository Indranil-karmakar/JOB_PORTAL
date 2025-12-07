
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { LogOut, User2, Briefcase, Menu, X, ChevronDown } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <nav className='bg-black/20 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/80 shadow-sm'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8'>
                {/* Logo Section */}
                <Link to="/" className='flex items-center gap-2.5 group'>
                    <div className='bg-gradient-to-br from-[#F83002] to-[#d62a02] p-2 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105'>
                        <Briefcase className='w-5 h-5 text-white' />
                    </div>
                    <h1 className='text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                        Job<span className='text-[#F83002]'>Hunt</span>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center gap-8'>
                    <ul className='flex font-medium items-center gap-1'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li>
                                        <Link to="/admin/companies" className='px-4 py-2 rounded-lg text-gray-700 hover:text-[#F83002] hover:bg-gray-50 transition-all duration-200'>
                                            Companies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/jobs" className='px-4 py-2 rounded-lg text-gray-700 hover:text-[#F83002] hover:bg-gray-50 transition-all duration-200'>
                                            Jobs
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/" className='px-4 py-2 rounded-lg text-gray-700 hover:text-[#F83002] hover:bg-gray-50 transition-all duration-200'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/jobs" className='px-4 py-2 rounded-lg text-gray-700 hover:text-[#F83002] hover:bg-gray-50 transition-all duration-200'>
                                            Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/browse" className='px-4 py-2 rounded-lg text-gray-700 hover:text-[#F83002] hover:bg-gray-50 transition-all duration-200'>
                                            Browse
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>

                    {/* Auth Buttons / User Menu */}
                    {
                        !user ? (
                            <div className='flex items-center gap-3'>
                                <Link to="/login">
                                    <Button variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-gradient-to-r from-[#6A38C2] to-[#5b30a6] hover:from-[#5b30a6] hover:to-[#4d2890] text-white shadow-md hover:shadow-xl transition-all duration-300 font-medium px-6">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button className='flex items-center gap-2 group'>
                                        <Avatar className="cursor-pointer h-10 w-10 border-2 border-gray-300 group-hover:border-[#6A38C2] transition-all duration-300 shadow-sm">
                                            <AvatarImage
                                                src={user?.profile?.profilePhoto}
                                                alt={user?.fullname || "User"}
                                                className="object-cover"
                                            />
                                            <AvatarFallback className="bg-gradient-to-br from-[#6A38C2] to-[#5b30a6] text-white font-semibold">
                                                {user?.fullname?.charAt(0)?.toUpperCase() || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <ChevronDown className='w-4 h-4 text-gray-500 group-hover:text-[#6A38C2] transition-colors' />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 border-gray-200 shadow-2xl rounded-2xl p-0 mt-2 overflow-hidden">
                                    <div className='bg-gradient-to-br from-gray-50 to-white p-5'>
                                        <div className='flex gap-4 items-center'>
                                            <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                                                <AvatarImage
                                                    src={user?.profile?.profilePhoto}
                                                    alt={user?.fullname || "User"}
                                                    className="object-cover"
                                                />
                                                <AvatarFallback className="bg-gradient-to-br from-[#6A38C2] to-[#5b30a6] text-white font-semibold text-lg">
                                                    {user?.fullname?.charAt(0)?.toUpperCase() || "U"}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className='flex-1 min-w-0'>
                                                <h4 className='font-semibold text-lg text-gray-900 truncate'>{user?.fullname}</h4>
                                                <p className='text-sm text-gray-600 mt-0.5 line-clamp-2'>{user?.profile?.bio || "No bio available"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-2 py-3 space-y-1'>
                                        {
                                            user && user.role === 'student' && (
                                                <Link to="/profile" className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#6A38C2] transition-all duration-200 group'>
                                                    <User2 className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                                    <span className='font-medium'>View Profile</span>
                                                </Link>
                                            )
                                        }
                                        <button onClick={logoutHandler} className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group'>
                                            <LogOut className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                            <span className='font-medium'>Logout</span>
                                        </button>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className='lg:hidden border-t border-gray-200 bg-white'>
                    <div className='px-4 py-4 space-y-1'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <Link
                                        to="/admin/companies"
                                        className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#F83002] transition-colors font-medium'
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Companies
                                    </Link>
                                    <Link
                                        to="/admin/jobs"
                                        className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#F83002] transition-colors font-medium'
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Jobs
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/"
                                        className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#F83002] transition-colors font-medium'
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/jobs"
                                        className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#F83002] transition-colors font-medium'
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Jobs
                                    </Link>
                                    <Link
                                        to="/browse"
                                        className='block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#F83002] transition-colors font-medium'
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Browse
                                    </Link>
                                </>
                            )
                        }

                        {!user ? (
                            <div className='pt-4 space-y-2 border-t border-gray-200'>
                                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="outline" className="w-full justify-center font-medium">
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full justify-center bg-gradient-to-r from-[#6A38C2] to-[#5b30a6] hover:from-[#5b30a6] hover:to-[#4d2890] text-white font-medium">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className='pt-4 space-y-2 border-t border-gray-200'>
                                <div className='flex items-center gap-3 px-4 py-3'>
                                    <Avatar className="h-12 w-12 border-2 border-gray-300">
                                        <AvatarImage
                                            src={user?.profile?.profilePhoto}
                                            alt={user?.fullname || "User"}
                                            className="object-cover"
                                        />
                                        <AvatarFallback className="bg-gradient-to-br from-[#6A38C2] to-[#5b30a6] text-white font-semibold">
                                            {user?.fullname?.charAt(0)?.toUpperCase() || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className='flex-1 min-w-0'>
                                        <h4 className='font-semibold text-gray-900 truncate'>{user?.fullname}</h4>
                                        <p className='text-sm text-gray-600 truncate'>{user?.profile?.bio || "No bio available"}</p>
                                    </div>
                                </div>
                                {user && user.role === 'student' && (
                                    <Link
                                        to="/profile"
                                        className='flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#6A38C2] transition-colors font-medium'
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <User2 className='w-5 h-5' />
                                        View Profile
                                    </Link>
                                )}
                                <button
                                    onClick={() => {
                                        logoutHandler();
                                        setMobileMenuOpen(false);
                                    }}
                                    className='w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors font-medium'
                                >
                                    <LogOut className='w-5 h-5' />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar