// import { createWorker } from 'tesseract.js'

// let tesseract = await createWorker('eng', 1, {
// 	langPath: './tesseract/eng.traineddata',
// })
// console.log('Worker created')

import { createWorker } from 'tesseract.js';
const startTime = Date.now();
const worker = await createWorker('eng');
const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log(ret.data.text);
await worker.terminate();
const endTime = Date.now();
console.log(`Time taken: ${endTime - startTime}ms`);
