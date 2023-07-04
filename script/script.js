//Declaring the constants to be called upon for arithmetic 
const tax = 0.13;

let errors = "";

const nbPrice = 12.00;
const penPrice = 2.50;
const bagPrice = 32.50;

//Declaring number regex
const numberRegex = /^[\(]?[0-9]{3}[\)][\-][0-9]{3}[\-][0-9]{4}$/

//Declaring check out function to be called when user complete form field input
function checkOut() {
    //setting the output div to display
    document.getElementById("output").style.display = "block";

    //retrieving user input from Shop HTML form
    var notebooks = document.getElementById('notebooks').value;
    var pens = document.getElementById('pens').value;
    var bags = document.getElementById('bags').value;
    var cName = document.getElementById('cName').value;
    var cNumber = document.getElementById('cNumber').value;

    //validating input for notebooks
    notebooks = notebooks.trim();
    if (isNaN(notebooks) || notebooks === '' || notebooks === null) //If this returns true, then notebooks input is not a string
    {
        document.getElementById("errors").innerHTML += "Please enter numbers only, enter number of notebooks to be purchased: <br>";
    } else {
        parseInt(notebooks);
    }

    //Validating in put for pen
    pens = pens.trim();
    if (isNaN(pens) || pens === '' || pens === null) //If this returns true, then pens input is not a string
    {
        document.getElementById("errors").innerHTML += "Please enter numbers only, enter number of pens to be purchased: <br>";
    } else {
        parseInt(pens);
    }

    //validating input for bags
    bags = bags.trim();
    if (isNaN(bags) || bags === '' || bags === null) //If this returns true, then bags input is not a string
    {
        document.getElementById("errors").innerHTML += "Please enter numbers only, enter number of bags to be purchased: <br>";
    } else {
        parseInt(bags);
    }

    //validating name
    if (!(isNaN(cName) || cName === '' || cName === null)) {
        document.getElementById("errors").innerHTML += "Please enter your name <br>"
    } else {
        cName = cName.trim();
    }

    //validating phone number format against regex declared
    if (!numberRegex.test(cNumber)) {
        document.getElementById("errors").innerHTML += `Your phone number format should be (000)-000-0000 <br>`
    }

    //Checking to see if errors were displayed, if errors were displayed, no calculation will be done
    if (document.getElementById("errors").innerHTML != 0 || document.getElementById("errors").innerHTML != "") {
        document.getElementById("errors").innerHTML += "Please type input again";
    } else {
        //validating: if no errors were displayed, it proceeds to calculation
        /* Calculating the cost */
        var nbCost = nbPrice * notebooks;
        var penCost = penPrice * pens;
        var bagCost = bagPrice * bags;

        //subtotal: addition of item cost
        var subTotal = nbCost + penCost + bagCost;

        //totalTax: multiplication of subtotal by tax declare above
        var totalTax = subTotal * tax;

        //Sales total/total amount to be paid: addition of subtotal and totaltax
        var salesTotal = subTotal + totalTax;

        //Displaying the receipt to the receipt paragraph in output div
        document.getElementById('receipt').innerHTML = `Thank you ${cName}, ${cNumber} for shopping with us <br>
                                                    You bought ${notebooks} notebooks @ ${nbPrice} per notebook for ${nbCost.toFixed(2)} <br>
                                                    You bought ${pens} pens @ ${penPrice} per pen for ${penCost.toFixed(2)} <br>
                                                    You bought ${bags} bags @ ${bagPrice} per bag for ${bagCost.toFixed(2)} <br>
                                                    The Sub-Total of the items purchase is: ${subTotal} <br>
                                                    with a total tax of ${totalTax.toFixed(2)} <br> 
                                                    Total amount to be paid is: ${salesTotal.toFixed(2)} <br><br>
                                                    Once again, Thank you for shopping with us, see you soon!`

    }

    return false;
}