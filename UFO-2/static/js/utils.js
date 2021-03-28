

// create the table

var createTable = (data, tBody) => 
{
    
    data.forEach(ufo => 
    {
      let newRow = tBody.append('tr');
  
      Object.entries(ufo).forEach(([key, value]) => newRow.append('td').text(value.toString()));
    });
  };

// populate the table
var populate = (options, selectElement) => 
{
  selectElement
    .append('option')
    .attr('value', '')
    .text('');
  
  let sortedOptions = options.sort();
  
  sortedOptions.forEach(option =>
    selectElement
      .append('option')
      .attr('value', option)
      .text(option),
  );
};