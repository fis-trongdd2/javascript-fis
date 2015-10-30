//ViewModel
function check(){
	this.userName = ko.observable('');
	this.passWord = ko.observable('');
	this.check = checkData;
}
function checkData(){
	if (this.userName() == "admin") { 
		if (this.passWord() == "123456") {
			window.location.href = "../view\\helloworld.html";
		} else {
			alert("Invalid !");
		}
	} 
	else {
		alert("Invalid !");
	}
}
var obj = new check();
ko.applyBindings(obj);

	