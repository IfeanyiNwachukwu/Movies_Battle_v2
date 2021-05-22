class Utilities {

    Debounce = (func) => {
        let timeoutId;
        return (...args) => {
            if(timeoutId){
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null,args);
            },700);
        }
    }

    Query = (query) => {
        return document.querySelector(query);
    }

    Display = (input) => {
        console.log(input);
    }


}