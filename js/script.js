

//GLOBAL VARIABLES
let ipBox= document.getElementById("ip-address-content");
let locationBox= document.getElementById("location-content");
let timezoneBox= document.getElementById("timezone-content");
let lspBox= document.getElementById("lsp-content");


//KEY
let input = document.getElementById("site-search");
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("search-button").click();
    }
});


//MAP Script
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


//Function searchIP
function searchIp(){
    let searchContent = document.getElementById("site-search").value;
    //console.log("Search for IP: "+searchContent);
    getIpInfo(searchContent);

}



//Geolocation API

function getIpInfo(ipAddress){

    let ip = ipAddress;

const url= "https://geo.ipify.org/api/v2/country?apiKey=at_5bjtmEoKTG7ErbAWHLqcvEUfquebs&ipAddress="+ip;
fetch(url)
.then((resp)=> resp.json())
.then(function(data){
    //console.log(data);
    //console.log(ipBox);
    ipBox.innerHTML = data.ip;
    locationBox.innerHTML = data.location.country + "" + data.location.region;
    timezoneBox.innerHTML = data.location.timezone;
    lspBox.innerHTML = data.isp;
})
.catch(function(){
    console.error("ERROR WHILE FETCHING API");
});
}



