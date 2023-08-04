function getFormvalue() {
    //Write your code here

	let form = document.getElementById("form1")
	let firstName = form.fname.value
	let lastName = form.lname.value

	alert(firstName + " "+ lastName)

}
