const btn1 = document.getElementById('webdev');
const btn2 =
	document.getElementById('webdevmain');
const btn3 = document.getElementById('webmain');
const form1 =
	document.getElementById('webdevform');
const form2 = document.getElementById(
	'webdevmainform'
);
const form3 = document.getElementById(
	'webmainform'
);

const buttons = [btn1, btn2, btn3];
const forms = [form1, form2, form3];

const formSelected = (btn) => {
	buttons.forEach((button) => {
		if (btn == button) {
			button.style.backgroundColor = 'black';
			button.style.color = 'white';
		} else {
			button.style.backgroundColor = 'orange';
			button.style.color = 'black';
		}

		forms.forEach((form) => {
			if(form == )
		})
	});
};

btn1.addEventListener('click', () => {
	form1.style.display = 'block';
	form2.style.display = 'none';
	form3.style.display = 'none';
	formSelected(btn1);
});

btn2.addEventListener('click', () => {
	form1.style.display = 'none';
	form2.style.display = 'block';
	form3.style.display = 'none';
	formSelected(btn2);
});

btn3.addEventListener('click', () => {
	form1.style.display = 'none';
	form2.style.display = 'none';
	form3.style.display = 'block';
	formSelected(btn3);
});
