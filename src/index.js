import './style.css';
import { getInput } from './Modules/input.js';
import { ScoreBoard } from './Modules/board';


let Scores=[];

getInput(Scores);
document.addEventListener('DOMContentLoaded',ScoreBoard(Scores))
