/**
 * Provides functions for the color settings dialog
 * @module colorsettings
 */

import { getElement, setVariable, clickAny, changeAny, clipboardCopy } from "./helpers.mjs";
import { globals } from "./globals.mjs";

///////////////////////
// Init
///////////////////////

function init() {
	// load the theme the user last set
	loadSetTheme();
	// load any user-defined themes
	loadUserThemes();
	// define a themeKeys array for quick lookup and alphabetical ordering
	generateThemeKeys();
	// populate the theme switcher
	populateThemeSwitcher();
	// load the current theme
	loadColorTheme();
	// remove the color-theme-loading class from body
	document.body.classList.remove("color-theme-loading");
}

///////////////////////
// Local variables
///////////////////////

// DOM elements
const elements = {
	switcher: getElement("#w31-theme-switcher"),
	name: getElement(".w31-window.color-settings input[name=themename]"),
	saveForm: getElement(".w31-window.color-settings form[name=savetheme]"),
	saveInput: getElement(".w31-window.color-settings form[name=savetheme] input[type=text]"),
	saveButton: getElement(".w31-window.color-settings form[name=savetheme] input[type=submit]"),
	deleteButton: getElement(".w31-window.color-settings input.action-delete_theme"),
	importForm: getElement(".w31-window.color-settings form[name=importtheme]"),
	importInput: getElement(".w31-window.color-settings form[name=importtheme] input[type=text]"),
	importButton: getElement(".w31-window.color-settings form[name=importtheme] input[type=submit]"),
	copyButton: getElement(".w31-window.color-settings input.action-copy_theme")
}

///////////////////////
// Actions
///////////////////////

// Click actions
clickAny(".action-color_settings", openColorSettings);
clickAny(".action-exit_color_settings", () => getElement("#color-settings").classList.remove("active"));
clickAny(".action-save_theme", saveUserTheme);
clickAny(".action-next_theme", nextColorTheme);
clickAny(".action-delete_theme", deleteUserTheme);
elements.saveForm.addEventListener("submit", ev => {
	ev.preventDefault();
	saveUserTheme();
});
clickAny(".action-copy_theme", copyTheme);
elements.importForm.addEventListener("submit", ev => {
	ev.preventDefault();
	importTheme();
});

// Change actions
changeAny("#w31-theme-switcher", () => {
	globals.theme = elements.switcher.value;
	loadColorTheme();
});
changeAny("#w31-color-fields input", ev => updateColor(ev));

// clear importInput and saveImport on document ready
document.addEventListener("DOMContentLoaded", () => {
	elements.importInput.value = "";
	elements.saveInput.value = "";
});

///////////////////////
// Functions
///////////////////////

/**
 * Open color settings dialog
 * @function openColorSettings
 */
function openColorSettings() {
	getElement("#color-settings").classList.add("active");
	
	// if the window overhangs the viewport to the right or bottom, maximize it and disable the restore button
	let win = getElement("#color-settings");
	let winRect = win.getBoundingClientRect();
	if (winRect.right > window.innerWidth || winRect.bottom > window.innerHeight) {
		win.classList.add("maximized");
		getElement(".w31-maximize", win).style.display = "none";
		getElement(".w31-restore", win).style.display = "inline-block";
		getElement(".w31-restore", win).classList.remove("w31-available");
	}
}

/**
 * Generate theme keys
 * @function generateThemeKeys
 */
function generateThemeKeys() {
	globals.themeKeys = Object.keys(globals.themes).sort();
}

/**
 * Populate the theme switcher
 * @function populateThemeSwitcher
 */
function populateThemeSwitcher() {
	elements.switcher.innerHTML = "";
	for (let theme of globals.themeKeys) {
		let option = document.createElement("option");
		option.value = theme;
		option.textContent = globals.themes[theme].name;
		elements.switcher.appendChild(option);
	}
	// select the currently selected theme from globals.theme
	elements.switcher.value = globals.theme;
}

