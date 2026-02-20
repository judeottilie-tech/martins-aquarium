import { renderFishToDOM } from './fishList.js';
import { tipList, renderTipToDOM } from './tipList.js';
import { locationList, renderLocationToDOM } from './locationList.js';

renderFishToDOM();
renderTipToDOM(tipList());
renderLocationToDOM(locationList());