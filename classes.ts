class Cat {
	name : string = "Nemo";
	saying : string;
	hello(person: string){
		console.log(`Hello ${person}`);
	}
}

let malcolm = new Cat();

malcolm.saying = "I hate winter";

console.log(malcolm.saying);
malcolm.hello('Toad');