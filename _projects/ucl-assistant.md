---
title: UCL Assistant
project_url: https://github.com/mbellgb/ucl-assistant
description: A one-stop-shop for academic life at UCL, including finding lecturers, free rooms and library spaces.
img: /assets/img/ucl-assistant.jpg
imgalt: "Screenshots of UCL Assistant, showing (left to right): user's timetable for a given date, how many desks in a given library are free (along with a history data chart), and a list of all of the study spaces with an indicator showing how busy they are"
date: "2018-03-05 00:00+00:00"
---

# About

UCL Assistant is an open source app being built to help UCL students find the
information they need about their lectures, as well as room information
around campus. Your timetable is displayed clearly and beautifully on the
home page, allowing you to see when each event is and also see _where_ it is,
thanks to the map integration. The app also displays live information about
the many UCL libraries, using the under-desk IR sensors to show you exactly
how busy each library is. This will eventually be extended to show historic
and estimated information on how busy the libraries are/will be, as well as
heat maps showing you which rooms are the least busy -- making it more likely
for you to find a seat.

UCL Assistant is being made possible thanks to the amazing work of the [UCL
API](//uclapi.com) team, who have been invaluable in providing open data, as
well as providing technical support and implementing my feedback _back_ into
the API to improve it further for everyone.

The app will be available for both iOS and Android, as soon as I've fixed up
a bunch of bugs and finished a couple of features (and also improved the
servers). ETA is April 2018.

![UCL Assistant Logo](/assets/img/ucl-assistant-logo.png)

# Design

The design is a really important aspect of the project. Since it's aimed at
the entire student body, it's critical that the design is clear, nice to look
at, but is also humantistic and actually welcoming. Too many apps tend to
either be quite cold and dystopian, or they try and go over the top and build
an app which is just frustrating to use (not pointing any fingers at all...).

UCL Assistant isn't immune to this, so I'm trying to provide as much
opportunity as possible for to get feedback from anyone. App designs are
viewable on [Figma](https://www.figma.com/file/abLsyJWhUgU6qL5bFvGvwC5j/App),
and [this GitHub issue](https://github.com/mbellgb/ucl-assistant/issues/1) is
open for any design comments/feedback to be made. I'm also welcome to any
feedback provded through any of my [social media profiles](/contact)! :smile:

# Server Architecture

I'm very security conscious, so I'm making sure that the app servers store a
minimal amount of user data, if any at all. Currently the app does not
actually store any data (timetable requests are passed directly to UCL API
and returned back to the user); however I recognise that I might have to
store a user identifier on a server for a future push notifications service.
This would be completely opt-in though.

Authentication is achieved using JSON Web Tokens. They are really useful in
that all of the session state is stored inside the token, so our servers can
be shut down, replaced, and will still be able to process user requests. This
makes scaling much easier (and allows us to run the servers on a service like
AWS Lambda if we wanted to).

Shared data (library capacity information, room timetables) are cached on the
server with Redis. This limits the amount of strain we put upon the UCL API
for certain endpoints, and ensures that we can comfortably handle the
majority of the student body using the app concurrently. Hopefully I'll do a
blog post on this at some point in the future.

# Demo

Soon:tm:.

# Links

<div class="buttons"><a href="//github.com/mbellgb/ucl-assistant" class="button"><i data-feather="github"></i> Code</a>
</div>
