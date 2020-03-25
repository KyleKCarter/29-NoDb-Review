let travelDestinations = []

let id = 1;

const getDestinations = (req, res) => {
    res.status(200).json(travelDestinations)
}

const postDestination = (req, res) => {
    // console.log(req.body)
    const {img, place, dates, weather} = req.body

    // const destination = {
    //     id,
    //     img,
    //     place,
    //     dates,
    //     weather
    // }

    travelDestinations.push({
        id,
        img,
        place,
        dates,
        weather
    })

    id++

    res.status(200).json(travelDestinations)
}

module.exports = {
    getDestinations,
    postDestination
}