function getFile(file, callBack) {
    var myHttp = new XMLHttpRequest();
    myHttp.overrideMimeType("application/json")
    myHttp.open('GET', file, true)
    myHttp.onreadystatechange = function () {
        if (myHttp.readyState === 4 && myHttp.status == "200") {
            callBack(myHttp.responseText);
        }
    }
    myHttp.send(null)
}

getFile("dynamic.json", function (text) {
    var data = JSON.parse(text);
    console.log(data);
    getCardData(data.cardData)
    getAcademicData(data.academicData)
});

var cardDataDiv = document.querySelector(".card");

function getCardData(p) {
    var profilePic = document.createElement("img");
    profilePic.src = p.image;
    profilePic.alt = "Profile Pic";
    profilePic.width = 85;
    profilePic.height = 85;
    cardDataDiv.appendChild(profilePic);
    var name = document.createElement("h3");
    name.textContent = p.name;
    cardDataDiv.appendChild(name);
    var rollNo = document.createElement("p");
    rollNo.textContent = p.roll;
    cardDataDiv.appendChild(rollNo);
    var line = document.createElement("hr");
    cardDataDiv.appendChild(line);
    var college = document.createElement("p");
    college.textContent = p.institute;
    cardDataDiv.appendChild(college);
    var place = document.createElement("p");
    place.textContent = p.place;
    cardDataDiv.appendChild(place);
}

var academicDataDiv = document.querySelector(".obj");



function getAcademicData(p) {
    var heading = document.createElement("h2");
    heading.textContent = "Career Objectives:";
    academicDataDiv.appendChild(heading);
    var info = document.createElement("p");
    info.textContent = p.info;
    academicDataDiv.appendChild(info);
    var line = document.createElement("hr");
    academicDataDiv.appendChild(line);
    var heading = document.createElement("h3");
    heading.textContent = "Qualifications:";
    heading.style.color = "brown";
    academicDataDiv.append(heading);
    var dataTable = document.createElement("table");
    // dataTable.style.width = "100%";
    dataTable.setAttribute("border", "1");
    var row = "<tr><th>S. NO</th><th>Qualification</th><th>Institute</th><th>CGPA</th></tr>"
    dataTable.innerHTML = row;
    console.log(p.educationDetails.length)
    for (var i = 0; i < p.educationDetails.length; i++) {
        var tr2 = document.createElement("tr");
        currentRow = p.educationDetails[i];
        // for(var j = 0; j<currentRow.length; j++) {
        //     var tdata = document.createElement("td");

        // }
        tr2.innerHTML = "<td>" + currentRow.SNo + "</td><td>" + currentRow.qualification + "</td><td>" + currentRow.institute + "</td><td>" + currentRow.CGPA + "</td>"
        dataTable.append(tr2)

    }
    academicDataDiv.appendChild(dataTable);

    var heading = document.createElement("h3");
    heading.innerHTML = "Languages Known:";
    heading.style.color = "brown";
    academicDataDiv.appendChild(heading);

    var ulist = document.createElement("ul");
    for (var i = 0; i < p.languages.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = p.languages[i];
        ulist.appendChild(item);
    }
    academicDataDiv.appendChild(ulist);
    var heading = document.createElement("h3");
    heading.innerHTML = "Skills:";
    heading.style.color = "brown";
    academicDataDiv.appendChild(heading);

    var ulist = document.createElement("ul");
    for (var i = 0; i < p.skills.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = p.skills[i];
        ulist.appendChild(item);
    }
    academicDataDiv.appendChild(ulist);
}
