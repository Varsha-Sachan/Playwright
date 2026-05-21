let HttpCode=500;

if(HttpCode>=200 && HttpCode<=299 )
{
    console.log("Success");
}
else if(HttpCode>=300 && HttpCode<=399){
    console.log("Redirection");
}
else if(HttpCode>=400 && HttpCode<=499){

    console.log("Client Error");
}
else if(HttpCode>=500 && HttpCode<=599){
    console.log("Server error");
}
else
    {
        console.log("Invalid")
    }
