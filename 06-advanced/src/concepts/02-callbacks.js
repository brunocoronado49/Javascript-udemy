import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    findHero(id1, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No hay heroe';

        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} - ${hero2.name}`;
        });
    });
}

/**
 * 
 * @param {String} id 
 * @param {(error?: String|Null, hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(heroe => heroe.id === id);

    if (!hero) {
        callback(`Hero with ${id} not found.`);
        return;
    }

    callback(null, hero);
}



