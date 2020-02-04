class Person{
	constructor(name, lastName, age) {
		this.name = name
		this.lastName = lastName
		this.age = age
	}

	greet(fn) {
		console.log(`Hi, my name is ${this.name} ${this.lastName}.`)
		if (fn) {
			fn(this.name, this.lastName, false)
			console.log()
		}
	}

	amAdult() {
		if (this.age < 18) {
			console.log("I'm not adult.")
			returnfalse
		} else {
			console.log("I'm adult.")
			returntrue
		}
	}
}

class Developer extends Person{
	constructor(name, lastName, age, languages) {
		super(name, lastName, age)
		this.languages = languages
	}

	greet(fn) {
		let languages = ''
		for (let i = 0; i < this.languages.length; i++) {
			i === this.languages.length - 1
				? (languages += 'and ' + this.languages[i] + '.')
				: (languages += this.languages[i] + ', ')
		}
		console.log(
            `Hi I'm ${this.name} ${this.lastName} and I know`
            + ` the following languages: ${languages}`
		)
		if (fn) {
			fn(this.name, this.lastName, true)
			console.log()
		}
	}
}

function greetBack(name, lastName, isDev) {
    console.log()
	console.log(`Hi ${name} ${lastName}, nice to meet you.`)
	if (isDev) {
		console.log("It's nice to meet a developer.")
	}
}

let anthony = new Developer('Anthony', 'Luzquiños', 23, [
	'Python',
	'Java',
	'C',
	'C++',
	'JavaScript',
  'Visual Basic',
  'Go',
  'Ruby'
])

let karolay = new Person('Karolay', 'Tamayo', 20)

anthony.greet(greetBack)
karolay.greet(greetBack)
