import { useState } from "react"

function DayumbertoString(number){
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[number];
}

export default function App(){
const[date, setDate] = useState(new Date());

 setInterval(() => {
  setDate(new Date())
 }, 1)

 return (
  <>
   <h1>{DayumbertoString(parseInt(date.getDay()))}</h1>
   <h3>
    {String(date.getHours()).padStart(2, '0')}:
    {String(date.getMinutes()).padStart(2, '0')}:
    {String(date.getSeconds()).padStart(2, '0')}
    </h3>
   <h4>{date.getFullYear()}</h4>
   </>
 )
}