//GLOBAL VARIABLES
let ipBox= document.getElementById("ip-address-content");
let locationBox= document.getElementById("location-content");
let timezoneBox= document.getElementById("timezone-content");
let lspBox= document.getElementById("lsp-content");
let marker;
let map;



//Key-Press
let input = document.getElementById("site-search");
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("search-button").click();
    }
});



//Set initial ip with own Ip Address
window.addEventListener('load', ()=>{
    getInitialIp();
})





//Set Map Script
function setMap(lat, lng, ip){
<<<<<<< HEAD
let map = L.map('map').setView([lat, lng], 13);
console.log("---- MAP----");
console.log(lat);
console.log(lng);
console.log(ip);
=======
map = L.map('map').setView([lat, lng], 13);
marker = L.marker([lat, lng]);
>>>>>>> ea85dccd23b078c8b0ace437977d083bc8c0dd43

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
marker.bindPopup("Your IP is: "+ip).openPopup();


}



//Function searchIP
function searchIp(){
    let searchContent = document.getElementById("site-search").value;
    getIpInfo(searchContent);

}




//Geolocation API

function getIpInfo(ipAddress){
    let input = String(ipAddress)
    //Regex to check if IP or Domain
    const regexEx=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    console.log(ipAddress);
    console.log("--GET INFO--");
    
    let url= "https://geo.ipify.org/api/v2/country,city?apiKey=at_5bjtmEoKTG7ErbAWHLqcvEUfquebs&ipAddress="+input;
    let regexCheck = regexEx.test(input);
    console.log(regexCheck);
    console.log(typeof String(input));
    if(regexCheck == true){
        //Valid IP -> IP search
         url ="https://geo.ipify.org/api/v2/country,city?apiKey=at_5bjtmEoKTG7ErbAWHLqcvEUfquebs&ipAddress="+input;
    }
    else{
        //Not a valid Ip => Domain
        url ="https://geo.ipify.org/api/v2/country,city?apiKey=at_5bjtmEoKTG7ErbAWHLqcvEUfquebs&domain="+input;
    }
    

fetch(url)
.then((resp)=> resp.json())
.then(function(data){
    console.log(data);
    ipBox.innerHTML = data.ip;
    locationBox.innerHTML = data.location.country + " " + data.location.region;
    timezoneBox.innerHTML = data.location.timezone;
    lspBox.innerHTML = data.isp;
   
<<<<<<< HEAD
    //setMap(data.location.lat, data.location.lng, data.ip); 
    updateMarker(data.location.lat, data.location.lng, data.ip);
    

=======
    updateMap(data.location.lat, data.location.lng, data.ip); 
>>>>>>> ea85dccd23b078c8b0ace437977d083bc8c0dd43
})
/*.catch(function(){
    console.error("ERROR WHILE FETCHING API");
});
*/
}





function getInitialIp(){
<<<<<<< HEAD

   

let url= "https://geo.ipify.org/api/v2/country,city?apiKey=at_5bjtmEoKTG7ErbAWHLqcvEUfquebs&ipAddress";
=======
    let url= "https://geo.ipify.org/api/v2/country,city?apiKey=at_5bjtmEoKTG7ErbAWHLqcvEUfquebs&ipAddress";
>>>>>>> ea85dccd23b078c8b0ace437977d083bc8c0dd43
   
fetch(url)
.then((resp)=> resp.json())
.then(function(data){
    console.log(data);
    ipBox.innerHTML = data.ip;
    locationBox.innerHTML = data.location.country + " " + data.location.region;
    timezoneBox.innerHTML = data.location.timezone;
    lspBox.innerHTML = data.isp;
    setMap(data.location.lat, data.location.lng, data.ip); 
})
.catch(function(){
    console.error("ERROR WHILE FETCHING API");
});
}



<<<<<<< HEAD
function updateMarker(lat, lng){
    L.marker([lat, lng]).addTo(map)
.bindPopup(ip)
.openPopup();
=======
function updateMap(lat, lng, ip){
   marker.setLatLng([lat, lng]).update();
   marker.bindPopup("Your IP is: "+ip).openPopup();
   map.flyTo([lat, lng], 13);
>>>>>>> ea85dccd23b078c8b0ace437977d083bc8c0dd43
}