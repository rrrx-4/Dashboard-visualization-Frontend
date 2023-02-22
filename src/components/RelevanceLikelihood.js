import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useGlobalContext } from '../context';

const RelevanceLikelihood = () => {

    const { relevNLike } = useGlobalContext()

    // console.log(relevNLike);

    return (
        <div>
            <div  ><h3 className='text-xl mx-auto my-4'>Relevance & Likelihood</h3></div>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart
                // margin={{
                //     top: 20,
                //     right: 20,
                //     bottom: 20,
                //     left: 20,
                // }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="added" tickCount={10} />
                    <YAxis yAxisId="left" dataKey="relevance" stroke="#8884d8" />
                    <YAxis
                        yAxisId="right"
                        type="number"
                        dataKey="likelihood"
                        orientation="right"
                        stroke="#82ca9d"
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter yAxisId="left" data={relevNLike} fill="#8884d8" />
                    <Scatter yAxisId="right" data={relevNLike} fill="#82ca9d" />
                </ScatterChart>
            </ResponsiveContainer>

        </div>
    )
}

export default RelevanceLikelihood