import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371f233c9f2425f16916';

    try {
        const {name: name1} = await findHero(id1);
        const {name: name2} = await findHero(id2);
    
        element.innerHTML = `${name1} / ${name2}`;
    } catch (error) {
        element.innerHTML = error;
    }
}

/**
 * 
 * @param {String} id 
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw 'Hero not found.';

    return hero;
}



