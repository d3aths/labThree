const score=24
let scoreDesc
let grade

switch (true) {

case score >=75:
    scoreDesc="Distinction"
    console.log (scoreDesc);
    break;

case score >=60 && score <=74:
    scoreDesc="Merit"
    console.log (scoreDesc);
    break;

case score >=50 && score <=59:
    scoreDesc="Pass"
    console.log (scoreDesc);
    break;

case score <=49:
    scoreDesc="Fail"  
    console.log (scoreDesc);
    break;  

default:
    console.log("Please input score")    
}


switch (true) {

    case score >=85: 
        grade="A+"   
        break;
    case score >=80 && score <=84: 
        grade="A"
        break;
    case score >=75 && score <=79:
        grade="A-"
        break;
    case score >=70 && score <=74:
        grade="B+"
        break; 
    case score >=65 && score <=69:
        grade="B"
        break;
    case score >=60 && score <=64:
        grade="B-"
        break;
    case score >=55 && score <=59:
        grade="C+"
        break;  
    case score >=50 && score <=54:
        grade="C"
        break; 
    case score >=40 && score <=49:
        grade="D"
        break;  
    case score >=0 && score <=39:
        grade="E"
        break;  
    default:
        console.log("Error")    
}

if (scoreDesc=="Distinction", scoreDesc=="Merit", scoreDesc=="Pass")  {
console.log("Grade= " + grade + "! You passed with " + scoreDesc)
}
else if (scoreDesc=="Fail") {
    console.log("Grade= " + grade + "! You failed!")
}