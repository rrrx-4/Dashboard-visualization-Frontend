import React, { useEffect } from "react"
import { useState, useContext, createContext } from "react"
import * as api from "./api";
import { getRegion, getCountry } from "./functions/rnc";
import { getRelevance, getLikelihood } from "./functions/rnl";

import { getTopicData } from "./functions/topic";

const moment = require('moment');

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [intensity, setIntensity] = useState([]);
    const [ogIntensity, setOgIntensity] = useState([]);
    const [year_set, setYear_set] = useState([])
    const [topic_set, setTopic_set] = useState([])
    const [sector_set, setSector_set] = useState([])
    const [region_set, setRegion_set] = useState([])
    const [rnc, setRnc] = useState([])
    const [country, setCountry] = useState([])
    const [region, setRegion] = useState([])
    const [relevNLike, setRelevNLike] = useState([])
    const [topic, setTopic] = useState([])
    // var year_set = [];

    const getIntensityF = async () => {

        try {
            const resp = await api.getIntensity();

            // console.log(resp.data);

            const { intensities } = resp.data;

            const data = intensities.filter((item) => {

                if (item.intensity && item.added && item.end_year && item.topic && item.sector && item.region) {

                    let added = new Date(item.added)

                    added = moment(added).format("M/D/YYYY")

                    item.added = added;
                    return item;
                }

            }).reverse()


            setIntensity(data)
            setOgIntensity(data)
            // console.log('hhh', intensity.length);
            let year_set2 = Array.from(new Set(data.map((item) => {
                // console.log(item);
                const end_year = item.end_year;

                return end_year
            })))



            year_set2 = year_set2.map((year) => {


                // console.log('hh');
                return { label: year, value: year };


            })

            setYear_set(year_set2)


            // topic set

            let topic_set2 = Array.from(new Set(data.map((item) => {
                // console.log(item);
                const topic = item.topic;

                return topic
            })))


            topic_set2 = topic_set2.map((topic) => {


                // console.log('hh');
                return { label: topic, value: topic };


            })
            setTopic_set(topic_set2)


            //sector 
            let sector_set2 = Array.from(new Set(data.map((item) => {
                // console.log(item);
                const sector = item.sector;

                return sector
            })))


            sector_set2 = sector_set2.map((sector) => {


                // console.log('hh');
                return { label: sector, value: sector };


            })
            setSector_set(sector_set2)


            //region

            let region_set2 = Array.from(new Set(data.map((item) => {
                // console.log(item);
                const region = item.region;

                return region
            })))


            region_set2 = region_set2.map((region) => {


                // console.log('hh');
                return { label: region, value: region };


            })
            setRegion_set(region_set2)






        } catch (error) {

            console.log('getIntensity Errro ');

        }





    }


    const getRnc = async () => {

        try {

            const resp = await api.getRnC()

            // console.log(resp);
            const { rnc } = resp.data

            const data = rnc.filter((item) => {

                if (item.country && item.region) {
                    return item
                }

            })

            // console.log(data);

            setRnc(data);

            const dataCountry = getCountry(data)
            const dataRegion = getRegion(data)

            setCountry(dataCountry)
            setRegion(dataRegion)


        } catch (error) {

            console.log("RNC error");

        }

    }

    const getRnL = async () => {

        try {
            const resp = await api.getRnL()

            const { rnl } = resp.data;


            const data = rnl.filter((item) => {

                if (item.relevance && item.likelihood && item.added) {
                    return item;
                }

            })

            const cd = getRelevance(data);
            // const likelihood = getLikelihood(data);

            setRelevNLike(cd.reverse())

            // console.log(cd);
        } catch (error) {
            console.log("getRnL error");
        }



    }


    const getTopic = async () => {

        const resp = await api.getTopic()

        const { topic } = resp.data;

        const data = topic.filter((item) => {

            if (item.topic) {
                return item;
            }

        })

        const nd = getTopicData(data);

        setTopic(nd)

    }

    useEffect(() => {


        getIntensityF()

        getRnc()
        // console.log(intensity);
        getRnL()

        getTopic()

    }, [])



    return <AppContext.Provider value={{ intensity, setIntensity, year_set, ogIntensity, topic_set, sector_set, region_set, country, region, relevNLike, topic }} >{children}</AppContext.Provider>

}

const useGlobalContext = () => {

    return useContext(AppContext)

}

export { useGlobalContext }

export default AppProvider;