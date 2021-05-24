
const rooty = document.querySelector('.autocomplete');
var summaryDiv = document.querySelector('#summary');
const media = new Media(new FetchData,summaryDiv);
const autoComplete = new AutoComplete(rooty,new Utilities,media);
autoComplete.CreateWidget();
autoComplete.ClearWidget();




