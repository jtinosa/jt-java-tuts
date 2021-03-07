monogatari.script ({
	'scene2': [
        "y Choose a lesson you wanted to start with.",
        {'Choice': {
            'Beginner': {
                'Text': 'Beginner',
                'Do': 'jump lesson1',
                'class': "button-style"
            },
            'Advance': {
                'Text': 'Advance',
                'Do': 'jump lesson2',
                'class': "button-style"
            }
        }}
	]
});