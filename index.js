var katzDeliLine = [];
var ticketNumber = 0;

function takeANumber(katzDeliLine, ticketNumber, nextTicket)
{
    
    if (ticketNumber++;
  
    nextTicket = ticketNumber + 1;
    katzDeliLine.push(nextTicket);
    
    
  }
  katzDeliLine.push(number);
  return ('Welcome, ' + person +'. You are number ' + katzDeliLine.length + ' in line.');
}

function nowServing(katzDeliLine, person)
{
  if (katzDeliLine.length === 0) //checks lengh of line
  
  {
    return ('There is nobody waiting to be served!')
  }
  
  else
  {
    var currentCustomer = katzDeliLine.shift()
    
    return ('Currently serving ' + currentCustomer + '.')
  }
  
  }
function currentLine(katzDeliLine)
{
  var currentLine = []; //created dynamic Array
  if (katzDeliLine.length === 0)
  {
    return ('The line is currently empty.')
  }
  else 
  {
    
    
  for(var i =0; i < katzDeliLine.length; i++)
    {
     
      currentLine.push(`${i+1}. ${katzDeliLine[i] }`)
    }
    return `The line is currently: ${ currentLine.join(', ') }`
  }
  
}