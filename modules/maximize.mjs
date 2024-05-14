import { getElement, clickAny } from "./helpers.mjs";

///////////////////////
// Init
///////////////////////

let returnScrollPosition = 0;

function init() {}

///////////////////////
// Actions
///////////////////////

clickAny(".w31-maximize.w31-available", ev => maximize(ev));
clickAny(".w31-restore.w31-available", ev => restore(ev));

///////////////////////
// Functions
///////////////////////

function maximize(ev) {
	let button = ev.target;

	// ensure button still has w31-available class
	if (!button.classList.contains("w31-available")) return;

	// save the scroll position before maximizing
	returnScrollPosition = window.scrollY;
	window.scrollTo({ top: 0 });

	// add maximized classes and swap maximize button for restore button
	let win = button.closest(".w31-window");
	win.classList.add("maximized");
	document.body.classList.add("maximized");
	getElement(".w31-maximize", win).style.display = "none";
	getElement(".w31-restore", win).style.display = "inline-block";
}

function restore(ev) {
	let button = ev.target;
	
	// ensure button still has w31-available class
	if (!button.classList.contains("w31-available")) return;

	// restore the scroll position
	window.scrollTo({ top: returnScrollPosition });

	// remove maximized classes and swap restore button for maximize button
	let win = button.closest(".w31-window");
	win.classList.remove("maximized");
	document.body.classList.remove("maximized");
	getElement(".w31-maximize", win).style.display = "inline-block";
	getElement(".w31-restore", win).style.display = "none";
}

///////////////////////

export { init };