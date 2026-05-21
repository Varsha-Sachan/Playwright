let passedPercentage=65;
if(passedPercentage===100){
    console.log("Green Build");
}
else if(passedPercentage>=90 && passedPercentage<=99) {
    console.log("Stable (investigate failures)");
}
else if(passedPercentage>=70 && passedPercentage<=89){
    console.log("Unstable");
} 
else{console.log("Broken Build — Block deployment")}