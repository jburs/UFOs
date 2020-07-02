// import the data from data.js
const tableData = data;

// Reference the HTML table using d3  Data-Driven Documents (D3 for short)
// d3 JavaScript library that adds interactive functionality to a table 
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing table data using empty string definition
    tbody.html("");

    // loop through each obj in array, append a row to HTML table, add each value from the obj into a cell
	data.forEach((dataRow) => {
        // tr = table row ; append row to table body (key and value)
        let row = tbody.append("tr")

        // takes each sighting (value) from the object data, forEach(val)
        // put each sighting onto its own row of data
        Object.values(dataRow).forEach((val) => {
            //set up the action of appending data into a table data tag (<td>).
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

function handleClick() {
    // finds value of where date values are stored
    let data = d3.select("#datetime").property("value");
    //default filter
    let filteredData = tableData;

    // check for date entered, filter the data using date
    if (date) {
        // filter data keeping only matching filter values
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filtered data
    buildTable(filteredData);

};

// selector string ("#filter-btn") contains the id for another HTML tag
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when page loads
buildTable(tableData);