/**
 * Load the name of the theme the user last set if available
 * @function loadSetTheme
 */
function loadSetTheme() {
	if (!!localStorage.getItem("theme")) {
		globals.theme = localStorage.getItem("theme");
	} else {
		globals.theme = "jw";
	}
}

/**
 * Load any user-defined color themes into globals on startup
 * @function loadUserThemes
 */
function loadUserThemes() {
	if (!!localStorage.getItem("themes")) {
		let userThemes = JSON.parse(localStorage.getItem("themes"));
		// merge userThemes object with globals.themes object
		for (let theme in userThemes) {
			globals.themes[theme] = userThemes[theme];
		}
		// update the themeKeys array
		globals.themeKeys = Object.keys(globals.themes).sort();
	}
}

/**
 * Save the current user themes to localStorage
 * @function saveUserThemes
 */
function saveUserTheme() {
	// create a new object to store the user theme
	let userTheme = {};
	for (let key in globals.themes.hotdogstand) {
		if (getElement(".w31-window.color-settings input[name=" + key + "]") === null) continue;
		userTheme[key] = getElement(".w31-window.color-settings input[name=" + key + "]").value;
	}
	userTheme.name = elements.saveInput.value;
	userTheme.builtin = false;

	// Get the current user themes from localStorage and add the new theme to them
	let currentThemes = localStorage.getItem("colorThemes");
	if (currentThemes) {
		currentThemes = JSON.parse(currentThemes);
	} else {
		currentThemes = {};
	}
	currentThemes[userTheme.name] = userTheme;

	// Save the updated user themes back to localStorage
	localStorage.setItem("themes", JSON.stringify(currentThemes));

	// set the theme as the current global theme
	globals.theme = userTheme.name;

	elements.saveInput.value = "";

	loadUserThemes();
	loadColorTheme();
}

/**
 * Copy the current theme to a JSON string
 * @function copyTheme
 */
function copyTheme() {
	let theme = globals.themes[globals.theme];
	let themeString = JSON.stringify(theme);
	clipboardCopy(themeString);
}

/**
 * Import a theme from a JSON string
 * @function importTheme
 */
