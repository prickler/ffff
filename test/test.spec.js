describe('A simple overall tests: ', function () {


	beforeEach(function () {
		var mess = '<div id="message" class="message"></div>';
		var fixture = '<table class="table">< tbody > <tr><td id="s1" class="Square" onclick="nextMove(this);"></td><td id="s2" class="Square" onclick="nextMove(this);">X</td><td id="s3" class="Square" onclick="nextMove(this);"></td></tr><tr><td id="s4" class="Square" onclick="nextMove(this);"></td><td id="s5" class="Square" onclick="nextMove(this);"></td><td id="s6" class="Square" onclick="nextMove(this);"></td></tr><tr><td id="s7" class="Square" onclick="nextMove(this);"></td><td id="s8" class="Square" onclick="nextMove(this);"></td><td id="s9" class="Square" onclick="nextMove(this);"></td></tr></tbody ></table >';
		document.body.insertAdjacentHTML('afterbegin', fixture);
		document.body.insertAdjacentHTML('afterbegin', mess);
	});

	it('should equal elements class', function () {
		//given
		var element = document.getElementById("s1");
		//when
		//then
		expect(element.className).toEqual("Square");
	});


	it('should equal empty field', function () {
		//given
		var element = document.getElementById("s1");
		//when
		//then
		expect(element.innerText).toEqual("");
	});


	it('should equal empty field', function () {
		//given
		var element = document.getElementById("s2");
		//when		
		//then
		expect(element.innerText).toEqual("X");
	});


	it('should exual starting message', function () {
		//given
		var message = document.getElementById("message").innerText;
		//when
		//then
		expect(message).toEqual("");
	});


	it('should exual starting message', function () {
		//given
		var message = document.getElementById("message");
		//when
		//then
		expect(message.className).toEqual("message");
	});
});