
import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { MapPin, Briefcase, DollarSign, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fitlerData = [
    {
        fitlerType: "Location",
        icon: MapPin,
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        icon: Briefcase,
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        icon: DollarSign,
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    }

    const clearFilters = () => {
        setSelectedValue('');
        dispatch(setSearchedQuery(''));
    }

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue]);

    return (
        <>
            {/* Mobile Filter Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-2xl bg-gradient-to-r from-[#6A38C2] to-purple-600 hover:from-[#5b30a6] hover:to-purple-700"
            >
                <SlidersHorizontal className='h-5 w-5' />
            </Button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Filter Card */}
            <div className={`
                w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden
                transition-all duration-300 ease-in-out
                lg:sticky lg:top-20 
                ${isOpen ? 'fixed inset-x-4 top-4 bottom-4 z-50 overflow-y-auto' : 'hidden lg:block'}
            `}>
                {/* Header */}
                <div className='sticky top-0 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between shadow-xl border border-gray-300/50 '>
                    <div className='flex items-center gap-3'>
                        <div className='bg-gradient-to-br from-[#6A38C2] to-purple-600 p-2 rounded-lg'>
                            <SlidersHorizontal className='w-5 h-5 text-white' />
                        </div>
                        <h1 className='font-bold text-xl text-gray-800'>Filter Jobs</h1>
                    </div>

                    {/* Mobile Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className='lg:hidden p-2 hover:bg-white/80 rounded-lg transition-colors'
                    >
                        <X className='w-5 h-5 text-gray-600' />
                    </button>
                </div>

                {/* Clear Filters Button */}
                {selectedValue && (
                    <div className='px-6 pt-4'>
                        <Button
                            onClick={clearFilters}
                            variant="outline"
                            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-all"
                        >
                            Clear All Filters
                        </Button>
                    </div>
                )}

                {/* Filter Options */}
                <div className='p-6 space-y-6'>
                    <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                        {fitlerData.map((data, index) => {
                            const IconComponent = data.icon;
                            return (
                                <div key={`filter-${index}-${data.fitlerType}`} className='space-y-3'>
                                    {/* Filter Type Header */}
                                    <div className='flex items-center gap-2 pt-4 first:pt-0'>
                                        <IconComponent className='w-5 h-5 text-[#6A38C2]' />
                                        <h2 className='font-semibold text-base text-gray-800'>
                                            {data.fitlerType}
                                        </h2>
                                    </div>

                                    {/* Filter Options */}
                                    <div className='space-y-2 pl-7'>
                                        {data.array.map((item, idx) => {
                                            const itemId = `id${index}-${idx}`;
                                            const isSelected = selectedValue === item;
                                            return (
                                                <div
                                                    key={`filter-item-${index}-${idx}-${item}`}
                                                    className={`
                                                        flex items-center space-x-3 p-3 rounded-xl cursor-pointer
                                                        transition-all duration-200 group
                                                        ${isSelected
                                                            ? 'bg-purple-50 border border-purple-200 shadow-sm'
                                                            : 'hover:bg-gray-50 border border-transparent'
                                                        }
                                                    `}
                                                >
                                                    <RadioGroupItem
                                                        value={item}
                                                        id={itemId}
                                                        className="border-gray-300 text-[#6A38C2]"
                                                    />
                                                    <Label
                                                        htmlFor={itemId}
                                                        className={`
                                                            cursor-pointer flex-1 text-sm font-medium
                                                            transition-colors
                                                            ${isSelected
                                                                ? 'text-[#6A38C2]'
                                                                : 'text-gray-700 group-hover:text-gray-900'
                                                            }
                                                        `}
                                                    >
                                                        {item}
                                                    </Label>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Divider */}
                                    {index < fitlerData.length - 1 && (
                                        <hr className='border-gray-200 mt-4' />
                                    )}
                                </div>
                            );
                        })}
                    </RadioGroup>
                </div>

                {/* Mobile Apply Button */}
                <div className='lg:hidden sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4'>
                    <Button
                        onClick={() => setIsOpen(false)}
                        className="w-full bg-gradient-to-r from-[#6A38C2] to-purple-600 hover:from-[#5b30a6] hover:to-purple-700"
                    >
                        Apply Filters
                    </Button>
                </div>
            </div>
        </>
    )
}

export default FilterCard