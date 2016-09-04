var N;
var I;
var PV;
var PMT;
var FV;
var PY;
var CY;
var BegEnd;

function LoadNumbers() {
    N = document.getElementById("N").value;
    I = document.getElementById("I").value;
    PV = document.getElementById("PV").value;
    PMT = document.getElementById("PMT").value;
    FV = document.getElementById("FV").value;
    PY = document.getElementById("PY").value;
    CY = document.getElementById("CY").value;
    BegEnd = document.getElementById("BegEnd").value;
    
    console.log(N);
}

function PresentValue() {
    // PV = FV * [1 / (1 + i)^n]
    
    LoadNumbers();
    
    var PV = 0;
    
    
    
    console.log("worked!")
    
    return PV;
}