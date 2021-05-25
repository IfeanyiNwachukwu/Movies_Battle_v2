
class AutoComplete{



    constructor(rooty,utilities,media,summaryDiv,side){
        
        this.Root = rooty ;
        this.Root.innerHTML = ` <label for=""><b>Search</b></label>
        <input type="text" class="input">
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results">
                    
                </div>
            </div>
        </div>
        `
        this.Utilities = utilities;
        this.Media = media;
        this.SummaryDiv = summaryDiv;
       
        this.DropDown       =       this.Root.querySelector('.dropdown');
        this.ResultsWrapper =       this.Root.querySelector('.results');
        this.UserInput      =       this.Root.querySelector('.input');
        this.Side = side;
        
    }

    OnInputEvent = async event =>{
        
        // const items = await this.FetchData.GetMovieList(event.target.value);
        const items = await this.Media.FetchAllMedia(event.target.value);
        console.log(items);
        if(!items.length){
            this.DropDown.classList.remove('is-active');
        }
        else{
          this.DropDown.classList.add('is-active');
        }
        this.ResultsWrapper.innerHTML = '';
        
        for(let item of items){
  
          const option = document.createElement('a');
          option.classList.add('dropdown-item');
        
          option.innerHTML =  this.Media.RenderOption(item);
          this.ResultsWrapper.appendChild(option);
          
          option.addEventListener('click',() => {
              
             this.DropDown.classList.remove('is-active');
            this.Media.DisplayMediaInDetail(item.imdbID,this.SummaryDiv,this.Side);
            this.UserInput.value = this.Utilities.GetInputValue(item);
             
              
              
          });
          }
          
     }
  
     
     CreateWidget  = () =>{
       
        this.UserInput.addEventListener('input',this.Utilities.Debounce(this.OnInputEvent));
     }
  
     ClearWidget = () => {
         document.addEventListener('click',(event) => {
            if(!this.Root.contains(event.target)){
                this.DropDown.classList.remove('is-active');
            }
         })
    }

    


     
     

















}