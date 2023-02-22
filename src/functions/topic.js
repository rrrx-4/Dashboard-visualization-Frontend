const getTopicData = (data) => {

    let topic_set = Array.from(new Set(data.map((item) => {

        return item.topic

    })))

    topic_set = topic_set.map((item) => {

        return { subject: item, A: 0 }
    })

    // console.log(topic_set);
    topic_set.forEach((topic) => {

        data.map((item) => {

            if (item.topic === topic.subject) {
                topic.A = topic.A + 1;
            }
            return item
        })


    })

    topic_set = topic_set.filter((item) => {

        if (item.A > 9) {
            item.A = item.A * 10
            return item
        }
    })

    // (item.A) > (9)})

    // console.log(topic_set);
    return topic_set.reverse()
}


export { getTopicData }