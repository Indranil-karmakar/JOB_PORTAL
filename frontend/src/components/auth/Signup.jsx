
import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2, User, Mail, Phone, Lock, Upload, CheckCircle2 } from 'lucide-react'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const [fileName, setFileName] = useState("");
    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    
    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setInput({ ...input, file });
            setFileName(file.name);
        }
    }
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])

    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50'>
            <Navbar />
            <div className='flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
                <div className='w-full max-w-md'>
                    {/* Decorative elements */}
                    <div className='absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
                    <div className='absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
                    
                    <form 
                        onSubmit={submitHandler} 
                        className='relative w-full border border-gray-200 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-2xl'
                    >
                        {/* Header */}
                        <div className='text-center mb-8'>
                            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#6A38C2] to-[#8b5cf6] mb-4 shadow-lg'>
                                <User className='w-8 h-8 text-white' />
                            </div>
                            <h1 className='font-bold text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-[#6A38C2] to-[#8b5cf6] bg-clip-text text-transparent'>
                                Create Account
                            </h1>
                            <p className='text-gray-600 text-sm sm:text-base'>Join us and start your journey</p>
                        </div>

                        {/* Full Name */}
                        <div className='mb-5 group'>
                            <Label className='text-sm font-semibold text-gray-700 mb-2 block'>Full Name</Label>
                            <div className='relative'>
                                <User className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#6A38C2] transition-colors' />
                                <Input
                                    type="text"
                                    value={input.fullname}
                                    name="fullname"
                                    onChange={changeEventHandler}
                                    placeholder="John Doe"
                                    className='pl-11 py-3 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6A38C2] focus:border-transparent transition-all'
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className='mb-5 group'>
                            <Label className='text-sm font-semibold text-gray-700 mb-2 block'>Email</Label>
                            <div className='relative'>
                                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#6A38C2] transition-colors' />
                                <Input
                                    type="email"
                                    value={input.email}
                                    name="email"
                                    onChange={changeEventHandler}
                                    placeholder="john@example.com"
                                    className='pl-11 py-3 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6A38C2] focus:border-transparent transition-all'
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className='mb-5 group'>
                            <Label className='text-sm font-semibold text-gray-700 mb-2 block'>Phone Number</Label>
                            <div className='relative'>
                                <Phone className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#6A38C2] transition-colors' />
                                <Input
                                    type="text"
                                    value={input.phoneNumber}
                                    name="phoneNumber"
                                    onChange={changeEventHandler}
                                    placeholder="+1 (555) 000-0000"
                                    className='pl-11 py-3 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6A38C2] focus:border-transparent transition-all'
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className='mb-6 group'>
                            <Label className='text-sm font-semibold text-gray-700 mb-2 block'>Password</Label>
                            <div className='relative'>
                                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#6A38C2] transition-colors' />
                                <Input
                                    type="password"
                                    value={input.password}
                                    name="password"
                                    onChange={changeEventHandler}
                                    placeholder="••••••••"
                                    className='pl-11 py-3 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6A38C2] focus:border-transparent transition-all'
                                    required
                                />
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div className='mb-6'>
                            <Label className='text-sm font-semibold text-gray-700 mb-3 block'>I am a</Label>
                            <RadioGroup className="grid grid-cols-2 gap-3">
                                <div 
                                    className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                        input.role === 'student' 
                                            ? 'border-[#6A38C2] bg-purple-50 shadow-md' 
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setInput({ ...input, role: 'student' })}
                                >
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={input.role === 'student'}
                                        onChange={changeEventHandler}
                                        className="sr-only"
                                    />
                                    <Label className='cursor-pointer font-medium text-gray-700 flex items-center gap-2'>
                                        {input.role === 'student' && <CheckCircle2 className='w-4 h-4 text-[#6A38C2]' />}
                                        Student
                                    </Label>
                                </div>
                                <div 
                                    className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                        input.role === 'recruiter' 
                                            ? 'border-[#6A38C2] bg-purple-50 shadow-md' 
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setInput({ ...input, role: 'recruiter' })}
                                >
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="recruiter"
                                        checked={input.role === 'recruiter'}
                                        onChange={changeEventHandler}
                                        className="sr-only"
                                    />
                                    <Label className='cursor-pointer font-medium text-gray-700 flex items-center gap-2'>
                                        {input.role === 'recruiter' && <CheckCircle2 className='w-4 h-4 text-[#6A38C2]' />}
                                        Recruiter
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        {/* File Upload */}
                        <div className='mb-6'>
                            <Label className='text-sm font-semibold text-gray-700 mb-3 block'>Profile Photo</Label>
                            <div className='relative'>
                                <input
                                    accept="image/*"
                                    type="file"
                                    onChange={changeFileHandler}
                                    className="sr-only"
                                    id="file-upload"
                                />
                                <label 
                                    htmlFor="file-upload"
                                    className='flex items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#6A38C2] hover:bg-purple-50 transition-all group'
                                >
                                    <Upload className='w-5 h-5 text-gray-400 group-hover:text-[#6A38C2] transition-colors' />
                                    <span className='text-sm text-gray-600 group-hover:text-[#6A38C2] transition-colors'>
                                        {fileName || 'Choose a photo'}
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        {loading ? (
                            <Button 
                                type="button" 
                                disabled 
                                className="w-full py-3 text-base font-semibold bg-gradient-to-r from-[#6A38C2] to-[#8b5cf6] hover:from-[#5b30a6] hover:to-[#7c3aed] rounded-xl shadow-lg transition-all"
                            >
                                <Loader2 className='mr-2 h-5 w-5 animate-spin' /> Creating account...
                            </Button>
                        ) : (
                            <Button 
                                type="submit" 
                                className="w-full py-3 text-base font-semibold bg-gradient-to-r from-[#6A38C2] to-[#8b5cf6] hover:from-[#5b30a6] hover:to-[#7c3aed] rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                            >
                                Sign Up
                            </Button>
                        )}

                        {/* Login Link */}
                        <div className='text-center mt-6'>
                            <span className='text-sm text-gray-600'>
                                Already have an account?{' '}
                                <Link 
                                    to="/login" 
                                    className='text-[#6A38C2] hover:text-[#5b30a6] font-semibold transition-colors hover:underline'
                                >
                                    Login
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    )
}

export default Signup