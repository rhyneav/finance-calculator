var N;
var I;
var PV;
var PMT;
var FV;
var PY;
var CY;
var BegEnd;

function LoadNumbers() {
    N = document.getElementById("number").value;
    console.log(N);
    I = document.getElementById("interest").value / 100;
    console.log(I);
    PV = document.getElementById("present-value").value;
    console.log(PV);
    PMT = document.getElementById("payment").value;
    console.log(PMT);
    FV = document.getElementById("future-value").value;
    console.log(FV);
    BegEnd = document.getElementById("number").value;
    console.log(BegEnd);

}

function PresentValue() {
    // PV = FV * (1 / (1 + I)^N)
    
    LoadNumbers();
    
    PV = FV * (1 / (1 + I)^N)
    
    console.log(PV);
    return PV;
}