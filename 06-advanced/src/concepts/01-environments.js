/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponents = (element) => {
    const html = `
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        Ssr: ${import.meta.env.SSR} <br/>
        URL: ${import.meta.env.VITE_BASE_URL} <br/>
        KEY: ${import.meta.env.VITE_API_KEY} <br/>
    `;
    element.innerHTML = html;
}


