
const rooty1 = document.querySelector('#left-autocomplete');
const rooty2 = document.querySelector('#right-autocomplete');
var summaryDiv = document.querySelector('#summary');
const media = new Media(new FetchData,summaryDiv);
const autoComplete1 = new AutoComplete(rooty1,new Utilities,media);
const autoComplete2 = new AutoComplete(rooty2,new Utilities,media);
autoComplete1.CreateWidget();
autoComplete1.ClearWidget();
autoComplete2.CreateWidget();
autoComplete2.ClearWidget();




