'use strict'

import { Flower } from "./flower"
import { Tree } from "./tree";



let liliom = new Flower('yellow');
let bukk = new Tree('brown');

console.log(liliom);
console.log(bukk);
console.log(liliom.needsWatering);
console.log(liliom.watering(100));
console.log(liliom.needsWatering);

