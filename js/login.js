localStorage.clear();
let userName;
function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("user-name").value;
  // Displaying the value
  localStorage.setItem("user-name", inputVal)
}
userName =  localStorage.getItem( "user-name" );



export {userName}





