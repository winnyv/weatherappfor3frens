import { useEffect, useState } from "react";
const TimesTop = ({ time, sunrise, sunset, nextSunrise }) => {

  const[goldenHour,setGH] = useState();

  /*Get hours and minutes for current time */

  var epoch = parseInt(time);
  var myDate = new Date(epoch * 1000);
  var hourNow = myDate.getHours();
  var minutesNow = myDate.getMinutes();
  if (minutesNow < 10) {
    minutesNow = '0' + parseInt(minutesNow)
  }

  /*Get hours and minutes for sunirse */
  epoch = parseInt(sunrise);
  myDate = new Date(epoch * 1000);
  var hourRise = myDate.getHours();
  var minutesRise = myDate.getMinutes();
  if (minutesRise < 10) {
    minutesRise = '0' + parseInt(minutesRise)
  }

  /*Get hours and minutes for sunset */
  epoch = parseInt(sunset);
  myDate = new Date(epoch * 1000);
  var hourSet = myDate.getHours();
  var minutesSet = myDate.getMinutes();
  if (minutesSet < 10) {
    minutesSet = '0' + minutesSet
  }
  return (
    <div id="TimesTop">
      <table id="TableTime">
        <tbody>
          <tr>
           
            <th id="CurTime">{hourNow}:{minutesNow}</th>
           
          </tr>
        </tbody>
      </table>
      <div id="GoldenHour"> {goldenHour}</div>
    </div>
  )
}
export default TimesTop