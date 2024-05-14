/**
 * Provides helper functions
 * @module helpers
 */

function getVariable(name) {
	return getComputedStyle(document.documentElement).getPropertyValue("--" + name).trim();
}
function setVariable(name, value) {
	document.documentElement.style.setProperty("--" + name, value);
}
function getElement(selector, context) {
	context = context || document;
	return context.querySelector(selector);
}
function getElements(selector, context) {
	context = context || document;
	return Array.prototype.slice.call(context.querySelectorAll(selector));
}
function uid() {
	return "id" + Math.random().toString(36).slice(2);
}
function clickAny(selector, callback) {
	getElements(selector).forEach(el => { el.addEventListener("click", ev => { callback(ev); }); });
}
function changeAny(selector, callback) {
	getElements(selector).forEach(el => { el.addEventListener("change", ev => { callback(ev); }); });
}
function inputAny(selector, callback) {
	getElements(selector).forEach(el => { el.addEventListener("input", ev => { callback(ev); }); });
}
function blurAny(selector, callback) {
	getElements(selector).forEach(el => { el.addEventListener("blur", ev => { callback(ev); }); });
}
function keyAny(callback) {
	document.addEventListener("keydown", ev => { callback(ev.key); });
}
function clipboardCopy(text) {
	// check if navigator.clipboard is supported
	if (!navigator.clipboard) {
		// if not, use the execCommand method
		const textArea = document.createElement("textarea");
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.style.top = "0";
		textArea.style.left = "0";
		textArea.style.position = "fixed";
		textArea.focus();
		textArea.select();
		document.execCommand("copy");
		document.body.removeChild(textArea);
	} else {
		navigator.clipboard.writeText(text);
	}
}

export { getVariable, setVariable, getElement, getElements, uid, clickAny, changeAny, inputAny, blurAny, keyAny, clipboardCopy };