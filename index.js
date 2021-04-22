
function showJoke () {
    return fetch ('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())

}



//function that creates a div, creates the elements of the div 

function createJokeDiv (joke) {
    const div = document.getElementById('jokeSpot')
    const text = document.createElement('p')


    //in the function places the data to the elemnts

    text.innerHTML = joke.value

    //appends the elements to the div 

    div.appendChild(text)

    return div

}
 

//function that appends div to joke container

function appendJoke (jokeDiv) {
    jokeContainer = document.getElementById('joke-container')
    jokeContainer.appendChild(jokeDiv)
}

//call the functions to show on DOM, deletes last <p> 

function jokeToDOM () {
    const p = document.getElementById('jokeSpot').children[0]
    p.remove()
    showJoke()
    .then(joke=>createJokeDiv(joke))
    .then(data=>appendJoke(data))
}



//function that makes button that fetches joke on "click"

window.onload = function () {
    const hitMe = document.getElementById('press')
    hitMe.addEventListener('click',jokeToDOM)

}




