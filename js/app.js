/*
* lang — Ru
* author — NiktoX2
* — https://vk.com/niktox2
* team — Lost Summer Time
* — https://vk.com/lost.summer.time
*
*
*/

window.ondragstart = () => { return false };

document.querySelectorAll(".info__slider li").forEach( (item) => {
	item.addEventListener("click", () => {
		document.querySelector("#avatar").style.backgroundImage = item.querySelector("span").style.backgroundImage;
	})
})
/*
document.addEventListener("contextmenu", (e) => {
	document.getElementById("contextmenu").style.left = `${e.pageX}px`;
	document.getElementById("contextmenu").style.top = `${e.pageY}px`;

	document.getElementById("contextmenu").classList.toggle("hide");

	e.preventDefault();
}, false);
*/