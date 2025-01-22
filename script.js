  	let standard = [
        ["I", 1],
        ["IV", 4],
     ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000]
];
function getclosevalue(num){

	for(let i=0; i<standard.length; i++){
		let current = standard[i][1];
		if(current===num){
			return standard[i]
		}
		if(current > num ){
			return standard[i-1];
		}
	}
	return "M";
	
}
let ans = "";
function convertToRoman(num) {	
	
	while(num != 0){
		let roman = getclosevalue(num);

		ans = ans.concat(num[0]);
		num = num - roman[1];
	}
	return ans;
};

   // https://www.svgrepo.com/show/345223/three-dots-vertical.svg

  

// }
// You can test your code by running the above function and printing it to console by pressing the run button at the top.
// To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
