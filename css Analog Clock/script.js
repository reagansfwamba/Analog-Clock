const $ = (selector) => {
	return document.querySelector(selector);
};
const $diallines = document
.getElementsByClassName('diallines');
const $clock =$('.clock');

for (let i = 1; i <= 60;i++) {
	$clock.innerHTML +="<div class='diallines></div>";
	$diallines[i]
	.style
	.transform = 'rotate(${6*i}deg)';
}

function update() {
	// body...
	const weekday = [
		"Sunday"
		"Monday"
		"Teusday"
		"Wedanesday"
		"Thursday"
		"Friday"
		"Saturday"
		];
}
const d = new Date();
const h = d.getHours();
const m = d.getMinutes();
const s = d.getSeconds();
const date = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();

const hDeg = h* 30 + m * (360/720);
const mDeg = m * 6 + s (360/3600);
const sDeg = s * 6;

const sHour = $('.hour-hand');
const smin = $('.minute-hand');
const ssec = $('.second-hand');
const sdate = $('.date');
const sday = $('.day');

const day = weekday[d.getDay()];

if (month < 9) {
	month = "0" + month;
	}

	$hour.style.transform = 'rotate(${hDeg}deg';
	$min.style.transform = 'rotate(${hDeg}deg';
	$sec.style.transform = 'rotate(${hDeg}deg';
	$date.HTML = 's{year}/${month}/${date}';
	$day.innerHTML = day;
}

setInterval(update, 1000);
