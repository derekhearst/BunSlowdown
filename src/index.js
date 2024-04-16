// import { createWorker } from 'tesseract.js'
// import fs from 'fs/promises'

// const image = await fs.readFile('tests/test1.jpg')
// console.log('Loaded Image')
// const worker = await createWorker('eng')
// console.log('Created Worker')
// const ret = await worker.recognize(image)
// console.log('Recognized')
// console.log(ret.data.text)
// await worker.terminate()
import fs from 'fs/promises'

import { createWorker } from 'tesseract.js'
;(async () => {
	const worker = await createWorker('eng')
	const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png')
	console.log(ret.data.text)
	await worker.terminate()
})()
