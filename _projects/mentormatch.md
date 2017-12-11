---
title: Atos Mentor Match
project_url: http://students.cs.ucl.ac.uk/2016/group19/
description: Server and app to connect company mentors with mentees.
img: /assets/img/mentormatch.png
imgalt: "Three screenshots showing the mentor matching app. Left: The home screen showing available programs. Middle: A page showing information about a certain program. Right: The signup page for the program"
date: "2017-04-26 12:00+00:00"
---

Atos Mentor Match is my second year university project, which I worked on
alongside two other computer science students, for Atos UK & Ireland. The brief
put forward to us was to provide a system to allow employees to sign up for
internal mentorship programs as mentors or mentees, and the system would
automatically match them based on interests and their role in the company.

# The System

## Architecture

![The architecture of the system. The backend is connected to the frontend via a JSON API. The backend itself comprises of an API router, a ViewController, and object models which interact with the database.]({{site.url}}/assets/img/mentormatch-arch.png)

Essentially, the system was broken down into two main parts -- a web app that
could run on mobile devices, and an API server. This meant that not only could
we potentially build many different apps for different devices, it would also
allow developers to create projects on top of our system -- a great way to
encourage engagement of the system. Naturally, the API is protected using OAuth
so that user data is kept as secure as possible.

# My Role

## API

I was the exclusive API server developer and didn't work on the web app, which
meant that I was responsible for designing, testing and then implementing the
API server for the project. It was written using the Django Rest Framework after
consulation with the team, which meant that I had to learn how to write code in
Python from scratch. It was a very interesting experience, but I'm not sure if
Django is the right framework for me -- although I do appreciate the extremely
simple testing.

## DevOps

I was also responsible for deploying and maintaining our API staging server.
Since we were taking an "agile" approach to the project as recommended by our
client, it was best for us to use continuous integration as much as possible,
which meant running a live API server that the rest of the team could use to
connect the app to.

My solution was to set up a virtual server and add a Git remote repository,
which would refresh the server when code was pushed to it. The GitHub repository
was connected to Travis CI, a platform which allowed me to run tests on code
pushed to GitHub inside its own secured container and give a build result
(pass/fail). I configured Travis to Git push any commit on the master branch
that passed testing to the server, and also prevented pull requests from being
merged unless their integration builds passed.

In effect, this meant that the testing server had an extremely high availability
which I was extremely proud about.

# Challenges

* Learning Python from scratch: I essentially sat in the pilot's seat without
  being able to fly a plane. It was quite an experience but I managed in the
  end.
* Integration issues between app and server: We had to tackle a handful of
  issues relating to things like CORS and response codes.
* Writing documentation: This was the first time that I had to write thorough
  documentation for my project and actually think about things like response
  codes, data types and HTTP nouns. I came out at the end learning a lot about
  this area of the development lifecycle.
* Test-driven development: This was also the first project in which I followed
  the test-driven development (TDD) ideology. It meant that I had to write a
  bunch of tests before actually implementing the code, which meant that I had a
  much clearer picture of how my code should be working, and also was very
  helpful when debugging code.

# Learn more

<div class="buttons">
<a href="https://github.com/mbellgb/syseng19-code" class="button"><i data-feather="github"></i> API Server Code</a>
<a href="https://github.com/mbellgb/syseng19-webapp" class="button"><i data-feather="github"></i> Web App Code</a>
<a href="https://www.youtube.com/watch?v=9sjhS78iOyU" class="button"><i data-feather="video"></i> Video Demo</a>
<a href="https://travis-ci.org/mbellgb/syseng19-code/" class="button"><i data-feather="check-circle"></i> Continuous Integration</a>
</div>
