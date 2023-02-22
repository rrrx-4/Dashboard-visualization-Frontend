import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import { LineChart, Line, CartesianGrid, Tooltip, CartesianAxis, XAxis, YAxis } from 'recharts'
import Select from 'react-select'
const moment = require('moment');


const Intensity = () => {

    const { intensity, setIntensity, ogIntensity, year_set, topic_set, sector_set, region_set } = useGlobalContext();

    // console.log(topic_set);

    // const mainData = intensity;

    const [year, setYear] = useState()
    const [topic, setTopic] = useState("")
    const [sector, setSector] = useState("")
    const [region, setRegion] = useState("")

    // console.log(sector_set, region_set);


    const getSelectedYearData = (year) => {

        const data = ogIntensity.filter((item) => {

            if (item.end_year === year) {
                // console.log(year);
                return item;
            }
        })

        return data
    }

    const getSelectedTopicData = (topic) => {

        const data = ogIntensity.filter((item) => {

            if (item.topic === topic) {
                // console.log(year);
                return item;
            }
        })

        return data
    }

    const getSelectedSectorData = (sector) => {

        const data = ogIntensity.filter((item) => {

            if (item.sector === sector) {
                // console.log(year);
                return item;
            }
        })

        return data
    }

    const getSelectedRegionData = (region) => {

        const data = ogIntensity.filter((item) => {

            if (item.region === region) {
                // console.log(year);
                return item;
            }
        })

        return data
    }




    const handleYear = (y) => {

        // console.log(y);
        setYear(y.value)


        // setData(madeData(data))

    }

    const handleTopic = (topic) => {

        setTopic(topic.value)

    }

    const handleRegion = (region) => {

        setRegion(region.value)

    }

    const handleSector = (sector) => {

        setSector(sector.value)

    }

    useEffect(() => {



        const data = getSelectedYearData(year);

        setIntensity(data)


    }, [year])

    useEffect(() => {


        const data = getSelectedTopicData(topic)

        setIntensity(data)

    }, [topic])

    useEffect(() => {

        const data = getSelectedSectorData(sector)

        setIntensity(data)

    }, [sector])

    useEffect(() => {

        const data = getSelectedRegionData(region)

        setIntensity(data)

    }, [region])


    return (

        // <div>Intensity</div>
        <div>
            {
                (
                    <div>
                        <div  ><h3 className='text-xl mx-auto my-4'>Intensity</h3></div>
                        <LineChart width={720} height={400} data={intensity}>

                            <Line type="monotone"
                                dataKey="intensity"
                                stroke='#8884d8'
                            />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="added" tickCount={8} />
                            <YAxis dataKey="intensity" />
                            <Tooltip />
                        </LineChart>

                        <div className='flex flex-row justify-around' >
                            <div>
                                <Select
                                    // defaultValue={year_set[1].label}
                                    menuPosition="fixed"
                                    // name="color"
                                    // defaultValue={year_set[5]}
                                    options={year_set}
                                    // value={{ value: year, label: year }}
                                    placeholder="end_year"
                                    onChange={handleYear}
                                />
                            </div>
                            <div className='w-[125px]'>
                                <Select
                                    // defaultValue={year_set[1].label}
                                    menuPosition="fixed"
                                    // name="color"
                                    // defaultValue={year_set[5]}
                                    options={topic_set}
                                    // value={{ value: year, label: year }}
                                    placeholder="topic"
                                    onChange={handleTopic}
                                />
                            </div>
                            <div className='w-[125px]'>
                                <Select
                                    // defaultValue={year_set[1].label}

                                    // name="color"
                                    // defaultValue={year_set[5]}
                                    menuPosition="fixed"
                                    options={sector_set}
                                    // value={{ value: year, label: year }}
                                    placeholder="sector"
                                    onChange={handleSector}
                                />
                            </div>
                            <div className='w-[125px]'>
                                <Select
                                    // defaultValue={year_set[1].label}
                                    menuPosition="fixed"
                                    // name="color"
                                    // defaultValue={year_set[5]}
                                    options={region_set}
                                    // value={{ value: year, label: year }}
                                    placeholder="region"
                                    onChange={handleRegion}
                                />
                            </div>

                        </div>

                    </div>
                )
            }


        </div>




    )
}

export default Intensity