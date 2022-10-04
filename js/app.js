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

document.querySelector(".info__slider").querySelectorAll("li").forEach( (item) => {
	item.addEventListener("click", () => {
		document.querySelector("#avatar").style.backgroundImage = item.querySelector("span").style.backgroundImage;
	})
} )