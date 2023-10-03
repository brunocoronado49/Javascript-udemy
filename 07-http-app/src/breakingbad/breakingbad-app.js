/**
 * 
 * @returns {Object} Quote information
 */
const fetchQuote = async() => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/');
    const data = await response.json();
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'BreakingBad App';
    
    const buttonQuote = document.createElement('button');
    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');

    buttonQuote.innerText = 'Next Quote';

    const renderQuote = ({quote, author}) => {
        quoteLabel.innerHTML = quote;
        authorLabel.innerHTML = author;
        element.replaceChildren(quoteLabel, authorLabel, buttonQuote);
    }
    
    buttonQuote.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    });
    
    fetchQuote().then(renderQuote);
}

