#!usr/bin/env node
var fs = require('fs');
var outfile = "primenumbers.txt";
var arr = [];

arr[0] = 2;
//forloop to push the 100 prime numbers in the array

for(i=3;arr.length<100;i++) {
	k=0;
	for(j=1;j<Math.floor(i/2);j++) {
		if(i%j == 0) {
			k++;
		}
	}

	if(k<=1) {
		arr.push(i);
	}
}

fs.writeFileSync(outfile,arr);
console.log("The first 100 prime numbers are: \n"+arr);
