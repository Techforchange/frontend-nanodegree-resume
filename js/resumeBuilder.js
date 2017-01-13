
var formattedName = HTMLheaderName.replace("%data%", "Arlene Perez");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");

$('#header').prepend(formattedName);
$('#header').append(formattedRole);

var bio = {
	"name": "Arlene Perez",
	"role": "Software Developer",
	"contact information": {
		"email": "arleneperezsb@gmail.com",
		"phone": "562-322-1545",
		"location": "Los Angeles",
		"Github": "https://github.com/Techforchange",
		"LinkedIn": "https://www.linkedin.com/in/arleneperez-techforchange"
	},
	"welcomeMessage": "Curious about technology, fast learner, always trying to make a difference",
	"skills": ["JavaScript", "AJAX", "HTML", "CSS", "Ruby", "Ruby on Rails", "Nokogiri"]
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
 			"certification": "Full Stack Web Developer",
 			"dates": "August 2016 - December 2016"
 		},

 		{
 			"name": "The New Teacher Project",
 			"certification": "7-12th Secondary Mathematics Certification",
 			"dates": "August 2011 - June 2012"
 		},

 		{
 			"name": "Unversity of California, Santa Barbara",
 			"degrees": ["Political Science", "Philosophy"],
 			"dates": "September 2006 - March 2011"
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

var formattedSkills = HTMLskills.replace("%data%", "Software Developer");

if(bio.skills != 0) {
  $('#header').append(HTMLskillsStart);

  for(var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkills);
  }
}

if(bio.skills != 0) {
  $('#header').append(HTMLskillsStart);

  for(var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkills);
  }
}
