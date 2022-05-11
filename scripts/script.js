import { getData } from "../helpers/getData.js";
import { printImg } from "../modules/printImg.js";


const url = 'https://rickandmortyapi.com/api/character '

const main = document.getElementById('main')

let img;

document.addEventListener('DOMContentLoaded', async() =>{

    img = await getData(url);
    printImg(img, main)
})

