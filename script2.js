// Set the date we're counting down to
const countDownDate = new Date("Dec 15, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "It's the Big Day!";
  }
}, 1000);

// Function to calculate the distance between the user's current location and the venue
navigator.geolocation.getCurrentPosition((position) => {
  const userLat = position.coords.latitude;
  const userLon = position.coords.longitude;

  const venueLat = 21.3246; // Latitude of Beed, Nandurbar, Maharashtra
  const venueLon = 74.4392; // Longitude of Beed, Nandurbar, Maharashtra

  const distance = calculateDistance(userLat, userLon, venueLat, venueLon).toFixed(2);
  document.getElementById('distance').textContent = `You are ${distance} km away from the venue.`;
});

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function findBuses() {
  window.open('https://www.google.com/maps/dir/?api=1&destination=Beed,+Nandurbar,+Maharashtra,+India&travelmode=transit', '_blank');
}

function findTrains() {
  window.open('https://www.irctc.co.in/nget/train-search', '_blank');
}

function otherWays() {
  alert('Consider using taxis, car rentals, or flight services to reach the venue!');
}