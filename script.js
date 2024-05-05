
function initializeTitle() {
	const titleSpans = document.querySelectorAll('.title span');
	for (let titleSpan of titleSpans) {
		let temp = "";
		for (let letter of titleSpan.innerText) {
			temp += `<span class="title-letter" style="animation-delay: ${Math.random()*.5+.25}s">${letter}</span>`;
		}
		titleSpan.innerHTML = temp;
	}
	animateHeader();
}
let colors = ['red', 'purple', 'green'];
function animateHeader() {
	const titleSpans = document.querySelectorAll('.title span span');
	let randomSpan = titleSpans[Math.floor(Math.random()*titleSpans.length)];
	randomSpan.style.opacity = (Math.random()*.75+.25).toFixed(2);
	setTimeout(animateHeader, 20);
}
initializeTitle();