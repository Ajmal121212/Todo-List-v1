module.exports.date = getDate;
function getDate(){
var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var today = new Date();
  return today.toLocaleDateString("en-US", options);

}
module.exports.day = getDay;
function getDay(){
    var options = {
        weekday: "long",
      };
      var today = new Date();
      return today.toLocaleDateString("en-US", options);
    
    }