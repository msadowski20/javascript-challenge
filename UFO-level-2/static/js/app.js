var tableData, tbody;
tableData = data;
tbody = d3.select("tbody");

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button, form;
button = d3.select("#filter-btn");
form = d3.select("#form");

button.on("click", filterTable);
form.on("submit", filterTable);


// var form = document.getElementById("form");
// var inputId = form.getElementsByTagName("input");
// for (i = 0; i < inputId.length; i++) {
//     var inputArray = []
//     inputArray.push(this.id);
// };


function filterTable() {
    d3.event.preventDefault();

    var form, inputId;
    form = document.getElementById("form");
    inputId = form.getElementsByTagName("input");

    for (var i = 0; i < inputId.length; i++) {

        var inputElement, inputValue, table, tr;
        inputElement = d3.select(this.id);
        inputValue = inputElement.property("value");
        table = document.getElementById("ufo-table");
        tr = table.getElementsByTagName("tr");

        for (var j = 0; j < tr.length; j++) {
            td = tr[j].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerText === inputValue) {
                    tr[JSON].style.display = "";
                } else {
                    tr[j].style.display = "none";
                }
            }
        }

        var filteredSightings = tableData.filter(sighting => sighting.datetime === inputValue);
        console.log(filteredSightings);
    }
};

