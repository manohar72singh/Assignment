var data = {};
(() => {
    var dataUrl = "https://manohar72singh.github.io/ISDBdata/SDBdata.json";
    $.ajax({
        url: dataUrl,
        method: "GET",
        dataType: "json",
        success: (response) => {
            console.log("Success")
            data = response;
            console.log(data);
        },
        error: (error) => {
            console.log("Error")
            console.log(error);
        }
    });
})();
var loadState = () => {
    let states = "";
    for (i = 0; i < data.states.length; i++) {
        states = states + "<option value='" + i + "'>" + data.states[i].name + "</option>";
        //console.log(states);
    }
    document.querySelector("#states").innerHTML = states;
}
var loaddistrict = () => {
    let districts = "";
    let selectedState = document.getElementById("states").value;
    for (let i = 0; i < data.states[selectedState].districtList.length; i++) {
        districts = districts + "<option value='" + i + "'>" + data.states[selectedState].districtList[i].name + "</option>";
    }
    document.querySelector("#district").innerHTML = districts;
}

var loadBlock = () => {
    let blocks = "";
    let selectedState = document.getElementById("states").value
    let selectedDistrict = document.getElementById("district").value;
    console.log(selectedDistrict)
    for (let i = 0; i < data.states[selectedState].districtList[selectedDistrict].length; i++) {
        blocks = blocks + "<option value='" + i + "'>" + data.states[selectedState].districtList[selectedDistrict].blockList[i] + "</option>";
    }
    document.querySelector("#block").innerHTML = blocks;
}