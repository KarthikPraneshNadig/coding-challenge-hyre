const target = Document.getElementsByClassName("target")
const error = Document.getElementByClassName("error")
const submit.addEventListener('click' assessNumber)

function assessNumber() {
  const number = Document.getElementsByClassName("submit").value
// get the value of the input with the class submit
  if (isNaN(number)) {
    let message = "please enter a number"
    document.getElementsByClassName('error').innerHTML = message
  }  else { 
    let message = `Please wait ${number} seconds `
    setTime()
    let message = 'finished processing'
    document.getElementsByClassName('target').innerHTML = message
  }
//     here is where we would call a set time out function for the number  
}

//   this would be an async function that calls setTimeout and would be asyncronious - another way to do it would be to set the please wait number seconds inner html in here too
function setTime() {
  return new Promise(res => {
    setTimeout(() => {
      res;
    }, 10000 );
  });
  
//   number varible goes in the spot where it says 10,000
