let form = document.getElementById("form");

let gross = document.getElementById("gross");
let extra = document.getElementById("extra");
let age = document.getElementById("age");
let total = document.getElementById("total");
let errorg = document.getElementById("errorg");
let errore = document.getElementById("errore");
let errort = document.getElementById("errort");
let button = document.getElementById("button");
let res = document.getElementById("res");
let grosshint = document.getElementById("grosshint");
let extrahint = document.getElementById("extrahint");
let totalhint = document.getElementById("totalhint");


let formdata = {
    grossamount: 0,
    extraamount: 0,
    totalamount: 0,
    age: ""
}

gross.addEventListener("change", function(event) {
    if (event.target.value === "") {
        errorg.textContent = "*Required";
    } else {
        errorg.textContent = "";
    }

    if (isNaN(event.target.value)) {
        errorg.textContent = "Please fill the required fields with valid numbers.";
        grosshint.classList.remove("d-none");
    } else {
        errorg.textContent = "";
        grosshint.classList.add("d-none");
    }

    formdata.grossamount = event.target.value;
})
extra.addEventListener("change", function(event) {
    if (event.target.value === "") {
        errore.textContent = "*Required";
    } else {
        errore.textContent = "";
    }
    if (isNaN(event.target.value)) {
        errore.textContent = "Please fill the required fields with valid numbers.";
        extrahint.classList.remove("d-none");
    } else {
        errore.textContent = "";
        extrahint.classList.add("d-none");
    }

    formdata.extraamount = event.target.value;
})
total.addEventListener("change", function(event) {
    if (event.target.value === "") {
        errort.textContent = "*Required";
    } else {
        errort.textContent = "";
    }
    if (isNaN(event.target.value)) {
        errort.textContent = "Please fill the required fields with valid numbers.";
        totalhint.classList.remove("d-none");
    } else {
        errorg.textContent = "";
        totalhint.classList.add("d-none");
    }

    formdata.totalamount = event.target.value;
})

age.addEventListener("change", function(event) {
    formdata.age = event.target.value;
})



function result() {
    const grossAmount = parseFloat(gross.value);
    const extraAmount = parseFloat(extra.value);
    const totalAmount = parseFloat(total.value);
    const age1 = age.value;

    if (isNaN(grossAmount) || isNaN(extraAmount) || isNaN(totalAmount)) {
        res.textContent = "Please fill all the required fields with valid numbers.";
        return;
    }

    const netIncome = grossAmount + extraAmount - totalAmount;

    if (netIncome <= 800000) {
        res.textContent = "Tax: 0";
    } else {
        let taxRate;
        if (age1 === "<40") {
            taxRate = 0.3;
        } else if (age1 === ">=40 and <60") {
            taxRate = 0.4;
        } else {
            taxRate = 0.1;
        }

        const taxAmount = taxRate * (netIncome - 800000);
        res.textContent = "Tax: " + taxAmount.toFixed(2);
    }
}


button.addEventListener("click", function(event) {
    event.preventDefault();
    result();
})