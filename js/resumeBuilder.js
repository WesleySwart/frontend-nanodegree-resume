//$("#main").append("Wesley Swart");

//var name = "Wesley Swart"
//var role = "Web Developer"
//debugger;
var bio = {
	name: "Wesley Swart",
	role: "Web Developer",
	contacts: {
		mobile: "318-548-1745",
		email: "wswart2008@gmail.com",
		github: "WesleySwart",
		location: "Dallas, TX"
	},
	bioPic: "images/fry.jpg",
	welcomeMessage: "Hello World!",
	skills: ["HTML", "CSS", "JavaScript", "JQuery"]
};

//Main Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//Header list items
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//Pic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

//Welcome Message
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

//Skills
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

