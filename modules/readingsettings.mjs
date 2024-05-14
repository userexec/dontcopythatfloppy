/**
 * Provides functions for the color settings dialog
 * @module colorsettings
 */

import { getElement, setVariable, clickAny, changeAny, inputAny } from "./helpers.mjs";
import { globals } from "./globals.mjs";

///////////////////////
// Init
///////////////////////

function init() {
	loadReadingSettings();
	applyReadingSettings();
}

///////////////////////
// Local variables
///////////////////////

// DOM elements
const elements = {}

///////////////////////
// Actions
///////////////////////

// Click actions
clickAny(".action-reading_settings", openReadingSettings);
clickAny(".action-exit_reading_settings", () => getElement("#reading-settings").classList.remove("active"));
changeAny("#reading-settings select", () => { updateReadingSettings(); });
inputAny("#reading-settings input[type=number]", () => { updateReadingSettings(); });
clickAny(".action-reset_reading_settings", () => { resetReadingSettings(); });

///////////////////////
// Functions
///////////////////////

/**
 * Open reading settings dialog
 * @function openReadingSettings
 */
function openReadingSettings() {
	getElement("#reading-settings").classList.add("active");
	
	// if the window overhangs the viewport to the right or bottom, maximize it and disable the restore button
	let win = getElement("#reading-settings");
	let winRect = win.getBoundingClientRect();
	if (winRect.right > window.innerWidth || winRect.bottom > window.innerHeight) {
		win.classList.add("maximized");
		getElement(".w31-maximize", win).style.display = "none";
		getElement(".w31-restore", win).style.display = "inline-block";
		getElement(".w31-restore", win).classList.remove("w31-available");
	}
}

function loadReadingSettings() {
	if (!!localStorage.getItem("reading")) {
		let userReading = JSON.parse(localStorage.getItem("reading"));
		
		for (let prop in userReading) {
			if (!globals.reading.hasOwnProperty(prop)) return;
			globals.reading[prop] = userReading[prop];
		}
	}
	populateReadingSettingsInputs();
}

function saveReadingSettings() {
	localStorage.setItem("reading", JSON.stringify(globals.reading));
}

function resetReadingSettings() {
	localStorage.removeItem("reading");
	globals.reading = {
		linelength: "55rem",
		linelengthmax: "110rem",
		lineheight: "1.8em",
		paragraphspacing: "1.1em",
		fontfamily: '"Arial", sans-serif',
		fontsize: "1.2rem",
		screensaverdelay: 600000,
		enablescreensaver: true
	};

	populateReadingSettingsInputs();
	applyReadingSettings();
}

function populateReadingSettingsInputs() {
	getElement("#reading-settings input[name='linelength']").value = parseInt(globals.reading.linelength.replace("rem", ""));
	getElement("#reading-settings input[name='linelengthmax']").value = parseInt(globals.reading.linelengthmax.replace("rem", ""));
	getElement("#reading-settings input[name='lineheight']").value = parseFloat(globals.reading.lineheight.replace("em", ""));
	getElement("#reading-settings input[name='paragraphspacing']").value = parseFloat(globals.reading.paragraphspacing.replace("em", ""));
	getElement("#reading-settings select[name='fontfamily']").value = globals.reading.fontfamily.replace(/"/g, "").replace(/, sans-serif/g, "");
	getElement("#reading-settings input[name='fontsize']").value = parseFloat(globals.reading.fontsize.replace("rem", ""));

	getElement("#reading-settings input[name='enablescreensaver']").checked = globals.reading.enablescreensaver;
	getElement("#reading-settings input[name='screensaverdelay']").value = globals.reading.screensaverdelay / 60000;
}

function updateReadingSettings() {
	console.log("update reading settings");
	globals.reading.linelength = getElement("#reading-settings input[name='linelength']").value + "rem";
	globals.reading.linelengthmax = getElement("#reading-settings input[name='linelengthmax']").value + "rem";
	globals.reading.lineheight = getElement("#reading-settings input[name='lineheight']").value + "em";
	globals.reading.paragraphspacing = getElement("#reading-settings input[name='paragraphspacing']").value + "em";
	globals.reading.fontfamily = `"${getElement("#reading-settings select[name='fontfamily']").value}", sans-serif`;
	globals.reading.fontsize = getElement("#reading-settings input[name='fontsize']").value + "rem";

	globals.reading.enablescreensaver = getElement("#reading-settings input[name='enablescreensaver']").checked;
	globals.reading.screensavertimeout = getElement("#reading-settings input[name='screensaverdelay']").value * 60000;

	saveReadingSettings();
	applyReadingSettings();
}

function applyReadingSettings() {
	for (let prop in globals.reading) {
		if (prop === "enablescreensaver") continue;
		if (prop === "screensaverdelay") continue;
		setVariable(prop, globals.reading[prop]);
	}
}

///////////////////////

export { init };