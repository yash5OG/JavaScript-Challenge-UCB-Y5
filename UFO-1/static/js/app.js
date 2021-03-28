// from data.js
var tableData = data;

//HTML

var table = d3.select('table');
var tBody = table.select('tbody');
var filterBtn = d3.select('#filter-btn');

createTable(tableData, tBody);

// state for input values
let inputValues = {
    datetime: '',
  };
  
  //set attributes with key elements

  var inputKeys = Object.keys(inputValues);
  
  
  d3.selectAll('.form-control').each(function(d, i) {
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