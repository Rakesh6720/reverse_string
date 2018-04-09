

	let str = prompt("please enter a single word:");
	
	reverseString(str);
	
	function reverseString(str) {
		let stringArray = str.split(""); // split the string into its individual components in a new array
		//stringArray = ["s", "t", "r"]
		let reverseArray = stringArray.reverse();//reverse the array
		//reverseArray = ["r", "t", "s"]
		let newString = reverseArray.join("");//join the elelments of the array into one string
		// newString = "rts"
		document.getElementById("here").innerHTML = "your word reversed is: " + newString;//write the new string in the browswer window
		//console.log(newString); //print the new string to the console
	}
	
	//reverseString("cow");