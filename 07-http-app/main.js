import { BreakingBadApp } from './src/breakingbad/breakingbad-app';
import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1 id="app-title"></h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector('.card');
BreakingBadApp(element);

