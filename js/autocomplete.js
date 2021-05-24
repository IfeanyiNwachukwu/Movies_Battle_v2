
class AutoComplete{



    constructor(rooty,fetchData,utilities){
        
        this.Root = rooty
        this.FetchData = fetchData
        this.Utilities = utilities;
        this.Root.innerHTML = 
        ` <label for=""><b>Search</b></label>
        <input type="text" class="input">
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results">
                    
                </div>
            </div>
        </div>
        `


        this.DropDown       =       this.Root.querySelector('.dropdown');
        this.ResultsWrapper =       this.Root.querySelector('.results');
        this.UserInput      =       this.Root.querySelector('.input');
        this.MovieSummaryDiv =      document.querySelector('#summary');
    }

    
   
      
        
        
  
  
   
  OnInputEvent = async event =>{
        
        const movies = await this.FetchData.GetMovieList(event.target.value);
        console.log(movies);
        if(!movies.length){
            this.DropDown.classList.remove('is-active');
        }
        else{
          this.DropDown.classList.add('is-active');
        }
       
        this.ResultsWrapper.innerHTML = '';
        
  
        for(let movie of movies){
  
          const option = document.createElement('a');
          option.classList.add('dropdown-item');
          let imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
          option.innerHTML = `
          <img src="${imgSrc}"/>
          ${movie.Title}
          `;
          this.ResultsWrapper.appendChild(option);
          
          option.addEventListener('click',() => {
              
             this.DropDown.classList.remove('is-active');
              this.DisplayMovieInDetail(movie.imdbID)
              this.UserInput.value = movie.Title;
              
              
          });
          }
          
     }
  
     DisplayMovieInDetail  = async movieID => {
        const response =  await this.FetchData.GetMovieDetail(movieID);
        console.log(response);
        this.MovieInDetailSummary(response);
       
  
     }
  
     MovieInDetailSummary =  (movieDetail) => {
  return  this.MovieSummaryDiv.innerHTML = `
      <article class="media">
      <figure class="media-left">
          <p class="image">
              <img src="${movieDetail.Poster}" alt="">
          </p>
      </figure>
      <div class="media-content">
          <div class="content">
              <h1>${movieDetail.Title}</h1>
              <h4>${movieDetail.Genre}</h4>
              <p>${movieDetail.Plot}</p>
          </div>
      </div>
      </article>
      <article class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
      </article>
  `
     }

     CreateWidget  = () =>{
       
        this.UserInput.addEventListener('input',this.Utilities.Debounce(this.OnInputEvent));
     }
  
     ClearWidget = (event) => {
          if(!this.Root.contains(event.target)){
              this.DropDown.classList.remove('is-active');
          }
     }

    


     
     

















}