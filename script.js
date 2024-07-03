function calculate(){
    let day;
    let month;
    let year;
    let currentDay=parseInt(cd.value.slice(8,10),10);
    let currentMonth=parseInt(cd.value.slice(5,7),10);
    let currentYear=parseInt(cd.value.slice(0,4),10);

    console.log(currentYear,currentMonth,currentDay);

    let dateOfBirthDay=parseInt(dob.value.slice(8,10),10);
    let dateOfBirthMonth=parseInt(dob.value.slice(5,7),10);
    let dateOfBirthYear=parseInt(dob.value.slice(0,4),10);

    console.log(dateOfBirthYear,dateOfBirthMonth,dateOfBirthDay);

    if(currentDay>=dateOfBirthDay){
        day=currentDay-dateOfBirthDay;
    }
    else{
        day=currentDay+new Date(currentYear,currentMonth).getDate-dateOfBirthDay;
        currentMonth --;

    }

    if(currentMonth>=dateOfBirthMonth){
        month=currentMonth-dateOfBirthMonth;
    }
    else{
        month=(currentMonth+12)-dateOfBirthMonth;
        currentYear --;
    }
 
    year=currentYear-dateOfBirthYear;

    if(year<0){
        ageText.innerHTML="kya Nautanki kar rhe ho...Right date Dalo...";
    }
    else{
         

    ageText.innerHTML= year + " Years," + month + " Months, " + day + " Days" ;
    }
}
    