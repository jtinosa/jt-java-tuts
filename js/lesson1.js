monogatari.script ({
	'lesson1': [
		'show scene classroom with fadeIn',
		'y:normal Before we start coding, let me introduce Java',
		'show image java-intro center with fadeIn',
		'y:normal Java is a high level, modern programming language designed in the early 1990s by Sun Microsystems, and currently owned by Oracle.',
		'y:normal Java is Platform Independent, which means that you only need to write the program once to be able to run it on different platforms!',
		'y:normal Java is portable, robust, and dynamic, with the ability to fit the needs of any type of application.',
		'y:normal Java runs in more than 3 billion devices.',
		"y:normal Java is used to develop apps for Android, Desktop, Web, Enterprise and many more!",
		'hide image java-intro',
		"y:normal Let's see if you really pay attention while I discussed",
		"y:normal Which of the following statement is true?",
		'jump choice1'
	],
	'choice1':[
		{'Choice': {
			'correct': {
				'Text': 'Java is used to develop apps for Android, Desktop, Web, Enterprise and many more.',
				'Do': 'jump correct1'
			},
			'wrong': {
				'Text': 'Java is used to develop Android applications only.',
				'Do': 'jump wrong1'
			}
		}}
	],
	'correct1':[
		"y:normal Great! Let's continue our lesson.",
		'jump lesson1-1'
	],
	'wrong1':[
		"y:normal Uh oh! Think again.",
		'jump choice1'
	],
	'lesson1-1':[
		"y:normal Let's start by creating a simple program that prints Hello World!",
		'show image hello-world center with fadeIn',
	]
});