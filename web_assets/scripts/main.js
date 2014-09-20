(function () {
	var Digit = Ractive.extend({
		template: '#tpl-digit'
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
