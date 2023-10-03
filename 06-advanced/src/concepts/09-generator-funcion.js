/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) => {
    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());

    const genId = idGenerator();
    
    const button = document.createElement('button');
    button.innerText = 'click me';
    element.append(button);

    const renderButton = () => {
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton);
}

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}

// funcion generadora (function*)
function* myFirstGeneratorFunction() {
    yield 'mi primer valor'; // se pausa, es como un retorno 
    yield 'segundo valor';
    yield 'tercer valor';

    return 'no hay valores';// despies ya no se puede hacer nada
}


