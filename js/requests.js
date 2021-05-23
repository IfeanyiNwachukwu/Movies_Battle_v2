class FetchData{
    requestMovieList = {s : 'search'};
   
    GetMovieList   =  async (searchTerm) => {
       this.requestMovieList = {s : searchTerm};
       const response = await axios.get('http://omdbapi.com/',this.apiRequestObjectForList(this.requestMovieList));
       if(response.data.Response === 'False'){
           return [];
       }
       return response.data.Search;
   }

   GetMovieDetail   = async  (movieID) => {
       this.requestMovieList = {i : movieID}
       const response = await axios.get('http://omdbapi.com/',this.apiRequestObjectForList(this.requestMovieList));
       return response.data;
    //    console.log(response);
   }

   
   
   
   
   apiRequestObjectForList = (request) => {
       
      const keys = Object.keys(request);
      const key = keys[0];

       return {
           params: {
               apikey: '76019ee8',
               [key] : request[key]
           }
       };
   };

   

   
   
   
}