var studentList=[];
var readData=()=>{
    var studentData={};
    studentData.name = document.querySelector("#sname").value;
    studentData.age = document.querySelector("#sage").value;
    studentData.gender = document.querySelector("input[name=gender]:checked").value;
    studentData.loction = document.querySelector("#loc").value;

    studentData.reset=()=>{
        document.querySelector("#sname").value = "";
        document.querySelector("#sage").value = "";
        // document.querySelector("input[name=gender]:checked").value = "";
        // document.querySelector("#loc").value = "";
    };
    studentData.showData=()=>{    
        
        var tbody = document.createElement("tbody")
        var trTag=document.createElement("tr");
        var td1Tag = document.createElement("td");
        var td2Tag = document.createElement("td");
        var td3Tag = document.createElement("td");
        var td4Tag = document.createElement("td");
        var td5Tag = document.createElement("td");
        td1Tag.innerHTML = studentData.name;
        trTag.appendChild(td1Tag)
        td2Tag.innerHTML = studentData.age;
        trTag.appendChild(td2Tag)
        td3Tag.innerHTML = studentData.gender;
        trTag.appendChild(td3Tag)
        td4Tag.innerHTML = studentData.loction;
        trTag.appendChild(td4Tag)
        for(i in studentData)
        {
            td5Tag.innerHTML=`<input type="button" value="Edit" onclick="edit()"> <input type="button" value="Delete" onclick="remove(${this.id})">`;
            trTag.appendChild(td5Tag);
        }
        
        tbody.append(trTag)
        document.querySelector(".table").append(tbody)
        studentList.push(studentData)
        console.log(studentList)
        studentData.reset();
        console.log(tbody)
    };
    studentData.showData();  
    
}
var edit=()=>{
    alert("Edit")
        
};
var remove=()=>{
    alert("Delete")
};

