rangeInput=document.getElementById("range"),container=document.getElementsByClassName("containers")[0],window.onload=function(){var e=localStorage.getItem("filterValue"),t=localStorage.getItem("checkValue");e&&(container.style.filter=e,rangeInput.value=t)},rangeInput.addEventListener("change",(function(){container.style.filter="brightness("+rangeInput.value+"%)",localStorage.setItem("filterValue",container.style.filter),localStorage.setItem("checkValue",rangeInput.value)}));
//# sourceMappingURL=index.06acd8f1.js.map
