import logo from './logo.svg';
import './App.css';
import { Header } from './components/header.js';
import { FourHeroes } from './components/FourHero.js';
import { AddHero } from './components/addHero.js';
import { HeroFind } from './components/heroFind.js';
import { HeroList } from '.components/herolist.js'

function App() {
    return (
        <div className="App">
            <Header></Header>
            <FourHeroes></FourHeroes>
            <HeroFind></HeroFind>
            <AddHero></AddHero>
            <HeroList></HeroList>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
