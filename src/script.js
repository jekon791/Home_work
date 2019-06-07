import {userNum} from "./factorial";
import {start} from "./isEmpty";
import {randNumbers} from "./randNums";
import {leapYear} from "./leapYear";
import {sortArray} from "./sortArray";
 

document.getElementById("factorial").addEventListener("click",userNum)
document.getElementById("isEmpty").addEventListener("click",start)
document.getElementById("randNums").addEventListener("click",randNumbers)
document.getElementById("leapYear").addEventListener("click",leapYear)
document.getElementById("sortArray").addEventListener("click",console.log(sortArray))