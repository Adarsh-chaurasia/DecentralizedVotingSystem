var userinput = document.getElementById("dob");  
var b1 = document.getElementById('check');
var b2 = document.getElementById('voting');
b1.addEventListener('click',function(){
    var date = new Date(userinput.value)
    var currDate = new Date().getFullYear();
    // console.log(date);
    // console.log(currDate);
    
    // console.log(date.getFullYear());
    // console.log();
    if (Math.abs(date.getFullYear()-currDate)>=18){
        b2.classList.remove('disabled');
        document.getElementById('result').innerText = "You are Eligible To Vote !";

    }

    else{
        b2.classList.add('disabled');
        document.getElementById('result').innerText = "You are Not Eligible To Vote !";
    }
    
    



})

// var dob = new Date(userinput); 
// var but = document.getElementById('check');
// var but2 = document.getElementById("voting");
// but.addEventListener('click',function(){
// var month_diff = Date.now() - dob.getTime();   
// var age_dt = new Date(month_diff);       
// var year = age_dt.getUTCFullYear();  
// var age = Math.abs(year - 1970); 
// alert(age); 
// } )