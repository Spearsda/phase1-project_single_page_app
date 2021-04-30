
//function that fetches a random joke from api

function showJoke () {
    return fetch ('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())

}



//function that creates a div for the joke text, creates the elements of the div 

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


// create a function that takes text from the comment section and posts it to the DOM

function postComments (){ 

    const input = document.getElementById('opinion-here')
    const output = input.value
    const commentDiv = document.getElementById('posted_comments')
  
    const createPost = document.createElement('p')
    createPost.setAttribute('id', "commentText")
    const addButton = document.createElement('button')
    addButton.textContent= 'delete button'
    commentDiv.appendChild(addButton)

    addButton.addEventListener('click', function () { 
            
    } )

    createPost.innerHTML = output
    document.getElementById('posted_comments').appendChild(createPost)
     document.getElementById('opinion-here').value='';
  
  }




  //const addButton = document.createElement('button')
  //createPost.appendChild(addButton)
  


//function that makes button that fetches joke on "click" , adds functionality to buttons with event listeners

window.onload = function () {
    
    const hitMe = document.getElementById('press')
    hitMe.addEventListener('click',jokeToDOM)

    document.getElementById('post').addEventListener('click', postComments);
     document.getElementById('opinion-here').addEventListener('keypress', function(e){ (e.charCode == 13) && handler();});
}










