import axios from 'axios'

window.readMovies = function() {
    axios.get('http://localhost:8080/movies/')
    .then((response) => {
        const moviesList = response.data;
        const container = document.getElementById('containerMovies')
        moviesList.forEach(element => {
            const li = document.createElement('li')
            const text = document.createTextNode(element.title + ' (' + element.year + '): ' +element.description)
            li.appendChild(text)
            container.appendChild(li)
        });
    })
}