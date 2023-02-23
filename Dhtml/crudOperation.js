var studentList={
    "id":1,
    showData(){
       
        var tbody = document.createElement("tbody")
        var trTag=document.createElement("tr");
        var tdId = document.createElement("td");
        var td1Tag = document.createElement("td");
        var td2Tag = document.createElement("td");
        var td3Tag = document.createElement("td");
        var td4Tag = document.createElement("td");
        var td5Tag = document.createElement("td");
        tdId.innerHTML=this.id;
        trTag.appendChild(tdId);
        td1Tag.innerHTML = this.name;
        trTag.appendChild(td1Tag)
        td2Tag.innerHTML = this.age;
        trTag.appendChild(td2Tag)
        td3Tag.innerHTML = this.gender;
        trTag.appendChild(td3Tag)
        td4Tag.innerHTML = this.loction;
        trTag.appendChild(td4Tag)
        // for(i in studentList){
        //     td5Tag.innerHTML=`<input type="button" value="Edit" onclick="edit(${this.id})"> <input type="button" value="Delete" onclick="remove(${this.id})">`;
        //     trTag.appendChild(td5Tag);
        // }
        td5Tag.innerHTML=`<input type="button" value="Edit" onclick="edit(${this.id})"> <input type="button" value="Delete" onclick="remove(${this.id})">`;
        trTag.appendChild(td5Tag);
        tbody.append(trTag)
        document.querySelector(".table").append(tbody)
        this.id+=1;
        console.log(tbody)
    },
    
};
var readData=()=>{
    studentList.name = document.querySelector("#sname").value;
    studentList.age = document.querySelector("#sage").value;
    studentList.gender = document.querySelector("input[name=gender]:checked").value;
    studentList.loction = document.querySelector("#loc").value;
    console.log(studentList)
    studentList.showData()
    document.querySelector("#sname").value = "";
    document.querySelector("#sage").value = "";
    document.querySelector("input[name=gender]:checked").value = "";
    // document.querySelector("#loc").value = "";
}
// var reset=()=>{
//     document.querySelector("#sname").value = "";
//     document.querySelector("#sage").value = "";
//     document.querySelector("input[name=gender]:checked").value = "";
//     document.querySelector("#loc").value = "";
// }
var edit=(id)=>{
    //alert(id)
    // for(var i=1;i<=studentList.length;i++)
    // {
    //     if(id===studentList.id)
    //     {
    //         console.log(studentList[i])
    //     }
    // }
    document.querySelector("#sname").value = stu
    document.querySelector("#sage").value = "";
    document.querySelector("input[name=gender]:checked").value = "";
    document.querySelector("#loc").value = "";
}
var remove=(id)=>{
    alert(id)
}
