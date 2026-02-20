import { mostHolyFish, soldierFish, regularFish, renderFishToDOM } from './fishList.js';
import { tipList, renderTipToDOM } from './tipList.js';
import { locationList, renderLocationToDOM } from './locationList.js';

// Generate the HTML strings
const holyHTML = mostHolyFish();
const soldierHTML = soldierFish();
const regularHTML = regularFish();
const tipHTML = tipList();
const locationHTML = locationList();

// Render to DOM
renderFishToDOM(`${holyHTML}${soldierHTML}${regularHTML}`);
renderTipToDOM(tipHTML);
renderLocationToDOM(locationHTML);