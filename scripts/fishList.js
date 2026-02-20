import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    let holyFish = "";

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish += `
                <div class="fish-card">
                    <h3>${fish.name}</h3>
                    <p>Species: ${fish.species}</p>
                    <p>Length: ${fish.length} inches</p>
                    <p>Location: ${fish.location}</p>
                    <p>Diet: ${fish.diet}</p>
                    <img src="${fish.image}" alt="${fish.name}">
                </div>
            `;
        }
    }

    return holyFish;
};

export const soldierFish = () => {
    let servants = "";

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            servants += `
                <div class="fish-card">
                    <h3>${fish.name}</h3>
                    <p>Species: ${fish.species}</p>
                    <p>Length: ${fish.length} inches</p>
                    <p>Location: ${fish.location}</p>
                    <p>Diet: ${fish.diet}</p>
                    <img src="${fish.image}" alt="${fish.name}">
                </div>
            `;
        }
    }

    return servants;
};

export const regularFish = () => {
    let unworthy = "";

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            unworthy += `
                <div class="fish-card">
                    <h3>${fish.name}</h3>
                    <p>Species: ${fish.species}</p>
                    <p>Length: ${fish.length} inches</p>
                    <p>Location: ${fish.location}</p>
                    <p>Diet: ${fish.diet}</p>
                    <img src="${fish.image}" alt="${fish.name}">
                </div>
            `;
        }
    }

    return unworthy;
};

export const renderFishToDOM = () => {
    document.getElementById('holy-fish-list').innerHTML = mostHolyFish();
    document.getElementById('soldier-fish-list').innerHTML = soldierFish();
    document.getElementById('regular-fish-list').innerHTML = regularFish();
};