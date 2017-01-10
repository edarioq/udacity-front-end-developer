/*
 * 4 JavaScript objects containing Bio, Education, Work and Projects, used to populate HTML
 */
var bio = {
    "name": "Edgar Quintero",
    "role": "Web Developer",
    "contacts": {
        "mobile": "316.520.8890",
        "email": "edarioq@gmail.com",
        "twitter": "@edarioq",
        "github": "edarioq",
        "blog": "edgarquintero.me",
        "location": "Bogotá",
    },
    "welcomeMessage": "Writing beautiful code is as much a science as it is an art form.",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "SASS", "Gulp", "Git", "WordPress", "SEO", "Google Analytics"],
    "biopic": "images/me.jpg",
    "display": function() {

        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

        $.each(bio.contacts, function(key, value) {
            $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', key).replace('%data%', value));
            $('#footerContacts').append(HTMLcontactGeneric.replace('%contact%', key).replace('%data%', value));
        });

        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        $('#header').append(HTMLskillsStart);
        $.each(bio.skills, function(value) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[value]));
        });

    }
};

var education = {
    "schools": [{
        "name": "Politécnico Grancolombiano",
        "location": "Bogotá",
        "degree": "Systems Engineer",
        "majors": ["N/A"],
        "dates": "2012-2014",
        "url": "https://www.poli.edu.co",
    }, {
        "name": "Norcross High School",
        "location": "Atlanta, GA",
        "degree": "N/A",
        "majors": ["N/A"],
        "dates": "2000-2004",
        "url": "https://www.google.com",
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "October 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    }, {
        "title": "JavaScript",
        "school": "CodeAcademy",
        "dates": "June 2015",
        "url": "https://www.codecademy.com/learn/javascript",
    }],
    "display": function() {
        // Education
        $.each(education.schools, function(i) {
            $('#education').append(HTMLschoolStart);

            var sName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
            var sDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var sDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            var sLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var sMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);

            $('.education-entry:last').append(sName + sDegree + sDates + sLocation + sMajors);

        });

        // Online courses
        $('#education').append(HTMLonlineClasses); //Header

        $.each(education.onlineCourses, function(i) {
            $('#education').append(HTMLschoolStart);

            var courseTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
            var courseSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
            var courseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
            var courseUrl = HTMLonlineURL.replace('#', education.onlineCourses[i].url).replace('%data%', education.onlineCourses[i].url);

            $('.education-entry:last').append(courseTitle + courseSchool + courseDates + courseUrl);
        });
    }
};

var work = {
    jobs: [{
        "employer": "Webprodo",
        "title": "Web Developer",
        "location": "Remote",
        "dates": "December 2015 - Present",
        "description": "Design, tecnology, digital strategy, and data " +
        "services to both small local businesses and various startups " +
        "around the world."
    }, {
        "employer": "BlackSip",
        "title": "SEO Strategist",
        "location": "Bogotá",
        "dates": "June 2015 - November 2015",
        "description": "Ecommerce digital marketing agency and technology " +
        "focused startup."
    }, {
        "employer": "GroupM",
        "title": "SEO Executive",
        "location": "Bogotá",
        "dates": "January 2013 - December 2014",
        "description": "Largest Media Investment Group in the world."
    }, {
        "employer": "Intergrupo Digital",
        "title": "SEO Specialist",
        "location": "Bogotá",
        "dates": "June 2010 - July 2013",
        "description": "Colombian Multinational Company specializing in " +
        "Software, Infrastructure, Cloud Computing, Business Intelligence " +
        "and of couse Digital."
    }],
    "display": function() {

        $.each(work.jobs, function(job) {
            $('#workExperience').append(HTMLworkStart);

            var myJobs = work.jobs[job];

            var myEmployer = HTMLworkEmployer.replace('%data%', myJobs.employer);
            var myTitle = HTMLworkTitle.replace('%data%', myJobs.title);
            var myDates = HTMLworkDates.replace('%data%', myJobs.dates);
            var myLocation = HTMLworkLocation.replace('%data%', myJobs.location);
            var myDesc = HTMLworkDescription.replace('%data%', myJobs.description);

            $('.work-entry:last').append(myEmployer + ' ' + myTitle + myDates + myLocation + myDesc);
        });

    }
};

var projects = {
    projects: [{
        "title": "Prohumanos Consultores LTDA",
        "dates": "December 2016",
        "description": "Custom website coded in HTML, CSS (SASS), JS (jQuery), PHP, Gulp, Git, and WordPress.",
        "images": ["images/project-prohum-1.png", "images/project-prohum-2.png"],
    }, {
        "title": "Alliance BJJ",
        "dates": "November 2016",
        "description": "Custom website coded in HTML, CSS (SASS), JS (jQuery), Gulp, and Git",
        "images": ["images/project-alliance-1.png", "images/project-alliance-2.png"],
    }, {
        "title": "Life 72",
        "dates": "October 2016",
        "description": "Custom website coded in HTML, CSS (SASS), JS (jQuery), PHP, Gulp, Git, and WordPress",
        "images": ["images/project-life-1.png", "images/project-life-2.png", "images/project-life-3.png"],
    }, {
        "title": "Ruber Almanza",
        "dates": "September 2016",
        "description": "Custom website coded in HTML, CSS (SASS), JS (jQuery), PHP, Gulp, Git, and WordPress",
        "images": ["images/project-ruber-1.png", "images/project-ruber-2.png", "images/project-ruber-3.png"],
    }],
    "display": function() {

        $.each(projects.projects, function(project) {
            $('#projects').append(HTMLprojectStart);

            var projectss = projects.projects[project];

            var projectTitle = HTMLprojectTitle.replace('%data%', projectss.title);
            var projectDates = HTMLprojectDates.replace('%data%', projectss.dates);
            var projectDescription = HTMLprojectDescription.replace('%data%', projectss.description);

            $('.project-entry:last').append(projectTitle + projectDates + projectDescription);

            $.each(projectss.images, function(i) {
                var theImage = HTMLprojectImage.replace('%data%', projectss.images[i]);
                $('.project-entry:last').append(theImage);
            });

        });

    }
};

bio.display();
work.display();
projects.display();
education.display();

/*
 * Build and show the map
 */
function displayMap() {
    $('#mapDiv').append(googleMap);
}

displayMap();
