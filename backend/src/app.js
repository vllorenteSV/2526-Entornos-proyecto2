const express = require('express');
 
const app = express();
app.use(express.json());
 
const movies = [
    {
        'title': 'Batman',
        'description': 'Batman description',
        'year': 2003
    },
    {
        'title': 'Spiderman',
        'description': 'Spiderman description',
        'year': 1998
    },
    {
        'title': 'Superman',
        'description': 'Superman description',
        'year': 1980
    }
]
 
app.get('/movies', (req, res) => {
    res.json(movies);
});
 
app.get('/movies/:movie', (req, res) => {
    const movie = req.params.movie;
    res.json(movies[movie]);
});


 
app.listen(8080, () => {
    console.log('¡Hola! Iniciando el backend en el puerto 8080');
});