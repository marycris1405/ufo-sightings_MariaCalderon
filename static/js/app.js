//import the data from data.js
const tableData= data;

//reference the HTML table using d3
var tbody= d3.select("tbody");

function buildTable(data){
    // First, clear out any existing data
    tbody.html("")
    // Next, loop through each object in the data
    // and append a row and cells for each value in
    data.forEach((dataRow)=>{
        //Append a row to the table body
        let row=tbody.append("tr");
        //Loop through each filed in the dataRow and 
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
            let cell= row.append("td");
            cell.text(val);
        });

    });
}

var filters={}

function updateFilters(){
    let filterValue= d3.select(this).property("value")
    let filterID= filterChange.attr("id")
    filter= input.value.toLowerCase();

    if(filterValue){
        filter[filterID]=filterValue
        }   
    else{
        delete filters[filterID]
    }
    filterTable(filters);
}

function filterTable(){
    console.log(filters)
    let filterData=tableData;

    Object.entries(filters).forEach(([keys,value])=>{
        filterData=filterData.filter(row=> row[keys]===value)
    });
    console.log(filterData);
}
// Attach an event to listen for the form button
d3.selectAll('#filter-btn').on("click", updateFilters);
// Build the table when the page loads
buildTable(tableData);


//function myFunction() {
    // Declare variables
//    var input, filter, table, tr, td, i, txtValue;
//    input = document.getElementById("myInput");
//    filter = input.value.toUpperCase();
//    table = document.getElementById("myTable");
//    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
//    for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//      if (td) {
//        txtValue = td.textContent || td.innerText;
//        if (txtValue.toUpperCase().indexOf(filter) > -1) {
//          tr[i].style.display = "";
//        } else {
//          tr[i].style.display = "none";
//        }
//      }
//    }
//  }