// DARK MODE - LIGHT MODE

const html = document.querySelector("html"); 

html.classList.add("bg-dark");

// darkmode switch
document.querySelector("input").addEventListener("change", (event) => {
	bgSwitch(event);
});




const bgSwitch = (event) => {
  if (event.target.checked) {
		html.classList.add("bg-dark");
    logo2.classList.add("none");
    logo.classList.remove("none");
    hero2.classList.add("none");
    hero.classList.remove("none");
    map.classList.add("map");
    map.classList.remove("map2");
    logosRedesNegros2.classList.add("none");
    logosRedesNegros3.classList.add("none");
    logosRedesBlancos2.classList.remove("none");
    logosRedesBlancos3.classList.remove("none");
    logosRedesNegros5.classList.add("none");
    logosRedesNegros6.classList.add("none");
    logosRedesBlancos5.classList.remove("none");
    logosRedesBlancos6.classList.remove("none");
    logosRedesNegros8.classList.add("none");
    logosRedesNegros9.classList.add("none");
    logosRedesBlancos8.classList.remove("none");
    logosRedesBlancos9.classList.remove("none");
    logosRedesNegros11.classList.add("none");
    logosRedesNegros12.classList.add("none");
    logosRedesBlancos11.classList.remove("none");
    logosRedesBlancos12.classList.remove("none");
    imgLogoFooterBlanco.classList.add("none")
    imgLogoFooterNegro.classList.add("none")
    imgLogoFooterBlanco.classList.remove("none")
  	} else {
		html.classList.remove("bg-dark");
    logo2.classList.remove("none");
    logo.classList.add("none");
    hero2.classList.remove("none");
    hero.classList.add("none");
    map.classList.remove("map");
    map.classList.add("map2");
    logosRedesBlancos2.classList.add("none");
    logosRedesBlancos3.classList.add("none");
    logosRedesNegros2.classList.remove("none");
    logosRedesNegros3.classList.remove("none");
    logosRedesBlancos5.classList.add("none");
    logosRedesBlancos6.classList.add("none");
    logosRedesNegros5.classList.remove("none");
    logosRedesNegros6.classList.remove("none");
    logosRedesBlancos8.classList.add("none");
    logosRedesBlancos9.classList.add("none");
    logosRedesNegros8.classList.remove("none");
    logosRedesNegros9.classList.remove("none");
    logosRedesBlancos11.classList.add("none");
    logosRedesBlancos12.classList.add("none");
    logosRedesNegros11.classList.remove("none");
    logosRedesNegros12.classList.remove("none");
    imgLogoFooterNegro.classList.remove("none");
    imgLogoFooterBlanco.classList.add("none");


	}

}



