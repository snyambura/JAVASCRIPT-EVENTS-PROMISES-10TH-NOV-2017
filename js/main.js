
//onclick event
function submit_by_id() {
    var rent = parseInt(document.getElementById("rent").value);
    var waterbill =parseInt(document.getElementById("waterbill").value);
    var elecbill = parseInt(document.getElementById("elecbill").value);
    var netbill = parseInt(document.getElementById("netbill").value);


    document.getElementById("form_id").submit(); //form submission

// closure

    function showDetails() {
        var total = (rent + waterbill + elecbill + netbill);

        alert(" Rent : " + rent + " \n Water : " + waterbill + " \n Electricity : " + elecbill +
            " \n Internet : "+ netbill  + "\n\n Total is " + total);

    }


    showDetails();
}

//onmouseover event
function over() {
    document.getElementById("rent").innerHTML = "Input Rent";

}

//onmouseout event
function out() {
    document.getElementById("rent").write("Input Rent");

}


//promise
var oldmachine = true;

var replacemachine = new Promise(
    function (replace, decline){
        if (oldmachine){
            var laptop = {
                model: 'MacBook'
            };
            replace(laptop);
        }else{
            var reject = new Error("machine is in good condition");
            decline(reject)
        }
    }
);

    var inspectmachine = function () {
    replacemachine.then(function (accepted) {
        console.log(accepted);

    })
        .catch(function (error) {
            console.log(error.message);

        });

}

inspectmachine();