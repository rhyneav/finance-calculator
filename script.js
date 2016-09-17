// For quick testing
window.onload = function() {
    document.getElementById("number").value = 3;
    document.getElementById("interest").value = 10;
    document.getElementById("present-value").value = 0;
    document.getElementById("payment").value = 10;
    document.getElementById("future-value").value = 900;
    
};

function clsFinanceCalculator() {
    var N = 0;
    var I = 0.5;
    var PV = 1;
    var PMT = 2;
    var FV = 3;
    var AnnuityDue = true;
    
    this.SetAllValues = function() {
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
        AnnuityDue = e.options[e.selectedIndex].value;
        
        if (AnnuityDue == "BEGIN") {
            AnnuityDue = true;
        } else {
            AnnuityDue = false;
        }
    };
    
    this.GetPresentValue = function() {
        // PV = FV * (1 / (1 + I)^N)
        // PV = PMT * ((1 - (1 / (1 + I)^N)) / I)
    
        // Find intial present value
        
        var coeff = Math.pow(1 + I, N);
        PV = FV  / coeff;

        // Multiply for if it is an annuity due
        if (AnnuityDue) {
            coeff = Math.pow(1 + I, N - 1);
            PV += PMT * (1 - (1 / coeff)) / I;
            PV += PMT;
        } else {
            PV += PMT * (1 - (1 / coeff)) / I;
        }
        
        return PV;
        
    };
    
    this.GetFutureValue = function() {
        // FV = PV * (1 + r)^n
        
        var coeff = Math.pow(1 + I, N);
        
        if (AnnuityDue) {
            FV = PV * coeff;
            FV += (1 + I) * PMT * ((coeff - 1) / I);

        } else {
            FV = PV * coeff;
            FV += PMT * ((coeff - 1) / I);
        }
        
        
        FV = FV * -1;
        return FV;
        
    };
    
    this.GetPayment = function() {
        
    }
}

document.getElementById("btnPresentValue").addEventListener("click", function(){
    var _PresentValue = new clsFinanceCalculator();
    
    _PresentValue.SetAllValues();
    
    document.getElementById("present-value").value = _PresentValue.GetPresentValue();
});

document.getElementById("btnFutureValue").addEventListener("click", function(){
    var _FutureValue = new clsFinanceCalculator();
    
    _FutureValue.SetAllValues();
    
    document.getElementById("future-value").value = _FutureValue.GetFutureValue();
});