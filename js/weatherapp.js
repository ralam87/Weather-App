$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      var lat = position.coords.latitude;
      var long = position.coords.longitude;

      var req1 = "http://api.openweathermap.org/data/2.5/weather?lat="
      var req2 = "&lon="
      var key = "&APPid=f82495c260465536403f5c16099f6e66&units="
      var units = "metric"
      y = "&#8451"
      retrieve(y)

      $('#imp').click(function() {
        units = "imperial"
        y = "&#8457"
        retrieve(y)
      })

      $('#met').click(function() {
        units = "metric"
        y = "&#8451"
        retrieve(y)
      })

      function retrieve(y) {
        var linked = req1 + lat + req2 + long + key + units
        $.getJSON(linked, gotData, 'jsonp')
      }
    })

    function gotData(val) {
      $('#tempInfo').html("The temperature in " + val.name + ", " +
        val.sys.country + " is " + val.main.temp + y + " with some " +
        "<p id=finalReport>"+val.weather[0].description+"</p>")

      var finalReport = document.getElementById("finalReport").innerHTML

      if (finalReport === "broken clouds") {
        $('body').css("background",
        'url("https://i.ytimg.com/vi/2hCIgsCKoWE/maxresdefault.jpg")');
      }

      if (finalReport === "clear sky") {
        $('body').css("background",
        'url("http://1920x1080hdwallpapers.com/image/201510/nature/2427/field-tree-clear-sky-landskape-texas-usa.jpg")');
      }

      if (finalReport === "scattered clouds") {
        $('body').css("background",
        'url("http://www.lold.org/uploads/2011/03/mountains-clouds-wallpaper.jpg")');
      }

      if (finalReport === "light rain") {
        $('body').css("background",
        'url("http://www.lold.org/uploads/2011/03/mountains-clouds-wallpaper.jpg")');
      }

      if (finalReport === "overcast clouds") {
        $('body').css("background",
        'url("http://1920x1080hdwallpapers.com/image/201503/nature/864/lake-cloud-forest-overcast.jpg")');
    	}

      if (finalReport === "mist") {
        $('body').css("background",
        'url("http://www.mrwallpaper.com/wallpapers/early-morning-mist-1920x1080.jpg")');
    	}
    }
  }
})
