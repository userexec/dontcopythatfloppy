import { globals } from "./globals.mjs";
import { getElement, getElements } from "./helpers.mjs";

///////////////////////
// Init
///////////////////////

let lastMove = Date.now();

function init() {
	setInterval(() => {
		if (globals.reading.enablescreensaver && Date.now() - lastMove > globals.reading.screensavertimeout) {
			activateScreensaver();
		}
	}, globals.screensaverPollInterval);
}

///////////////////////
// Actions
///////////////////////

["mousemove", "keydown", "click", "scroll"].forEach(ev => {
	document.addEventListener(ev, function () {
		deactivateScreensaver();
		lastMove = Date.now();
	});
});
getElements(".action-test_screensaver").forEach(el => el.addEventListener("click", activateScreensaver));

///////////////////////
// Functions
///////////////////////

function activateScreensaver() {
	setTimeout(() => {
		getElement("#starfield").style.display = "block";
	}, 100);
}

function deactivateScreensaver() {
	getElement("#starfield").style.display = "none";
}

///////////////////////

export { init };