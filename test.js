const done = false
const isItDoneYet = new Promise((resolve, reject) =>
	{
		if(done)
		{
			const workDone = 'here is the things I build'
			resolve(workDone)
		}
		else
		{
			const why = 'Still working on something else'
			reject(why)
		}
	})

console.log(typeof isItDoneYet )
isItDoneYet
.then(resolve=>{console.log(resolve)})
.catch(reject=>{console.log(reject)})
