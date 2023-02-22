import React from 'react'
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";
import { useGlobalContext } from '../context';



const CountryRegion = () => {

    const { country, region } = useGlobalContext()

    const COLORSR = ["#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#949FB1"];

    const COLORSC = ["#BDBDBD",
        "#8B008B",
        "#FF8C00",
        "#00CED1",
        "#9400D3",
        "#00FF7F",
        "#D2691E",
        "#1E90FF",
        "#DAA520",

    ]

    return (
        <div className='flex flex-col justify-center items-center' >

            <div className='mx-auto flex flex-col justify-around items-center' >

                <PieChart width={400} height={400}>
                    <Pie
                        data={region}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                    // fill="#8884d8"
                    > {
                            region.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSR[index % COLORSR.length]} />)
                        }</Pie>
                    <Pie
                        data={country}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                    >
                        {
                            country.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORSC[index % COLORSC.length]} />)
                        }
                    </Pie>
                    {/* <Legend /> */}
                    <Tooltip />
                </PieChart>
                <div  ><h3 className='text-xl'>Country & Region</h3></div>
            </div>
        </div>
    )
}

export default CountryRegion