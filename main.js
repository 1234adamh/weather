
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    var myVar = setInterval(update, 1000);

 function update() {
     if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.darksky.net/forecast/6996475deac1e4b679e38ddd5b2b6648/${lat},${long}`;

    fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary, icon} = data.currently;
                temperatureDegree.textContent = ((temperature-32) * (5/9)).toFixed(1);
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                
                
                //set Icon
                setIcons(icon, document.querySelector(".icon"));

                
                // clear-day, clear-night, rain, snow,  sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night.

            //     document.write(icon);
                var bgimage;

                switch (icon) {
                    case "clear-day":
                        bgimage = "clear-day.jpg";
                        break;
                    case "clear-night":
                        bgimage = "clear-night.jpg";
                        break;
                    case "rain":
                        bgimage = "rain.jpg";
                        break;
                    case "snow":
                        bgimage = "snow.jpg";
                        break; 
                    case "sleet":
                        bgimage = "sleet.png";
                        break;
                    case "wind":
                        bgimage = "wind.jpg";
                        break;
                    case "fog":
                        bgimage = "fog.jpg";
                        break;
                    case "cloudy":
                        bgimage = "cloudy.jpg";
                        break;
                    case "partly-cloudy-day":
                        bgimage = "partly-cloudy-day.jpg";
                        break;
                    case "partly-cloudy-night":
                        bgimage = "partly-cloudy-night.jpg";
                        break;

                    default:
                        bjimage = "defualt.jpg";
                }
                
                //  document.write(bgimage);
                    //document.body.style.background = "url('partly-cloudy-night.jpg') no-repeat center center";

                    document.body.style.background = "url(" + bgimage + ") no-repeat center center";
                    document.body.style.backgroundSize = "cover";
                document.body.style.backgroundColor = 'transparent';


            });
        });
    
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
    
     var myVar = setInterval(myTimer, 1000);
    function myTimer(){
        var d = new Date();
        document.getElementById("time").innerHTML = d.toLocaleTimeString()}
        ;
    
 }
});
    
