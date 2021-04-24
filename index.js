
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



//function that creates a div for an input section for comments on the curent joke.


/*function createCommentDiv () {
    const div2 = document.createElement('div')
    const input = document.createElement('input');
    
    input.setAttribute('type', 'text');
    input.setAttribute('value', 'default');

    div2.appendChild(input)

    return div2 
}*/
 

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

/*function commentsToDOM() {
    const inputsection = document.getElementById('comments-section')
    createJokeDiv() 
    .then (div => inputsection.appendChild(div))
}*/

// create a function that takes text from the comment section and posts it to the DOM

function postComments (){ 

    const input = document.getElementById('opinion-here')
    const output = input.value
  
    const createPost = document.createElement('p')
    createPost.innerHTML = output
    document.getElementById('posted_comments').appendChild(createPost)
     document.getElementById('opinion-here').value='';
  
  }
  
  


//function that makes button that fetches joke on "click" , adds functionality to buttons with event listeners

window.onload = function () {
    
    const hitMe = document.getElementById('press')
    hitMe.addEventListener('click',jokeToDOM)

    document.getElementById('post').addEventListener('click', postComments);
     document.getElementById('opinion-here').addEventListener('keypress', function(e){ (e.charCode == 13) && handler();});
}










