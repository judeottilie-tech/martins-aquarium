import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = '';
    database.fish.forEach(fish => {
        fishHTML += `
            <div class="fish-card">
                <h3>${fish.name}</h3>
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
                <img src="${fish.image}" alt="${fish.name}">
            </div>
        `;
    });
    return fishHTML;
};

export const renderFishToDOM = (fishHTML) => {
   const fishContainer = document.getElementById('fish-list');

   if (fishContainer) {
       fishContainer.innerHTML = fishHTML;
   } else {
       console.error('Could not find element with id "fish-list"');
   }
};