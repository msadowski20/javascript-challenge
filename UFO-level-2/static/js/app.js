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
    var $rows = $('#ufo-table tr');
    $rows.style.display = "none";
};

// Select refresh button and form
// Assign buildTable function to refresh button
var buttonRefresh = d3.select("#refresh-btn");
var formRefresh = d3.select("#form-refresh");

buttonRefresh.on("click", showAll);
formRefresh.on("submit", showAll);

// Select Date button
// Assign filterDate function to date button
var buttonDate = d3.select("#datetime-btn");
var formDate = d3.select("#form-date");

buttonDate.on("click", filterDate);
formDate.on("submit", filterDate);

function filterDate() {
    d3.event.preventDefault();

    var inputElement, inputValue, table, tr, i;
    inputElement = d3.select("#datetime");
    inputValue = inputElement.property("value");
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
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

// Select City button
// Assign filterCity function to date button
var buttonCity = d3.select("#city-btn");
var formCity = d3.select("#form-city");

buttonCity.on("click", filterCity);
formCity.on("submit", filterCity);

function filterCity() {
    d3.event.preventDefault();

    var inputElement, inputValue, table, tr, i;
    inputElement = d3.select("#city");
    inputValue = inputElement.property("value");
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerText === inputValue) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
};

// Select State button
// Assign filterState function to date button
var buttonState = d3.select("#state-btn");
var formState = d3.select("#form-state");

buttonState.on("click", filterState);
formState.on("submit", filterState);

function filterState() {
    d3.event.preventDefault();

    var inputElement, inputValue, table, tr, i;
    inputElement = d3.select("#state");
    inputValue = inputElement.property("value");
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerText === inputValue) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
};

// Select Country button
// Assign filterCountry function to date button
var buttonCountry = d3.select("#country-btn");
var formCountry = d3.select("#form-country");

buttonCountry.on("click", filterCountry);
formCountry.on("submit", filterCountry);

function filterCountry() {
    d3.event.preventDefault();

    var inputElement, inputValue, table, tr, i;
    inputElement = d3.select("#country");
    inputValue = inputElement.property("value");
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerText === inputValue) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
};

// Select Shape button
// Assign filterShape function to date button
var buttonShape = d3.select("#shape-btn");
var formShape = d3.select("#form-shape");

buttonShape.on("click", filterShape);
formShape.on("submit", filterShape);

function filterShape() {
    d3.event.preventDefault();

    var inputElement, inputValue, table, tr, i;
    inputElement = d3.select("#shape");
    inputValue = inputElement.property("value");
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            if (td.innerText === inputValue) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    };
};

