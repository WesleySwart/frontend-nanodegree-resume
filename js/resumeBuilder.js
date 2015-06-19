/* TODO
 * Data format is incorrect
 * ie, no left margin.
 * Adujust append/prepend	
*/

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
		//var formattedSkills = HTMLskills.replace("%data%",bio.skills);

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
		//$("#skills").append(formattedSkills);

		//test function
		for(i = 0; i < this.skills.length; i++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

			$("#skills").append(formattedSkills);
		}

	}
};

var education = {
	"schools": [
	{
		"name": "Louisiana Tech University",
		"location": "Ruston, LA",
		"degree": "Bachelors of Science",
		"majors": ["Computer Information Systems"],
		"dates": "2009",//graduation date
		"url": "www.latech.edu"
	},
	{
		"name": "Louisiana Tech University",
		"location": "Ruston, LA",
		"degree": "Bachelors of Science",
		"majors": ["Finance"],
		"dates": "2008",//graduation date
		"url": "www.latech.edu"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015",//date finished
		"url": "www.udacity.com"
	}
	],
	"display": function(){

		$("#education").append(HTMLschoolStart);

		for(i = 0; i < this.schools.length; i++){
			var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);

			$("#education").append(formattedSchoolName);
			$("#education").append(formattedSchoolDegree);
			$("#education").append(formattedSchoolDates);
			
			for(j = 0; j < this.schools[i].majors.length; j++){
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors);
				$("#education").append(formattedSchoolMajor);
			}
		}


		$("#education").append(HTMLonlineClasses);

		for (i = 0; i < this.onlineCourses.length; i++){
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);

			$("#education").append(formattedOnlineTitle);
			$("#education").append(formattedOnlineSchool);
			$("#education").append(formattedOnlineDates);
			$("#education").append(formattedOnlineURL);
		}
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
		$("#workExperience").append(HTMLworkStart);

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
	},
	{
		"title": "Sample Project 2",
		"dates": "2015",
		"description": "Sample project description",
		"images": ["images/197x148.gif","images/197x148.gif"]
	}
	],
	"display": function(){
		$("#projects").append(HTMLprojectStart);

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


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append();

$("#footerContacts").append();



