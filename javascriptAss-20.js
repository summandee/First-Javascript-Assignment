//  20.	Think of something you could store in a array. 
// • For example, you could make a list of mountains, rivers, countries, cities, languages,
// •  or anything else you’d like. Write a program that creates a list containing these items.


	let data = ["Englis ", "German", "Urdu", "Spanish", "Turkish" , "Arabi"];

	let list = document.getElementById("myList");

	data.forEach((item) => {
		let li = document.createElement("li");
		li.innerText = item;
		list.appendChild(li);
	});
