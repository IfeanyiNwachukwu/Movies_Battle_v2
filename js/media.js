class Media{

    constructor(fetchData,movieSummaryDiv){
        this.FetchData = fetchData;
        this.MovieSummaryDiv = movieSummaryDiv;
    }

    FetchAllMedia = async(searchTerm) => {
        const allMedia = await this.FetchData.FetchAllResources(searchTerm);
        return allMedia;
    }

    DisplayMediaInDetail  = async mediaID => {
        document.querySelector('.tutorial').classList.add('is-hidden');
        const response =  await this.FetchData.GetSingleResource(mediaID);
        console.log(response);
        this.MediaInDetailSummary(response);
       
  
     }
  
     MediaInDetailSummary =  (mediaDetail) => {
  return  this.MovieSummaryDiv.innerHTML = `
      <article class="media">
      <figure class="media-left">
          <p class="image">
              <img src="${mediaDetail.Poster}" alt="">
          </p>
      </figure>
      <div class="media-content">
          <div class="content">
              <h1>${mediaDetail.Title}</h1>
              <h4>${mediaDetail.Genre}</h4>
              <p>${mediaDetail.Plot}</p>
          </div>
      </div>
      </article>
      <article class="notification is-primary">
      <p class="title">${mediaDetail.Awards}</p>
      <p class="subtitle">Awards</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${mediaDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${mediaDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${mediaDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
      </article>
      <article class="notification is-primary">
      <p class="title">${mediaDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
      </article>
  `
     }

     RenderOption = (media) => {
          let imgSrc = media.Poster === 'N/A' ? '' : media.Poster;
          return `
          <img src="${imgSrc}"/>
          ${media.Title}
          `

     }


}