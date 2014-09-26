(function () {
	var defaults = {
		tz: "09:00"
	};

	function parseOptions() {
		var qs = queryString.parse(location.search);
		var args = [].slice.call(arguments),
			l = args.length,
			i, a;
		var res = {};

		for (i = 0; i < l; i++) {
			a = args[i];
			res[a] = qs[a] || defaults[a];
		}

		return res;
	}

	var options = parseOptions('tz');

	function parseTz(tz) {
		tz = tz.replace(/[^0-9:\+\-]/g, '');

		var parts = tz.split(':'),
			hours = parts[0],
			minutes = parts[1];

		hours = parseInt(hours, 10);
		if (isNaN(hours)) {
			hours = 0;
		}

		minutes = parseInt(minutes, 10);
		if (isNaN(minutes)) {
			minutes = 0;
		}

		var sign = hours >= 0 ? 1 : -1;

		hours += minutes * sign / 60;

		return hours;
	}

	var tzOffset = parseTz(options.tz),
		secsPerHour = 60 * 60 * 1000;


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
		el: 'watch-root',
		template: '#tpl-watch',
		data: {
			time: {}
		}
	});

	function updateTime() {
		var now = new Date();

		now.setTime(now.getTime() + tzOffset * secsPerHour)

		var hours = now.getHours(),
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
