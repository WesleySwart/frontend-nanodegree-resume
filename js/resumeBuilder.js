//debugger;
var bio = {
	"name": "Wesley Swart",
	"role": "Web Developer",
	"contacts": {
		"mobile": "318-548-1745",
		"email": "wswart2008@gmail.com",
		"github": "WesleySwart",
		"twitter": "@wesleyswart",
		"location": "Dallas, TX"
	},
	"bioPic": "images/fry.jpg",
	"welcomeMessage": "Hello World!",
	"skills": ["HTML", "CSS", "JavaScript", "JQuery"],
	"display": function(){

	}
};

var education = {
	"schools": [
	{
		"name": "",
		"location": "",
		"degree": "",
		"majors": [],
		"dates": "",//graduation date
		"url": ""
	},
	{
		"name": "",
		"location": "",
		"degree": "",
		"majors": [],
		"dates": "",//graduation date
		"url": ""
	}
	],
	"onlineCourses": [
	{
		"title": "",
		"school": "",
		"date": "",//date finished
		"url": ""
	},
	{
		"title": "",
		"school": "",
		"date": "",//date finished
		"url": ""
	}
	],
	"display": function(){

	}
};

var work = {
	"jobs": [
	{
		"employer": "Voice4net",
		"title": "Application Developer",
		"location": "Lewisville, TX",
		"dates": "10/2013 - present",
		"description": "Voice4net description"
	},
	{
		"employer": "Warner Bros",
		"title": "Analyst",
		"location": "Burbank, CA",
		"dates": "9/2012 - 8/2013",
		"description": "Warner Bros description"
	},
	{
		"employer": "Business Technology Group",
		"title": "Systems Engineer",
		"location": "Ruston, LA",
		"dates": "1/2010 - 7/2012",
		"description": "BTG description"
	}
	],
	"display": function(){
		for(i = 0; i < this.jobs.length; i++){
			var formattedJobEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
			var formattedJobLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
			var formattedJobDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
			var formattedJobDescription = HTMLworkDescription.replace("%data%", this.jobs[i].description);

			$("#workExperience").append(formattedJobEmployer);
			$("#workExperience").append(formattedJobTitle);
			$("#workExperience").append(formattedJobLocation);
			$("#workExperience").append(formattedJobDates);
			$("#workExperience").append(formattedJobDescription);
		}
	}
};

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2015",
		"description": "Sample project description",
		"images": ["images/197x148.gif","images/197x148.gif"]
	}/*,
	{
		"title": "",
		"dates": "",
		"description": "",
		"images": []
	}*/
	],
	"display": function(){
		for(i = 0; i < this.projects.length; i++){
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
			
			$("#projects").append(formattedProjectTitle);
			$("#projects").append(formattedProjectDates);
			$("#projects").append(formattedProjectDescription);

			for(j = 0; j < this.projects[i].images.length; j++){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
				$("#projects").append(formattedProjectImage);
			}
		}
	}
};

//Main Header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//Header Contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//Pic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

//Welcome Message
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

//Skills
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

//Work Experience
/* Commented out for testing work.job.display()
var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
*/

//Projects

//Education

//Map

//Footer Contacts

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

$("#workExperience").append(HTMLworkStart);
/*Commented out for testing work.job.display()
$("#workExperience").append(formattedJobEmployer);
$("#workExperience").append(formattedJobTitle);
$("#workExperience").append(formattedJobLocation);
$("#workExperience").append(formattedJobDates);
$("#workExperience").append(formattedJobDescription);
*/
work.display();

$("#projects").append(HTMLprojectStart);
projects.display();

$("#education").append();

$("#mapDiv").append();

$("#footerContacts").append();



