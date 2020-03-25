const express = require('express');

const {getDestinations, postDestination} = require('./Controllers/travelController')

const app = express();

app.use(express.json());

app.get('/api/travel', getDestinations);
app.post('/api/travel', postDestination);
app.put('/api/travel/:id', );
app.delete('/api/travel/:id', );

const PORT = 5000

app.listen(PORT, () => console.log(`Skynet is running on PORT ${PORT}`))