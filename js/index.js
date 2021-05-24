



const rooty = document.querySelector('.autocomplete')
const autoComplete = new AutoComplete(rooty,new FetchData,new Utilities);
autoComplete.CreateWidget();
const autoComplete2 = new AutoComplete(new FetchData,new Utilities);
autoComplete2.CreateWidget();
// autoComplete.DisplayRoot();
// autoComplete.CreateWidget();
// const userInput = document.querySelector('.input');



// const userInteraction = new UserInteractions(root,dropDown,resultsWrapper,userInput,movieSummary);

// Check for movies and get the list of movies
// autoComplete.userInput.addEventListener('input',utilities.Debounce(autoComplete.OnInputEvent));

// Select one movie and return the detail of that movie

// clear Display When user clicks anywhere outside the widget
// document.addEventListener('click',userInteraction.clearWidget);
