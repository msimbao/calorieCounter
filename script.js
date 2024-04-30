document.addEventListener('keyup', function(e){
    if(e.target.tagName=="INPUT"){
        // alert("input changed")
        calculateCalories()
    }
})

function calculateCalories(){

    var mixedNuts = document.getElementById("mixedNutsQty").value
    var lentils = document.getElementById("lentilsQty").value
    var bread = document.getElementById("breadQty").value
    var oliveOil = document.getElementById("oliveOilQty").value
    var proteinShake = document.getElementById("proteinShakeQty").value

    var mixedNutsCalories = mixedNuts * 407
    var lentilsCalories = lentils * 230
    var breadCalories = bread * 85
    var oliveOilCalories = oliveOil * 119
    var proteinShakeCalories = proteinShake * 180

    document.getElementById("mixedNutsCalories").innerHTML = mixedNutsCalories
    document.getElementById("lentilsCalories").innerHTML = lentilsCalories
    document.getElementById("breadCalories").innerHTML = breadCalories
    document.getElementById("oliveOilCalories").innerHTML = oliveOilCalories
    document.getElementById("proteinShakeCalories").innerHTML = proteinShakeCalories

    document.getElementById("calorieCount").innerHTML = 
    mixedNutsCalories +
    lentilsCalories +
    breadCalories +
    oliveOilCalories +
    proteinShakeCalories

}

