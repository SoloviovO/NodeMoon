rangeInput = document.getElementById('range');
container = document.getElementsByClassName('containers')[0];

window.onload = function () {
  const filterValue = localStorage.getItem('filterValue');
  const checkedValue = localStorage.getItem('checkValue');
  if (filterValue) {
    container.style.filter = filterValue;
    rangeInput.value = checkedValue;
  }
};

rangeInput.addEventListener('change', function () {
  container.style.filter = 'brightness(' + rangeInput.value + '%)';
  // container.style.filter = filterValue;
  localStorage.setItem('filterValue', container.style.filter);
  localStorage.setItem('checkValue', rangeInput.value);
});
