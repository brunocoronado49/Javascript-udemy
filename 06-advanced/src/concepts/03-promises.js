import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
    console.log('promisesComponent');
}

/**
 * 
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with ${id} not found.`);
    });
}



