let travelDestinations = []

let id = 1;

const getDestinations = (req, res) => {
    res.status(200).json(travelDestinations)
}

const postDestination = (req, res) => {
    // console.log(req.body)
    const {img, place, dates, weather} = req.body

    const destination = {
        id: id,
        img: img,
        place: place,
        dates: dates,
        weather: weather
    }

    // travelDestinations.push({
    //     id,
    //     img,
    //     place,
    //     dates,
    //     weather
    // })
    travelDestinations.push(destination)

    id++

    res.status(200).json(travelDestinations)
}

const updateDestination = (req, res) => {
    const id = req.params.id
    const {img, place, dates, weather} = req.body;

    const targetIndex = travelDestinations.findIndex(destinations => destinations.id === +id)

    travelDestinations[targetIndex].img = img || travelDestinations[targetIndex].img
    travelDestinations[targetIndex].place = place || travelDestinations[targetIndex].place
    travelDestinations[targetIndex].dates = dates || travelDestinations[targetIndex].dates
    travelDestinations[targetIndex].weather = weather || travelDestinations[targetIndex].weather

    res.status(200).json(travelDestinations)
}

const removeDestination = (req, res) => {
    const {id} = req.params
    for(let i = 0; i < travelDestinations.length; i++) {
        if(travelDestinations[i].id == id) {
            travelDestinations.splice(i, 1)
        }
    }
    res.status(200).json(travelDestinations)
}

module.exports = {
    getDestinations,
    postDestination,
    updateDestination,
    removeDestination
}