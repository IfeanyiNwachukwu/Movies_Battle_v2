
const rooty1 = document.querySelector('#left-autocomplete');
const rooty2 = document.querySelector('#right-autocomplete');
var summaryElement1 = document.querySelector('#left-summary');
var summaryElement2 = document.querySelector('#right-summary');

const media = new Media(new FetchData);

const autoComplete1 = new AutoComplete(rooty1,new Utilities,media,summaryElement1);
autoComplete1.CreateWidget();
autoComplete1.ClearWidget();
const autoComplete2 = new AutoComplete(rooty2,new Utilities,media,summaryElement2);
autoComplete2.CreateWidget();
autoComplete2.ClearWidget();








