// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');

var TableData = document.getElementsByTagName("td");




const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function (e) {
  pixelCanvas.innerHTML = '';
  e.preventDefault();
  makeGrid();
});
// color picker
pixelCanvas.addEventListener("click", GetTableData);

function GetTableData(e)
{
  console.log(e.target);
      e.target.style.backgroundColor = colorPicker.value;
}




// grid maker
function makeGrid() {
  for (let i = 0; i < rowsNumber.value; i++) {
    const row = pixelCanvas.insertRow(0);
    for (let j = 0; j < cellsNumber.value; j++) {
      row.insertCell(0);
    }
  }



}
