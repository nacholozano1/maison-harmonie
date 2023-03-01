// DARK MODE - LIGHT MODE

const html = document.querySelector("html"); 

html.classList.add("bg-dark");

// darkmode switch
document.getElementById("inputi").addEventListener("change", (event) => {
	bgSwitch(event);
});




const bgSwitch = (event) => {
  if (event.target.checked) {
		html.classList.add("bg-dark");
    logo2.classList.add("none");
    logo.classList.remove("none");
    logosRedesNegross2.classList.add("none");
    logosRedesNegross3.classList.add("none");
    logosRedesBlancoss2.classList.remove("none");
    logosRedesBlancoss3.classList.remove("none");
    imgLogoFooterBlanco.classList.add("none")
    imgLogoFooterNegro.classList.add("none")
    imgLogoFooterBlanco.classList.remove("none")
  	} else {
		html.classList.remove("bg-dark");
    logo2.classList.remove("none");
    logo.classList.add("none");
    logosRedesBlancoss2.classList.add("none");
    logosRedesBlancoss3.classList.add("none");
    logosRedesNegross2.classList.remove("none");
    logosRedesNegross3.classList.remove("none");
    imgLogoFooterNegro.classList.remove("none");
    imgLogoFooterBlanco.classList.add("none");


	}

}