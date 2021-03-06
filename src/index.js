import example from './images/example.jpg';
import './styles/main.scss';

// Create a class property without a constructor
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

console.log("refresh fdf")
const div = document.createElement('div');
div.innerHTML=`<img src="${example}" width="400px" height="150px">`;

// Append heading node to the DOM
const app = document.querySelector("#root");
app.append(heading, p, div);
