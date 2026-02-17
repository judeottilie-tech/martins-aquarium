import { database } from './aquariumData.js'

export const tipList = () => {
    let tipHTML = '<ul class="tips">';
    database.tips.forEach(tip => {
        tipHTML += `
            <li class="tip">
                <h3>${tip.topic}</h3>
                <p>${tip.text}</p>
            </li>
        `;
    });
    tipHTML += '</ul>';
    return tipHTML;
};

export const renderTipToDOM = (tipHTML) => {
   const tipContainer = document.getElementById('tip-list');

   if (tipContainer) {
       tipContainer.innerHTML = tipHTML;
   } else {
       console.error('Could not find element with id "tip-list"');
   }
};