var data = require('./data');
var cardata = require('./cardata');
function iterateOverData(array){
  var newArray = []
  for(i = 0; i < array.length; i = i + 1){
    var crime = array[i];
    newArray.push(crime);
  }
  var counter = 0;
  var hitAndRunCounter = 0;
  var assaultCounter = 0;
  var duis = [];
  var hitAndRun = [];
  var assaults = [];
  var TOD = [];
  var totalTime = 0;
  for(j = 0; j < newArray.length; j = j + 1){
    if(newArray[j].OFFENSE_TYPE_ID === "traffic-accident-dui-duid"){
      counter = counter + 1;
      var dui = newArray[j].OFFENSE_TYPE_ID;
      duis.push(dui);
      if(newArray[j].FIRST_OCCURRENCE_DATE){
        var time = newArray[j].FIRST_OCCURRENCE_DATE.substring(8);
        TOD.push(time);
        for(k = 0; k < TOD.length; k = k + 1){
          var instant = TOD[k].split(':').join('')
          var instantNum = parseInt(instant);
          console.log(instantNum)
          totalTime = totalTime + instantNum;
        }
        var avg = totalTime / TOD.length;
      }
    } if (newArray[j].OFFENSE_TYPE_ID === "traffic-accident-hit-and-run"){
      hitAndRunCounter =  hitAndRunCounter + 1;
      var run = newArray[j].OFFENSE_TYPE_ID;
      hitAndRun.push(run);
    } if( newArray[j].OFFENSE_TYPE_ID === "traf-vehicular-assault"){
      assaultCounter = assaultCounter + 1;
      var assault = newArray[j].OFFENSE_TYPE_ID;
      assaults.push(assault);
    }
  }
  console.log(avg)
  console.log("Total numbers: " + "DUI: " + duis.length + " Hit and Run: " + hitAndRun.length + " Assaults: " + assaults.length)
}
iterateOverData(cardata);