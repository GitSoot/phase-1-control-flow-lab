function scuberGreetingForFeet(trip){
  let rideDistance = trip; 
  if (rideDistance <= 400){
    rideDistance = 'This one is on me!';
    return rideDistance
  } else if (rideDistance > 2000 && rideDistance < 2500) {
    rideDistance = 'I will gladly take your thirty bucks.';
    return rideDistance
  } else {
    rideDistance = 'No can do.';
    return rideDistance
  }
}


function ternaryCheckCity(goodcity){
  let city = goodcity
  if (city === 'NYC') {
    city = 'Ok, sounds good.';
    return city
  } else {
    city = 'No go.';
    return city
  }
}


function switchOnCharmFromTip(charm){
  let tip = charm;
  if (tip === 'generous') {
    tip = 'Thank you so much.';
    return tip
  } else if (tip === 'not as generous') {
    tip = 'Thank you.';
    return tip
  } else {
    tip = 'Bye.';
    return tip
  }
}