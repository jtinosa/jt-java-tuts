monogatari.script ({
	'scene2': [
        "y:normal Choose a lesson you wanted to start with.",
        {'Choice': {
            'Beginner': {
                'Text': 'Beginner',
                'Do': 'jump scene3'
            },
            'Advance': {
                'Text': 'Advance',
                'Do': 'jump scene4'
            }
        }}
	]
});