//Get current postition

function CurrentSuccess(pos) {
  console.log(pos);
  const corrd = pos.coords;
  console.log(`Latitude: ${corrd.latitude}`);
  console.log(`Longitude: ${corrd.longitude}`);
  console.log(`Accuracy: ${corrd.accuracy} in meters`);
}

function CurrentFailure(err) {
  console.log(`Error: ${err.code}, ${err.meessage}`);
}

const CurrentPosition = {
    enableHighAccuracy: true,  //use GPS if available
    timeout:5000, //time to wait to stop trying for location
    maximumAge:0 //Do not use a cache position
};

navigator.geolocation.getCurrentPosition(
  CurrentSuccess,
  CurrentFailure,
   CurrentPosition
);


//WatchPositions
const target={
    latitude:41.3453534,
    longitude:-71.39545
};
function WatchSuccess(pos){
    const coord=pos.corrds;
    console.log(corrd);
    if(target.latitude==coord.latitude && target.longitude==coord.longitude){
        console.log("you have reached the destination");  
        navigator.geolocation.clearWatch(WatchId);
    }
  }
  
  function WatchFailure(err) {
    console.log(`Error: ${err.code}, ${err.meessage}`);
  }
  
  WatchPosition = {
      enableHighAccuracy: true,  //use GPS if available
      timeout:5000, //time to wait to stop trying for location
      maximumAge:0 //Do not use a cache position
  };
  
  const WatchId=vnavigator.geolocation.getCurrentPosition(
    WatchSuccess,
    WatchFailure,
    WatchPosition
  );
  