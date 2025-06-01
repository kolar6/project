function result(){
let date=document.getElementById("date").value
let month=document.getElementById("month").value
let year=document.getElementById("year").value
// let ageis=document.getElementById("ageis")

let dateall = new Date()
let d1 = dateall.getDate()
let m1 = 1 + dateall.getMonth()
let y1 = dateall.getFullYear()
let monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if( date <= 0 || date > 31){
    document.getElementById("invalid-input").innerHTML = "enter a valid date";
}else if( month <= 0 || month > 12){
    document.getElementById("invalid-input").innerHTML = "enter a valid month";
}else if( year <= 0 || year > y1){
    document.getElementById("invalid-input").innerHTML = "enter a valid year";
}
else{
    if(date > d1){
        d1 = d1 + monthdays[m1 - 1];
        m1 = m1 - 1;
    }

    if(month > m1){
        m1 = m1 + 12;
        y1 = y1 - 1;

    }

   let y= y1 - year;
    let m= m1 - month;
    let d= d1 - date;

    document.getElementById("ageis").innerHTML= y + " years," + m + "months," + d + "days"
}


}
