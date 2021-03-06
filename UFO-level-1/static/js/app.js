// Create buildTable function
var tableData = data;
var tbody = d3.select("tbody");

function buildTable() {
    data.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
    });
})
};

// Build table from data
buildTable();

// Create showAll function clear filters
function showAll() {
    d3.event.preventDefault();

    //clear input values
    document.getElementById("datetime").value = "";

    //refresh table
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    };

};

// Select refresh button and form
// Assign buildTable function to refresh button
var buttonRefresh = d3.select("#refresh-btn");

buttonRefresh.on("click", showAll);

// Select Filter button
// Assign filterTable function to date button
var buttonFilter = d3.select("#filter-btn");
var form = d3.select("#form");

buttonFilter.on("click", filterTable);
form.on("submit", filterTable);

function filterTable() {
    d3.event.preventDefault();
        
    var inputElement, inputValue, table, tr, i;
    inputElement = d3.select("#datetime");
    inputValue = inputElement.property("value");
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        if (tr[i].style.display == "") {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerText === inputValue) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        };
    };
};



