class Person {
	name: string;
	dance() {
		console.log(this.name + " is dancing ...");
	}
	constructor(name: string){
		this.name = name;
	}
}

let jim = new Person ('Jim');

jim.dance();

//allows the Person class to be used elsewhere
class CoolPerson extends Person {
	dance(){
		//adds the dance class to the new coolperson class before the rest of the cool person actions
		super.dance();
		console.log('awesomely');
	}
}

let rob = new CoolPerson('Rob');
rob.dance();