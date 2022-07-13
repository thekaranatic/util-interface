function elec(){
    window.location.href = "electricity.html";
}
function lpg(){
    window.location.href = "lpg.html";
}
function goHome(){
    window.location.href = "home.html";
}

function checkAcId(){
    let ac_id = document.getElementById("ac_id").value;
	// let ac_id_case1 = /[a-z]?/g;
	let ac_id_case2 = /[0-9]?/g;
	let ac_id_case3 = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

	const amount = [
		"500",
		"870",
		"1200",
		"3000",
		"6500",
	];

	var randAmount = amount[Math.floor(Math.random()*amount.length)];

	if(ac_id=="") {						
		alert("Please enter your KB Account ID first");
		return false;
	}
	if(ac_id.match(ac_id_case3)){
		alert("Special characters are not allowed");
		return false;
	}
	// if(!ac_id.match(ac_id_case1)){
	// 	alert("Characters in account ID must be uppercase \n Ex. KB01");
	// 	return false;
	// }
	if(!ac_id.match(ac_id_case2)){
		alert("Characters in account ID must atlease contain numbers \n Ex. KB01");
		return false;
	}
	if(ac_id.length != 4 ){
		alert("Please enter valid Account ID\nEx.: KB01");
		return false;
	}
	// if (ac_id == "KB01" || "KB02" || "KB03"){
	// 	return true;
	// }
	// else{
	// 	alert("Looks like your account is not registered!");
	// 	document.getElementById("bill").innerHTML = "";
	// 	return false;
	// }

	let tbox_bg = document.getElementById("ac_id").style;
	tbox_bg.transition = ".4s";
	tbox_bg.backgroundColor = "#4ff94f";

	let btn = document.getElementById("kbBtn").style;
	btn.transition = ".4s";
	btn.display = "none";

	let kbInfo = document.getElementById("kbInfo").style;
	kbInfo.transition = ".4s";
	kbInfo.display = "none";


	document.getElementById("bill").innerHTML = "Your bill for this month is ₹" + randAmount;
}

function checkAcId_gas(){
    let ac_id = document.getElementById("ac_id").value;
	// let ac_id_case1 = /[a-z]?/g;
	let ac_id_case2 = /[0-9]?/g;
	let ac_id_case3 = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

	const amount = [
		"500",
		"870",
		"1200",
		"3000",
		"6500",
	];

	var randAmount = amount[Math.floor(Math.random()*amount.length)];

	if(ac_id=="") {						
		alert("Please enter your KB Account ID first");
		return false;
	}
	if(ac_id.match(ac_id_case3)){
		alert("Special characters are not allowed");
		return false;
	}
	// if(!ac_id.match(ac_id_case1)){
	// 	alert("Characters in account ID must be uppercase \n Ex. KB01");
	// 	return false;
	// }
	if(!ac_id.match(ac_id_case2)){
		alert("Characters in account ID must atlease contain numbers \n Ex. KB01");
		return false;
	}
	if(ac_id.length != 4 ){
		alert("Please enter valid Account ID\nEx.: KB01");
		return false;
	}
	// if (ac_id == "KB01" || "KB02" || "KB03"){
	// 	return true;
	// }
	// else{
	// 	alert("Looks like your account is not registered!");
	// 	document.getElementById("bill").innerHTML = "";
	// 	return false;
	// }

	let tbox_bg = document.getElementById("ac_id").style;
	tbox_bg.transition = ".4s";
	tbox_bg.backgroundColor = "#4ff94f";

	let btn = document.getElementById("kbBtn").style;
	btn.transition = ".4s";
	btn.display = "none";

	let kbInfo = document.getElementById("kbInfo").style;
	kbInfo.transition = ".4s";
	kbInfo.display = "none";


	document.getElementById("bill").innerHTML = "Your bill is ₹1000";
}

function check_UPI_Id(){
    let upi_id = document.getElementById("upi_text").value;

	var upCase = /^[A-Z]+$/;
	// let upi_id_case2 = /[0-9]?/g;
	let charCase = /[\!\#\$\%\^\&\*\)\(\+\=\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

	// let match_spn_bank = /@([\S]*)$/;

	// const spn_banks = [
	// 	"okaxis",
	// 	"okhdfcbank",
	// 	"okicici",
	// 	"okbankofbaroda",
	// 	"oksbi",
	// 	"ibl",
	// 	"ybl",
	// 	"axl",
	// 	"paytm",
	// 	"airtel",
	// ];

	// var randAmount = amount[Math.floor(Math.random()*amount.length)];
	// if(upi_id.match(upCase)){
	// 	alert("No uppercase letters are allowed");
	// 	return false;
	// }
	if(upi_id=="") {						
		alert("Please enter your UPI ID first");
		return false;
	}
	if(upi_id.match(charCase)){
		alert("Only '@' and Period (.) is allowed");
		return false;
	}



	
	// const get_spn_bank = upi_id.match(match_spn_bank);
	// console.log(get_spn_bank);

	

	// for (let i = 0; i < spn_banks.length; i++) {
	// 	// const element = spn_banks[i];
	// 	if(get_spn_bank[1] != spn_banks[i]){
	// 		alert("Please enter the valid sponsor bank or check your UPI ID again");
	// 		return false;
	// 		// console.log(element);		

	// 	}
	// }
	// if(ac_id.length != 4 ){
	// 	alert("Please enter valid Account ID\nEx.: KB01");
	// 	return false;
	// }
	// if (ac_id == "KB01" || "KB02" || "KB03"){
	// 	return true;
	// }
	// else{
	// 	alert("Looks like your account is not registered!");
	// 	document.getElementById("bill").innerHTML = "";
	// 	return false;
	// }
	// document.getElementById("bill").innerHTML = "Your bill for this month is ₹" + randAmount;

	let tbox_bg = document.getElementById("upi_text").style;
	tbox_bg.transition = ".4s";
	tbox_bg.backgroundColor = "#4ff94f";

	let btn = document.getElementById("upiBtn").style;
	btn.transition = ".4s";
	btn.display = "none";

	let kbInfo = document.getElementById("payBtn").style;

	kbInfo.visibility = "visible";
}

function paid(){
	let kbInfo = document.getElementById("payBtn").style;
	kbInfo.backgroundColor = "green";
	kbInfo.transition = ".7s";
	

	document.getElementById("payBtn").innerHTML = "Payment Successful";

}
