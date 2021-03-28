// from data.js
var tableData = data;

//HTML

var table = d3.select('table');
var tBody = table.select('tbody');
var filterBtn = d3.select('#filter-btn');

createTable(tableData, tableBody);

