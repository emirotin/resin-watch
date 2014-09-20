(function () {
	var DIGITS_TO_SEGMENTS = {
		0: 'abcdef',
		1: 'bc',
		2: 'abged',
		3: 'abcdg',
		4: 'fgbc',
		5: 'afgcd',
		6: 'acdefg',
		7: 'abc',
		8: 'abcdefg',
		9: 'abcdfg'
	};

	function segmentIsOn(digit, segment) {
		return DIGITS_TO_SEGMENTS[digit].indexOf(segment) >= 0;
	}

	var Digit = Ractive.extend({
		template: '#tpl-digit',
		data: {
			segments: 'abcdefg'.split(''),
			segmentIsOn: segmentIsOn,
			segmentOrientation: function (segment) {
				if ('agd'.indexOf(segment) >= 0) {
					return 'horizontal';
				} else {
					return 'vertical';
				}
			}
		}
	});

	Ractive.components.digit = Digit;


	var app = new Ractive({
		el: 'app-root',
		template: '#tpl-app',
		data: {
			time: {}
		}
	});

	function updateTime() {
		var now = new Date(),
			hours = now.getHours(),
			mins = now.getMinutes(),
			secs = now.getSeconds();

		app.set('time', {
			h1: ~~(hours / 10),
			h2: hours % 10,
			m1: ~~(mins / 10),
			m2: mins % 10,
			s1: ~~(secs / 10),
			s2: secs % 10
		});
	}

	updateTime();
	setInterval(updateTime, 1000);

}());
