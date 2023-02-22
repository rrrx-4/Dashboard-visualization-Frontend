const moment = require('moment');



const getRelevance = (data) => {

    // console.log(data);

    data.forEach((item) => {

        let added = new Date(item.added)

        added = moment(added).format("M/D/YYYY")


        item.added = added;



    })

    // console.log(data);
    return data;



}

const getLikelihood = (data) => {

    console.log(data);

}


export { getLikelihood, getRelevance }