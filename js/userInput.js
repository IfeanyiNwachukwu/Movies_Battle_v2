class UserInteractions{

    constructor(root,dropdown,resultsWrapper,inputByUser,movieSummaryDiv){
        this.Root = root;
        this.DropDown = dropdown;
        this.ResultsWrapper = resultsWrapper;
        this.Input = inputByUser;
        this.MovieSummaryDiv = movieSummaryDiv;
    }
   
  
    OnInputEvent = async event =>{
      const movies = await fetchData.GetMovieList(event.target.value);
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
        
        option.addEventListener('click',() =>{
            
            this.DisplayMovieInDetail(movie.imdbID)
            this.Input.value = movie.Title;
            this.DropDown.classList.remove('is-active');
            
        });
        }
        
   }

   DisplayMovieInDetail  = async movieID => {
      const response =  await fetchData.GetMovieDetail(movieID);
      this.MovieInDetailSummary(response.data);

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
       
       `
   }

   clearWidget = (event) => {
        if(!this.Root.contains(event.target)){
            this.DropDown.classList.remove('is-active');
        }
   }
   
   
   
}