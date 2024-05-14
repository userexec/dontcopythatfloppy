import { globals } from "./globals.mjs";
import { getElements, getElement, clickAny, blurAny, uid, keyAny, clipboardCopy } from "./helpers.mjs";

///////////////////////
// Init
///////////////////////

function init() {
	// Record minimization settings for each window
	getElements(".w31-menu").forEach(menu => {
		let window = menu.closest(".w31-window");
		let minimizeButton = getElement(".w31-minimize", window);

		// Set data-minimize-available to true if the window can be minimized
		menu.setAttribute("data-minimize-available", "false");
		if (minimizeButton) {
			if (minimizeButton.classList.contains("w31-available")) menu.setAttribute("data-minimize-available", "true");
		}

		// Provide a spot for some timing data to help determine single vs double clicks
		menu.setAttribute("data-last-clicked", "0");
		menu.setAttribute("data-last-closed", "0");
	});

	// Populate headings into post menus
	getElements(".w31-window.post").forEach(post => { populateHeadings(post); });
}

///////////////////////
// Actions
///////////////////////

clickAny(".w31-menu", ev => determineClickIntent(ev));
blurAny(".w31-menu", ev => handleBlur(ev));
clickAny(".action-copy_url", ev => clipboardCopy(ev.target.getAttribute("data-url")));
keyAny(key => determineKeyIntent(key));

///////////////////////
// Functions
///////////////////////

function determineKeyIntent(key) {
	// if the key is in an input field, ignore it
	if (document.activeElement.tagName === "INPUT") return;

	// get the foregrounded window
	let window = getElement(".w31-window.foreground");
	if (!window) return;

	// get the menu bar if any
	let menuBar = getElement(".w31-menubar", window);

	// get the active menu if any
	let menu = getElement(".w31-menu.w31-active", window);

	let shortcutItems = menu ? getElements("li", menu) : getElements("div", menuBar);

	for (let shortcutItem of shortcutItems) {
		let shortcut = getElement("span", shortcutItem).textContent;
		if (!shortcut) continue;
		if (key.toLowerCase() === shortcut.toLowerCase()) {
			shortcutItem.click();
			if (menu) menu.classList.remove("w31-active");
			break;
		}
	}
}

function determineClickIntent(ev) {
	if (
			!ev.target.classList.contains("w31-menu") && // If this click was NOT on the menu box...
			!(!!ev.target.offsetParent && ev.target.offsetParent.classList.contains("w31-menu")) // AND it was not on a direct descendent of the menu box...
		) return; // then return--it was on a dropdown option.
	
	// find the element with class .w31-menu
	let menu = ev.target.classList.contains("w31-menu") ? ev.target : ev.target.offsetParent;

	// If the window doesn't have the ability to minimize/close, then single click is the only option - open the dropdown
	if (menu.getAttribute("data-minimize-available") === "false") {
		dropdown(menu);
		return;
	}
	
	// If the window can be minimized, then we need to determine if the click is a single or double click
	let now = Date.now();
	let doubleClick = now - parseInt(menu.getAttribute("data-last-clicked")) < globals.doubleClickThreshold;

	if (doubleClick) {
		menu.setAttribute("data-last-closed", now);
		minimize(menu);
	} else {
		setTimeout(() => {
			if (now - parseInt(menu.getAttribute("data-last-closed")) < globals.doubleClickThreshold) return; // ignore first click's effect if a double click was recently performed
			dropdown(menu);
		}, globals.doubleClickThreshold);
	}

	menu.setAttribute("data-last-clicked", now);
}

function minimize(menu) {
	let now = Date.now();
	let window = menu.closest(".w31-window");
	let minimizeButton = getElement(".w31-minimize", window);
	minimizeButton.click();
	menu.classList.remove("w31-active");
	menu.setAttribute("data-last-closed", now);
}

function dropdown(menu) {
	menu.classList.toggle("w31-active");
}

function handleBlur(ev) {
	// the blur may be caused by clicking on a dropdown option, so we need to check if the relatedTarget is inside of a .w31-dropdown
	if (!!ev.relatedTarget) {
		ev.preventDefault();
		// if the relatedTarget is inside of a .w31-dropdown, click it
		if (!!ev.relatedTarget.closest(".w31-dropdown")) ev.relatedTarget.click();
	}
	ev.target.classList.remove("w31-active");
}

function populateHeadings(post) {
	let hrs = getElements("hr", getElement(".w31-dropdown", post));
	let menuPosition = hrs[hrs.length - 1];

	getElements("h2", post).forEach(h2 => {
		let id = h2.id;
		if (!id) h2.id = id = uid();
		let li = document.createElement("li");
		let link = document.createElement("a");
		link.href = "#" + id;
		link.textContent = h2.textContent;
		li.appendChild(link);
		menuPosition.parentNode.insertBefore(li, menuPosition);
	});
}

///////////////////////
// Individual Window Actions
///////////////////////

if (getElement(".w31-window.posts")) {
	clickAny(".action-posts", () => {
		getElement(".w31-window.posts .w31-scroller.categories").style.display = "none";
		getElement(".w31-window.posts .w31-scroller.posts").style.display = "block";
	});
	clickAny(".action-categories", () => {
		getElement(".w31-window.posts .w31-scroller.posts").style.display = "none";
		getElement(".w31-window.posts .w31-scroller.categories").style.display = "block";
	});
}

///////////////////////

export { init };