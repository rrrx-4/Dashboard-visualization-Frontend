import React from 'react'
import { useGlobalContext } from '../context'
import Intensity from '../components/Intensity';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Charts from '../components/Charts';


const Dashboard = () => {

    const { intensity } = useGlobalContext();

    // console.log(intensity);

    return (
        <div className='h-[100%]'  >
            <Navbar></Navbar>
            <div className='flex flex-row   h-[100%]' >
                <div className='border-r-2 border-black  basis-1/5'>
                    <Sidebar></Sidebar></div>
                <div className="basis-[70%]">
                    <Charts></Charts>
                </div>
            </div>
        </div >
    )
}

export default Dashboard