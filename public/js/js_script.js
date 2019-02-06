// Change this variable between 'js' and 'vue', to change on how to render.
//let choice = 'js';
let choice = 'vue';

function MenuItem(n,p,b,g) {
	this.name = n;
	this.picture = p;
	this.bullet = b;
	this.gluten = g;
	this.arr = function() {
		return [this.name,this.picture,this.bullet,this.gluten];
	};
}

let burger_list = [];
for (let b of food) {
	burger_list.push(new MenuItem(b.name,b.picture,b.bullet,b.gluten))
}

if (choice == 'js') {
	let wrapper = document.createElement('div');
	wrapper.setAttribute('class','wrapper')
	document.getElementById("burger_select").appendChild(wrapper)
	for (let i = 0; i < burger_list.length; i+=1 ) {
		// This box that we put everything in.
		let thisbox = document.createElement('div');
		thisbox.setAttribute('class','burger_item');

		// The information of the burger
		let burger_data = burger_list[i].arr();

		// Header box
		let header_box = document.createElement('div');
		header_box.setAttribute('class','table_header');
		thisbox.append(header_box);
		// Contents of header box
		header_box.appendChild(document.createTextNode(burger_data[0]));

		// Image box
		let image_box = document.createElement('div');
		image_box.setAttribute('class','image_box');
		thisbox.append(image_box);
		// Image
		let image = document.createElement('img');
		image.setAttribute('src',burger_data[1]);
		image_box.appendChild(image);

		// List box
		let list_box = document.createElement('div');
		list_box.setAttribute('class','list_box');
		thisbox.appendChild(list_box);
		// Bulletpoint list
		let list = document.createElement('ul');
		list_box.appendChild(list);
		for (let q of burger_data[2]) {
			let li = document.createElement('li');
			li.appendChild(document.createTextNode(q));
			list.appendChild(li);
		}

		// Gluten
		if (burger_data[3]) {
			let li = document.createElement('li');

			li.appendChild(document.createTextNode("Innerhåller "));

			s = document.createElement('span');
			s.setAttribute('class','best');
			s.appendChild(document.createTextNode("gluten"));
			li.appendChild(s);
			list.appendChild(li);
		}
	    
		wrapper.appendChild(thisbox);
	}
}

/*
let done_button = document.getElementById('done_button');
done_button.onclick = function() {
	console.log('Button clicked!')
}
*/