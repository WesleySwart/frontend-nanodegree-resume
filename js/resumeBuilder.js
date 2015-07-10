/* TODO
 * 
 * 
 * 	
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

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);

		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		

		if(this.skills.length > 0){
			$("#header").append(HTMLskillsStart);

			for(skill in this.skills){
				var formattedSkills = HTMLskills.replace("%data%", this.skills[skill]);
				$("#skills:last").append(formattedSkills);
			}
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
	}
};

var work = {
	"jobs": [
	{
		"employer": "Voice4net",
		"title": "Application Developer",
		"location": "Lewisville, TX",
		"dates": "10/2012 - present",
		"description": "Voice4net description"
	},
	{
		"employer": "Warner Bros",
		"title": "Analyst",
		"location": "Burbank, CA",
		"dates": "9/2011 - 8/2012",
		"description": "Warner Bros description"
	},
	{
		"employer": "Business Technology Group",
		"title": "Systems Engineer",
		"location": "Ruston, LA",
		"dates": "1/2010 - 7/2011",
		"description": "BTG description"
	}
	],
	"display": function(){

		if(this.jobs.length > 0){
			for(job in this.jobs){
				$("#workExperience").append(HTMLworkStart);
				var formattedJobEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
				var formattedJobTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
				var formattedJobLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
				var formattedJobDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
				var formattedJobDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);

				$(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);
				$(".work-entry:last").append(formattedJobLocation);
				$(".work-entry:last").append(formattedJobDates);
				$(".work-entry:last").append(formattedJobDescription);
			}
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
		
		if (this.projects.length > 0){
			for(project in this.projects){
				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
				
				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);

				if (this.projects[project].images.length > 0){
					for (image in this.projects[project].images){
						var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
						$(".project-entry:last").append(formattedProjectImage);
					}
				}
			}
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

		if(this.schools.length > 0){
			for(school in this.schools){
				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);

				$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
				$(".education-entry:last").append(formattedSchoolDates);
				
				for(major in this.schools[school].majors){
					var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
					$(".education-entry:last").append(formattedSchoolMajor);
				}
			}
		}

		if(this.onlineCourses.length > 0){
			$(".education-entry:last").after(HTMLonlineClasses);

			for (course in this.onlineCourses){

				$("#education").append(HTMLschoolStart);
				
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

//Internationalize
/*function inName(name){
	var name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
*/

$("#mapDiv").append(googleMap);