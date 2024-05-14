import { clickAny } from "./helpers.mjs";

///////////////////////
// Init
///////////////////////
function init() {}

///////////////////////
// Actions
///////////////////////

clickAny(".action-back_to_top", () => { window.scrollTo({ top: 0 }); })

///////////////////////

export { init };