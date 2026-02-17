import { database } from './aquariumData.js'

export const locationList = () => {
    let locationHTML = '';
    database.locations.forEach(location => {
        locationHTML += `
        <section>
        <article class= "locations">
                <h1>${location.name}</h1>
                <p>${location.description}</p>
        </article>
        </section>
        `;
    });
    return locationHTML;
}
export const renderLocationToDOM = (locationHTML) => {
   const locationContainer = document.getElementById('location-list');

   if (locationContainer) {
       locationContainer.innerHTML = locationHTML;
   } else {
       console.error('Could not find element with id "location-list"');
   }
};