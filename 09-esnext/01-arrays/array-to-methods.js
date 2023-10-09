const heroes = [
    'Superman',
    'Flash', 
    'Batman', 
    'Harley Quinn'
]
// heroes.sort();\
const deletedHero = heroes.toSpliced(0, 2, 'Green lantern');

// const heroesCopy = heroes;

// const sortedHeroes = heroes.toSorted();
// const reversedHeroes = heroes.toReversed();

console.table(heroes);
// console.table(sortedHeroes);
// console.table(reversedHeroes);
console.table({deletedHero});

