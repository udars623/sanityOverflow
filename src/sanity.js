export default class Sanity {
    constructor(idCounter, idForm, textSanity) {
        this.idCounter = idCounter;
        this.idForm = idForm;
        this.textSanity = textSanity;
        this.idFormText = idForm + "text";
        this.idFormButton = idForm + "button";
        this.idFormButtonM30 = idForm + "buttonM30";
        this.idFormButtonM6 = idForm + "buttonM6";
        this.idFormButtonM15 = idForm + "buttonM15";
        this.idFormButtonM18 = idForm + "buttonM18";
        this.idFormButtonM21 = idForm + "buttonM21";
        this.elemCounter = document.getElementById(idCounter);
        this.elemForm = document.getElementById(idForm);
        this.maxTimer = 360; // 360
        this.timer = this.maxTimer;
        this.sanity = 0;
        this.elemForm.innerHTML =
            `<input type="text" id="` +
            this.idFormText +
            `" value="input sanity here">
            <button id="` +
            this.idFormButton +
            `" onclick="">Update</button>
            <button id="` +
            this.idFormButtonM6 +
            `" onclick="">-6</button>
            <button id="` +
            this.idFormButtonM15 +
            `" onclick="">-15</button>
            <button id="` +
            this.idFormButtonM18 +
            `" onclick="">-18</button>
            <button id="` +
            this.idFormButtonM21 +
            `" onclick="">-21</button>
            <button id="` +
            this.idFormButtonM30 +
            `" onclick="">-30</button>`;
        //console.log(document.getElementById(this.idFormText));
        this.elemFormText = document.getElementById(this.idFormText);
        //this.elemFormButton = document.getElementById(this.idFormButton);
    }

    updateSanityText() {
        this.elemCounter.innerHTML =
            this.textSanity + ": " + this.sanity.toString();
    }

    update() {
        //document.getElementById(this.id).innerHTML = "oops";
        this.timer = this.timer - 1;
        if (this.timer <= 0) {
            this.timer = this.maxTimer;
            this.sanity += 1;
            this.updateSanityText();
        }
    }

    override() {
        //console.log(this.elemFormText.value);
        this.sanity = Number(this.elemFormText.value);
        if (isNaN(this.sanity)) this.sanity = 0;
        this.updateSanityText();
    }

    reduce(k) {
        this.sanity -= k;
        if (this.sanity < 0) this.sanity = 0;
        this.updateSanityText();
    }

    init() {
        let t = this;
        this.updateSanityText();
        document.getElementById(this.idFormButton).onclick = function() {
            t.override();
        };
        document.getElementById(this.idFormButtonM30).onclick = function() {
            t.reduce(30);
        };
        document.getElementById(this.idFormButtonM6).onclick = function() {
            t.reduce(6);
        };
        document.getElementById(this.idFormButtonM15).onclick = function() {
            t.reduce(15);
        };
        document.getElementById(this.idFormButtonM18).onclick = function() {
            t.reduce(18);
        };
        document.getElementById(this.idFormButtonM21).onclick = function() {
            t.reduce(21);
        };
        //console.log(this.elemFormButton);
        this.exec = setInterval(function() {
            t.update();
        }, 1000);
    }
}
