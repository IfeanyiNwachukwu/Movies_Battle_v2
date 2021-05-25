class Media{

    constructor(fetchData,mediaComparer){
        this.FetchData = fetchData;
        this.MediaComparer = mediaComparer;
        this.LeftMedia;
        this.RightMedia;
        
    }

    FetchAllMedia = async(searchTerm) => {
        const allMedia = await this.FetchData.FetchAllResources(searchTerm);
        return allMedia;
    }
    
    RenderOption = (media) => {
        let imgSrc = media.Poster === 'N/A' ? '' : media.Poster;
        return `
        <img src="${imgSrc}"/>
        ${media.Title}
        `

   }

    DisplayMediaInDetail  = async (mediaID,summaryElement,side) => {
        document.querySelector('.tutorial').classList.add('is-hidden');
        const response =  await this.FetchData.GetSingleResource(mediaID);
        // console.log(response);
        this.MediaDetailTemplate(response,summaryElement);
        this.Side = side;
        if(this.Side === 'left'){
            this.LeftMedia = response;
          
        }
        else{
            this.RightMedia = response;
           
            
        }
        if(this.LeftMedia && this.RightMedia){
            this.MediaComparer.RunComparison();
        }
       
  
     }
  
        MediaDetailTemplate =  (mediaDetail,summaryElement) => {
         
        const { awards, boxOfficeValue, metaScore, imdbRating, imdbVotes } = this.ExtractMediaStatistics(mediaDetail);
        
        return  summaryElement.innerHTML = `
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
        <article data-value="${awards}" class="notification is-primary">
        <p class="title">${mediaDetail.Awards}</p>
        <p class="subtitle">Awards</p>
        </article>
        <article data-value="${boxOfficeValue}" class="notification is-primary">
        <p class="title">${mediaDetail.BoxOffice}</p>
        <p class="subtitle">Box Office</p>
        </article>
        <article data-value="${metaScore}" class="notification is-primary">
        <p class="title">${mediaDetail.Metascore}</p>
        <p class="subtitle">Metascore</p>
        </article>
        <article data-value="${imdbRating}" class="notification is-primary">
        <p class="title">${mediaDetail.imdbRating}</p>
        <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value="${imdbVotes}" class="notification is-primary">
        <p class="title">${mediaDetail.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
        </article>
    `
        }

    



    ExtractMediaStatistics = (mediaDetail) => {
        const awards = mediaDetail.Awards.split(' ').reduce((prev, curr) => {
            const value = parseInt(curr);
            if (isNaN(curr)) {
                return prev;
            }
            else {
                return prev + value;
            }
        }, 0);
        const boxOfficeValue = parseInt(mediaDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
        const metaScore = parseInt(mediaDetail.Metascore);
        const imdbRating = parseFloat(mediaDetail.imdbRating);
        const imdbVotes = parseInt(mediaDetail.imdbVotes.replace(/,/g, ''));
        return { awards, boxOfficeValue, metaScore, imdbRating, imdbVotes };
    }
}