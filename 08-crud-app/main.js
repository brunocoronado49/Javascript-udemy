import { UsersApp } from './src/users/users-app';
import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card');
UsersApp(element);


