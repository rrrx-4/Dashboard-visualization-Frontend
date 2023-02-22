import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend, Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, } from 'recharts';



import { useGlobalContext } from '../context';
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ca8fbd', '#ff7300', '#4fc3f7', '#8d6e63', '#e57373', '#ba68c8'];
const Topic = () => {


    const { topic } = useGlobalContext()

    // console.log(topic);

    return (
        <div className='w-full ml-10 flex flex-col border-5 border-red-600'>
            <div  ><h3 className='text-xl mx-auto my-4'>Topic</h3></div>
            <div className='m-auto flex items-center'>
                <ResponsiveContainer width={400} height={400}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={topic}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                        <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />

                        <Tooltip></Tooltip>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Topic