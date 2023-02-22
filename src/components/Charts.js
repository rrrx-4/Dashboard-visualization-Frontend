import React from 'react'
import Intensity from './Intensity'
import CountryRegion from './PieChart'
import RelevanceLikelihood from './RelevanceLikelihood'
import Topic from './Topic'

const Charts = () => {
    return (
        <div className='grid grid-cols-3 grid-flow-row gap-5'>

            <div className='col-span-2' >
                <Intensity  ></Intensity></div>
            <div className='col-span-1' >
                <CountryRegion></CountryRegion></div>
            <div className='col-span-2 w-[720px]'> <RelevanceLikelihood></RelevanceLikelihood> </div>
            <div className='col-span-1'> <Topic></Topic> </div>
        </div>
    )
}

export default Charts