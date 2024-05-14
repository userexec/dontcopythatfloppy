/**
 * Allows windows to be brought forward when clicked on.
 * @module foreground
 */

import { getElement, getElements, getVariable, setVariable, clickAny, changeAny } from "./helpers.mjs";
import { globals } from "./globals.mjs";

///////////////////////
// Init
///////////////////////

function init() {}

///////////////////////
// Actions
///////////////////////

clickAny(".w31-window", ev => {
	// find the window that was clicked on
	let win = ev.target.closest(".w31-window");
	if (!win) return;
	foreground(win);
});
clickAny(".action-reading_settings", () => foreground(getElement("#reading-settings")));
clickAny(".action-color_settings", () => foreground(getElement("#color-settings")));
clickAny(".action-exit_reading_settings", () => setTimeout(findForeground, 10));
clickAny(".action-exit_color_settings", () => setTimeout(findForeground, 10));

// on scroll, find the first visible window and foreground it
window.addEventListener("scroll", findForeground);

///////////////////////
// Functions
///////////////////////

function foreground(win) {
	// if a floating window is active and this is not a floating window, ignore the foreground request
	if (getElements(".floating.active").length > 0 && !win.classList.contains("floating")) return;

	// remove the last-foregrounded class from all windows
	getElements(".last-foregrounded").forEach(w => w.classList.remove("last-foregrounded"));

	// remove the foreground class from all windows
	getElements(".foreground").forEach((fgwin) => {
		fgwin.classList.remove("foreground");

		// if the foregrounded window was floating, give it the last-foregrounded class
		if (fgwin.classList.contains("floating")) fgwin.classList.add("last-foregrounded");
	});

	// add the foreground class to the clicked window
	win.classList.add("foreground");
}

// find first visible non-floating .w31-window in viewport
function findForeground() {
	let win = getElements(".w31-window").find(w => {
		if (w.classList.contains("floating")) return false;
		let rect = w.getBoundingClientRect();
		return rect.top >= 0 || rect.top < 0 && rect.bottom - window.innerHeight > 0; // if the top is visible, or if the window takes up the full viewport...
	});

	// if no non-floating window is in the activation area, ignore
	if (!win) return;

	let activeFloating = getElements(".floating.active");
	// if a floating window is active and foregrounded, do nothing
	if (activeFloating.length > 0 && activeFloating[0].classList.contains("foreground")) return;
	// if a floating window is active but not foregrounded, foreground it
	if (activeFloating.length > 0) foreground(activeFloating[0]);
	// if there is no active floating window, foreground the found window
	if (activeFloating.length === 0) foreground(win);
}
findForeground();

///////////////////////

export { init };