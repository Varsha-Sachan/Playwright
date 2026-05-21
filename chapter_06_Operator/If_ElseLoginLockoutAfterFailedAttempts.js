let attempt=1;
if(attempt>=3){
   console.log("🔒 Account Locked — Contact support"); 
}
else if(attempt===1 ||attempt===2){
    console.log("1 attempt left before lockout")
}
else if(attempt===0){
    console.log("Login successful");
}