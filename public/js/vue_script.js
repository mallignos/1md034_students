// Because js_script loads first, it has a variable 'choice' in it
// Change it's value to change weather or not vue should work.

// This file reuses the MenuItem object from js_script.js
// This file reuses the burger_list variable from js_script


if (choice == 'vue') {
	let toChange = document.getElementById("vue_wrapper");
	//toChange.removeAttribute("style")
	toChange.style.display = ""

	let burger_vue = new Vue({
		el: '#burger_select',
	  	data: {
	  		burgers: burger_list
	  	}
	}) 
}

let button = new Vue({
	el: '#delivery_address',
	data: {
		form_choice: []
	},
	methods: {
		clicked: function() {
			console.log('Button Clicked!');
			this.form_choice = retriveForm();

		}
	}
})


let zip = function(a,b) {
	ret = [];
	for (let i = 0; i < a.length && i < b.length; i+=1) {
		ret[i] = a[i]+b[i];
	}
	return ret;
}

const form_choice_titles = ['Förnamn: ', 'Efternamn: ', 'E-post: ' , 'Address: ', 'Stad: ', 'Betalningsalternativ: ', 'Favoritfärg: ']

let retriveForm = function() {
	let ret = zip(form_choice_titles,[
		document.getElementById('firstname').value,
		document.getElementById('lastname').value,
		document.getElementById('email').value,
		document.getElementById('adress').value,
		document.getElementById('city').value,
		document.getElementById('payment_op').value,
		document.querySelector('input[name=fav_color]:checked').value
	]);
	let b = retriveBurgers();
	if (b != "") {
		ret.push(b);
	}
	return ret;
}

let retriveBurgers = function() {
	let chb = document.getElementsByName('burger_checkbox');
	let ret = [];
	for (let i of chb) {
		if (i.checked) {
			console.log(i.id);
			ret.push(i.id);
		}
	}
	if (ret.length == 0) {
		return "";
	}
	ret_str = "Burgers: " + ret[0]
	for (let i = 1; i < ret.length; i+=1) {
		ret_str += ", " + ret[1];
	}
	return ret_str;
}

