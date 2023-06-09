const createArmyTab = (farms) => {
    farms.forEach(farm => {
        document.getElementById('army').insertAdjacentHTML('beforeend',
        `<div class="army-box" id="army-${farm.name}">
            <div>
                <div>
                    ${farm.icon}
                    ${farm.name}
                </div>
                <div id="${farm.name}-number"></div>
            </div>
            <div class="stats-army"></div>
        </div>
        `);
    });
}

// Function that implements the content view of armies in the left (quantity, production)
const army = (farms) => {
    farms.forEach(farm => {
        document.querySelector(`#army-${farm.name} .stats-army`).innerHTML= "";
        document.querySelector(`#${farm.name}-number`).innerHTML= "";
        document.querySelector(`#${farm.name}-number`).append(`${farm.number}`);
        document.querySelector(`#army-${farm.name} .stats-army`).insertAdjacentHTML('beforeend',
            `Each cursor produces ${farm.inProdCookies} <i class="fa-solid fa-cookie"></i> per second<br>
            ${farm.number} cursors produce ${farm.inProdAllCookies.toFixed(1)} <i class="fa-solid fa-cookie"></i> per second<br>
            ${farm.productedCookies.toFixed(1)} <i class="fa-solid fa-cookie"></i> clicked so far
        `);
    });
}

export {createArmyTab, army};
