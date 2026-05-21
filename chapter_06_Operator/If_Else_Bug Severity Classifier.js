let Bug_Severity=5;
if(Bug_Severity>=9 && Bug_Severity<=10){
    console.log("Critical Bug");
}
else if(Bug_Severity>=8 && Bug_Severity<=7){
    console.log("High Bug");
}
else if(Bug_Severity>=4 && Bug_Severity<=6){
    console.log("Medium Bug");
}
else if(Bug_Severity>=3 && Bug_Severity<=2){
    console.log("Low Bug");
}
else{
    console.log("Invalid Bug Severity");
}