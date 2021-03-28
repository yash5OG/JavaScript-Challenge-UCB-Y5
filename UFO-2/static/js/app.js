// from data.js
var tableData = data;


var countries = [...new Set(tableData.map(td => td.country))];
var states = [...new Set(tableData.map(td => td.state))];
var shapes = [...new Set(tableData.map(td => td.shape))];
var cities = [...new Set(tableData.map(td => td.city))];

// HTML

var table = d3.select('table');
var tBody = table.select('tbody');
var filterBtn = d3.select('#filter-btn');


createTable(tableData, tBody);


let inputValues = 
{
    datetime: '',
    city: '',
    state: '',
    country: '',
    shape: '',
    comment: '',
};


var inputKeys = Object.keys(inputValues);


//setting attributes

d3.selectAll('select').each(function(d, i) 
{
    this.setAttribute('onfocus', 'this.size=10;');
    this.setAttribute('onblur', 'this.size=1;');
    this.setAttribute('onchange', 'this.size=1; this.blur();');
    this.setAttribute('style', 'height:auto;');
    this.setAttribute('class', 'form-control');
    this.setAttribute('id', inputKeys[i + 1]);
});

// targeting HTML elements 

var stateSelect = d3.select('#state');
var countrySelect = d3.select('#country');
var shapeSelect = d3.select('#shape');
var citySelect = d3.select('#city');

// Populate the tableData

populate(states, stateSelect);
populate(countries, countrySelect);
populate(shapes, shapeSelect);
populate(cities, citySelect);

// set name attributes

d3.selectAll('.form-control').each(function(d, i)
{
    this.setAttribute('name', inputKeys[i]);
});

// trigger function with change

d3.selectAll('.form-control').on('change', event => (inputValues[d3.event.target.name] = d3.event.target.value));

// Event listener 

filterBtn.on('click', () => 
{
    var filterValues = Object.values(inputValues);
    var tableRows = tBody.selectAll('tr');
    tableRows.each(function() 
    {
    let row = this;
    row.style.display = '';
    
    let td = row.getElementsByTagName('td');
    let tdArray = Array.from(td);
    
    tdArray.forEach(function(td, tdIndex) 
        {
            let cell = row.getElementsByTagName('td')[tdIndex];
            if (cell) 
            {
            if (filterValues[tdIndex]) 
                {
                if (row.style.display !== 'none' && cell.innerHTML.toUpperCase().indexOf(filterValues[tdIndex].toUpperCase()) > -1) 
                {
                    return;
                }
                row.style.display = 'none';
                }
            }
        });
    });
});