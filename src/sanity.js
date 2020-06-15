export default class Sanity {
	constructor(idCounter, idForm, textSanity) {
		this.paramReduces = [-6, -15, -18, -21, -30, +60, +100];
		this.maxTimer = 360; // 360
		
		this.idCounter = idCounter;
		this.idForm = idForm;
		this.textSanity = textSanity;
		this.idFormText = idForm + "text";
		this.idFormButton = idForm + "button";
		this.idFormButtons = [];

		for (let k = 0; k < this.paramReduces.length; k ++) {
			this.idFormButtons[k] = idForm + "buttonR" + this.paramReduces[k];
		}
		this.elemCounter = document.getElementById(idCounter);
		this.elemForm = document.getElementById(idForm);

		this.timer = this.maxTimer;
		this.sanity = 0;
		this.elemForm.innerHTML =
			`<input type="text" id="` +
			this.idFormText +
			`" value="input sanity here">
			<button id="` +
			this.idFormButton +
			`" onclick="">上書き</button>
			`;
		
		for (let k = 0; k < this.paramReduces.length; k ++) {
			this.elemForm.innerHTML += `<button id="` +
				this.idFormButtons[k] +
				`" onclick="">`+this.paramReduces[k]+`</button>
				`;
		}
		this.elemFormText = document.getElementById(this.idFormText);
	}

	updateSanityText() {
		this.elemCounter.innerHTML =
			this.textSanity + " " + this.sanity.toString() + " (" + this.timer + "s)";
	}

	update() {
		this.timer = this.timer - 1;
		if (this.timer <= 0) {
			this.timer = this.maxTimer;
			this.sanity += 1;
		}
		this.updateSanityText();
	}

	override() {
		this.sanity = Number(this.elemFormText.value);
		if (isNaN(this.sanity)) this.sanity = 0;
		this.timer = this.maxTimer;
		this.updateSanityText();
	}

	changeBy(k) {
		this.sanity += k;
		if (this.sanity < 0) this.sanity = 0;
		this.updateSanityText();
	}

	init() {
		let t = this;
		this.updateSanityText();
		document.getElementById(this.idFormButton).onclick = function() {
			t.override();
		};
		for (let k = 0; k < this.paramReduces.length; k ++) {
			document.getElementById(this.idFormButtons[k]).onclick = function() {
				t.changeBy(t.paramReduces[k]);
			};
		}
		this.exec = setInterval(function() {
			t.update();
		}, 1000);
	}
}
