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
    N = Number(N);

    I = document.getElementById("interest").value / 100;
    I = Number(I);

    PV = document.getElementById("present-value").value;
    PV = Number(PV);

    PMT = document.getElementById("payment").value;
    PMT = Number(PMT);

    FV = document.getElementById("future-value").value;
    FV = Number(FV);

    var e = document.getElementById("beg-or-end");
    BegEnd = e.options[e.selectedIndex].value;
}

function PresentValue() {
    // PV = FV * (1 / (1 + I)^N)
    // PV = PMT * ((1 - (1 / (1 + I)^N)) / I)
    
    LoadNumbers();
    
    var coeff = Math.pow(1 + I, N);
    
    // Find intial present value
    PV = FV  / coeff;
    
    // Multiply for if it is an annuity due
    if (BegEnd == "BEGIN") {
        // Add present value if there are payments in the annuity
        coeff = Math.pow(1 + I, N - 1);
        PV += (PMT * ((1 - (1 / coeff)) / I));
        PV = Number(PV);
        console.log(PV);
        PV = PV + PMT;
        console.log(PV);
    } else {
        // Add present value if there are payments in the annuity
        PV += PMT * ((1 - (1 / coeff)) / I);
    }
    
    document.getElementById("present-value").value = PV;
}

// For quick testing
window.onload = function() {
    document.getElementById("number").value = 3;
    document.getElementById("interest").value = 10;
    document.getElementById("present-value").value = 0;
    document.getElementById("payment").value = 10;
    document.getElementById("future-value").value = 900;
};