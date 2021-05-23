const root = document.querySelector('.autocomplete');
root.innerHTML =  `
<label for=""><b>Search For a Movie</b></label>
<input type="text" class="input">
<div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results">

        </div>
    </div>
</div>

`;
const dropDown = document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results');
const userInput = document.querySelector('input');
const movieSummary = document.querySelector('#summary');
movieSummary.innerHTML = `

`


const fetchData = new FetchData();
const utilities = new Utilities(); 
const userInteraction = new UserInteractions(root,dropDown,resultsWrapper,userInput,movieSummary);

// Check for movies and get the list of movies
userInput.addEventListener('input',utilities.Debounce(userInteraction.OnInputEvent));

// Select one movie and return the detail of that movie

// clear Display When user clicks anywhere outside the widget
document.addEventListener('click',userInteraction.clearWidget);
