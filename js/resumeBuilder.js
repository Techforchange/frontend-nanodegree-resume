

var bio = {
	"name": "Arlene Perez",
	"role": "Software Developer",
	"contacts": {
		"email": "arleneperezsb@gmail.com",
		"phone": "562-322-1545",
		"location": "Los Angeles, CA",
		"Github": "https://github.com/Techforchange",
		"LinkedIn": "https://www.linkedin.com/in/arleneperez-techforchange"
	},
	"welcomeMessage": "My purpose in life is to create technology that makes a difference in this world. To me, the ultimate goal is not to create a product but to create a change! Being raised by two Mexican immigrants, I know the true value of a great education by becoming the first in my family to graduate from college. Being featured in the White House Initiative on Educational Excellence for Hispanics Heritage Month Teacher Profile, recognized by Los Angeles Mayor Garcetti as well as in Univision's Puente al Futuro Special for leading a robotics team with my students in East Los Angeles, has allowed me to increase awareness around the issue of increasing minority representation in STEM careers.",
	"skills": ["JavaScript", "AJAX", "HTML", "CSS", "Ruby", "Ruby on Rails", "Nokogiri"],
	"biopic": "images/APerez_profpic.jpg"
}

var work = {
  "jobs":[
    {
      "title": "Founding 7th Grade Math Teacher",
      "employer": "KIPP LOS ANGELES: KIPP SOL ACADEMY",
      "location": "Los Angeles, CA",
      "date": "July 2015 to July 2016",
      "description": "job description"
    },

    {
      "title": "7th/8th Grade Math Teacher(in Spanish)",
      "employer": "Teach for America: Oyster Adams Bilingual School",
      "location": "Washington, DC",
      "date": "August 2011 to July 2015",
      "description": "job description"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "CoCo: College Counselor App",
      "dates": "December 2016 - current",
      "description": "As a parent of a first-generation college student, it can be difficult to understand and navigate the road to college. There are many tests, requirements, and deadlines. CoCo will introduce you into everything you need to know, and help you and your child keep track of everything such as A-G requirements, scholarships, SAT deadlines and waivers. When you sign up on this website, you will receive weekly texts to keep you informed. Tech Stack: Ruby on Rails 5, Twilio, Google Maps, Google Translate, Ember JS, Nokogiri, Ajax, CSS, HTML, Materialize, PostgreSQL"
    },

    {
      "title": "Teacher Treasure Trash Website",
      "dates": "November 2016 - current",
      "description": "Teacher Treasure Trash is a website for teachers who are leaving the classroom or simply needing to get rid of supplies/furniture. It allows one teacher's trash to turn into another teacher's treasure by having teachers post items and be able to search based on category type and location. Tech Stack: Sinatra, Google Maps, JQuery, Ajax, CSS, HTML, PostgreSQL"
    }
  ]
}

var education =  {
 	"schools": [{
 			"name": "Dev Bootcamp",
 			"degree": "Full Stack Web Developer",
 			"dates": 2016,
      "location": "San Francisco, CA"
 		},

 		{
 			"name": "The New Teacher Project",
 			"degree": "7-12th Secondary Mathematics Certification",
 			"dates": 2012,
      "location": "Washington, DC"
 		},

 		{
 			"name": "Unversity of California, Santa Barbara",
      "degree": "BA",
      "majors": ["Political Science", "Philosophy"],
 			"dates": 2011,
      "location": "Santa Barbara, CA"
 		}
 	],

  "onlineCourses": [
    {
      "title": "Javascript Basics",
      "school": "Udacity",
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }
  ]
}

function displayBio(){
	// $('#header').append(HTMLskillsStart);
	var formattedName = HTMLheaderName.replace("%data%", "Arlene Perez");
	var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.LinkedIn);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$('#header').prepend(formattedName);
	$('#header').append(formattedRole);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedLocation);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLinkedIn);
	$('#header').append(formattedPic);
	$('#header').append(formattedMessage);
}

displayBio();

var formattedSkills = HTMLskills.replace("%data%", "Software Developer");

if(bio.skills != 0) {
  $('#header').append(HTMLskillsStart);

  for(var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkills);
  }
}

function displayWork() {
  for(job in work.jobs){

    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle
    $('.work-entry').append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
    $('.work-entry').append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $('.work-entry').append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $('.work-entry').append(formattedDescription);
  }
}

displayWork();

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
})


function inName(name){
    var finalName = name;
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

$('#main').append(internationalizeButton);

projects.display = function() {
  for(project in projects.projects){

    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $('.project-entry:last').append(formattedDescription);
  }
}
projects.display();

function displayEducation() {
  for(school in education.schools){

    $('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $('.education-entry').append(formattedSchoolName);
	}
}
displayEducation();

$('#mapDiv').append(googleMap);
