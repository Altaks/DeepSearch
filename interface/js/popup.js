const searchInput = document.getElementById("search");
const rawSearchInput = document.getElementById("raw-search");
const extensionInput = document.getElementById("extension");
const websiteInput = document.getElementById("website");

const dateBeginInput = document.getElementById("date-beginning");
const dateEndInput = document.getElementById("date-ending");

const submitButton = document.getElementById("submit");

submitButton.onclick = function(event) {

    var link = "https://www.google.com/search?q=";

    // add calculations here
    if(searchInput.value != "") {
        if(rawSearchInput.checked) {
            link += "\""
        }
        link += searchInput.value;
        if(rawSearchInput.checked) {
            link += "\""
        }
    }

    if(extensionInput.value != "") {
        link += "+ext:" + extensionInput.value;
    }

    if(websiteInput.value != "") {
        link += "+website:" + websiteInput.value;
    }

    if(dateBeginInput.value != "" && dateEndInput.value != "") {

        Date.prototype.getJulian = function() {
            return Math.ceil((this / 86400000) - (this.getTimezoneOffset()/1440) + 2440587.5);
        }
        
        var dateBegin = new Date(dateBeginInput.value);
        var dateEnd = new Date(dateEndInput.value);

        link += "+" + dateBegin.getJulian() + ".." + dateEnd.getJulian();
    }

    window.open(link, '_blank');

}