function importTheme() {
	let json;
	try {
		json = JSON.parse(elements.importInput.value);
	} catch (e) { return; }
	
	// if the theme is a builtin theme, don't allow import
	if (json.builtin) return;

	// ensure theme has all the necessary properties by comparing it to the best theme, hotdog stand
	let theme = {};
	for (let rule in globals.themes.hotdogstand) {
		// if a rule is missing, don't allow import
		if (!json.hasOwnProperty(rule)) return;
		// if a rule doesn't match the type found in hotdog stand, don't allow import
		if (typeof json[rule] !== typeof globals.themes.hotdogstand[rule]) return;
		// if a rule other than "name" and "builtin" is not a valid color, don't allow import
		if (rule !== "name" && rule !== "builtin" && !json[rule].match(/^#[0-9a-f]{6}$/i)) return;
		// okay, it's probably cool and they're only breaking their own computer anyway
		theme[rule] = json[rule];
	}

	// Get the current user themes from localStorage
	let currentThemes = JSON.parse(localStorage.getItem("themes"));

	// add the new theme to the user themes
	currentThemes[theme.name] = theme;

	// Save the updated user themes back to localStorage
	localStorage.setItem("themes", JSON.stringify(currentThemes));

	// load the user themes into globals
	loadUserThemes();
	generateThemeKeys();
	populateThemeSwitcher();

	// switch to the imported theme
	globals.theme = theme.name;
	loadColorTheme();
}

/**
 * Delete the current user theme from localStorage
 */
function deleteUserTheme() {
	// if the theme is a builtin theme, don't allow deletion
	if (globals.themes[globals.theme].builtin) return;

	// Get the current user themes from localStorage
	let currentThemes = JSON.parse(localStorage.getItem("themes"));

	// delete the current theme from the user themes
	delete currentThemes[globals.theme];

	// Save the updated user themes back to localStorage
	localStorage.setItem("themes", JSON.stringify(currentThemes));

	// delete all non-builtin themes from globals
	for (let theme in globals.themes) {
		if (!globals.themes[theme].builtin) delete globals.themes[theme];
	}

	// load the user themes into globals
	loadUserThemes();
	generateThemeKeys();
	populateThemeSwitcher();

	// switch back to the jw theme
	globals.theme = "jw";
	loadColorTheme();
}

/**
 * Loads the color theme for editing in the Color Settings dialog
 * @function loadColorTheme
 */
function loadColorTheme() {
	// if a custom theme exists but it has not been selected, remove the custom theme
	if (globals.theme !== "custom" && globals.themes.hasOwnProperty("custom")) {
		decommissionCustomTheme();
	}

	// ensure the theme is set in the switcher
	elements.switcher.value = globals.theme;

	// load the colors into the pickers
	for (let rule in globals.themes[globals.theme]) {
		let input = getElement(".w31-window.color-settings input[name=" + rule + "]");
		if (!!input) input.value = globals.themes[globals.theme][rule];
	}

	// load the colors into the CSS variables
	for (let rule in globals.themes[globals.theme]) {
		setVariable(rule, globals.themes[globals.theme][rule]);
	}

	// save the set theme to localStorage (unless theme is "custom")
	if (globals.theme !== "custom") localStorage.setItem("theme", globals.theme);

	// enable the save buttons if custom theme, disable if not
	if (globals.themes[globals.theme].builtin) {
		elements.saveInput.disabled = true;
		elements.saveButton.disabled = true;
		elements.deleteButton.disabled = true;
	} else {
		elements.saveInput.disabled = false;
		elements.saveButton.disabled = false;
		elements.deleteButton.disabled = false;
	}

	// disable the copy button if it's a custom unsaved theme
	if (globals.theme === "custom") {
		elements.copyButton.disabled = true;
	} else {
		elements.copyButton.disabled = false;
	}
}

/**
 * Cycles to the next color theme available
 * @function nextColorTheme
 */
function nextColorTheme() {
	let current = globals.themeKeys.indexOf(globals.theme);
	let next = current + 1;
	if (next >= globals.themeKeys.length) next = 0;
	globals.theme = globals.themeKeys[next];
	loadColorTheme();
}

/**
 * Decommission the custom theme when user switches to a preset one
 * @function decommissionCustomTheme
 */
function decommissionCustomTheme() {
	// record the selected theme
	let selectedTheme = globals.theme;

	// delete the custom theme from globals.themes
	delete globals.themes.custom;
	generateThemeKeys();
	populateThemeSwitcher();

	// reselect the theme in the switcher
	elements.switcher.value = selectedTheme;
}

function initializeCustomTheme(changedRule, changedColor) {
	if (!globals.themes.hasOwnProperty("custom")) {
		globals.themes.custom = {};
		// copy the current theme into globals.themes.custom
		for (let rule in globals.themes[globals.theme]) {
			// don't copy over the value they just changed
			if (rule === changedRule) {
				globals.themes.custom[rule] = changedColor;
				continue;
			}
			// do copy over the rest of them
			globals.themes.custom[rule] = globals.themes[globals.theme][rule];
		}
		globals.themes.custom.name = "Customizing...";
		globals.themes.custom.builtin = false;
		globals.theme = "custom";

		// turn off the copy button until we're working with a saved theme
		elements.copyButton.disabled = true;

		generateThemeKeys();
		populateThemeSwitcher();
		loadColorTheme();
	}
}

/**
 * Updates a color variable in the globals.themes object
 * @function updateColor
 */
function updateColor(ev) {
	let input = ev.target;
	let rule = input.name;
	let color = input.value;

	initializeCustomTheme(rule, color);

	globals.themes[globals.theme][rule] = color;
	setVariable(rule, color);
}

///////////////////////

export { init };