

// populate the table

var createTable = (data, tBody) => 
{
    
    data.forEach(ufo => 
    {
      let newRow = tBody.append('tr');
  
      Object.entries(ufo).forEach(([key, value]) => newRow.append('td').text(value.toString()));
    });
  };