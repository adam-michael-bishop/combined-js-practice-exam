"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
const people = [ {
	name: "Bob",
	age: 42
}, {
	name: "Sue",
	age: 27
}, {
	name: "Lou",
	age: 33
}, {
	name: "Zanzibar",
	age: 18
}, {
	name: "Gladys",
	age: 39
}
];

// 1.
const isBoolean = testCase => typeof testCase === 'boolean';

console.log(isBoolean('blue'),
isBoolean([9,0,'red']),
isBoolean(true),
isBoolean(false),
isBoolean('true'),
isBoolean(1));

// 2.
const hasBoolean = array => array.filter(element => typeof element === 'boolean').length > 0;

console.log([hasBoolean([1, 2, 3, 4, 5]), hasBoolean([3, 'true', 3, {
	bool: true,
	num: 2
}]), hasBoolean([true, 1, 'blue', undefined])]);

// 3.
function minAge(people) {
	return people.reduce((currentLowestAge, person) => {
		return person.age < currentLowestAge ? person.age : currentLowestAge;
	}, Number.POSITIVE_INFINITY);
}

console.log(minAge(people));

// 4.
function longestName(people) {
	return people.reduce((currentLongestName, person) => {
		return person.name.length > currentLongestName.length ? person.name : currentLongestName;
	}, '')
}

console.log(longestName(people));

// 5.
function createPerson(name, age) {
	return {
		name: name,
		age: age
	}
}

console.log(createPerson('Bob', 42));

$('#bold-btn').click(event => $(event.currentTarget).css("font-weight", "bold"));
$('#reload-btn').click(() => window.location.reload());
$('.loud-item').click((event) => alert($(event.currentTarget).text()));
$('.data-item').hover(
	(event) => $('#data-display').html($(event.currentTarget).attr("data-id")),
	() => $('#data-display').html('')
);
$('#change-text-btn').click((event) => $(event.currentTarget).text($('#change-text-input').val()));