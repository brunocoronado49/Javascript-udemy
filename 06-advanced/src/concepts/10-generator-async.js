import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async (element) => {
    const heroGen = getHeroesGenerator();
    let hasHeroes = false;

    do {
        const {value, done} = await heroGen.next();
        hasHeroes = done;
        if (hasHeroes) break;

        element.innerHTML = value;
    } while (!hasHeroes);
}

async function* getHeroesGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No more heroes';
}

const sleep = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}


