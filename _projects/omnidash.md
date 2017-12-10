---
title: Omnidash
project_url: https://github.com/hatch-ucl/hatch-site
description: Online event dashboard initially built as a bespoke project for a hackathon.
img: /assets/img/omnidash.png
imgalt: "Omnidash screenshot, showing the event detail page with event info and a list of the upcoming schedule"
---

# About

Omnidash is an open source events dashboard built in Ruby on Rails and React. It
was primarily built for managing hackathons (primarily the Hatch hackathon), but
since the Hatch branding was removed, it could be used for pretty much any large
event.

# History

## Hatch Portal

Hatch was a hackathon that ran in late November 2017 at University College
London. The aim of the hackathon was to provide a learning experience that is
fun and rewarding for both coders and non-coders alike, as well as focusing on
closing in the gender balance in the tech industry. It was run by the teams at
[UCL Entrepreneurs](http://ucle.co) and [She Can Code](https://shecancode.io)

The Hatch online portal is a webapp that allows attendees to log in and keep
track of their progress completing our coding courses. In addition to this, the
system also allows attendees to get live updates and information about the
event, including a timeline of events, venue map/help, and registering for
submitting their projects. Finally, we're planning on adding a mentoring system
to the app, so that attendees can request help from our awesome team of mentors.

Below is a screenshot of a very early work in progress design of the home
screen. As you can see, it's currently just a mockup and isn't yet fetching data
from the server.

![A screenshot of the app alongside some of the source code](/assets/img/hatch-code.png)

## Building the API and improving the front end design

# The Tech

## Server

We're using a Ruby On Rails server to serve up the front end app, as well as
providing a JSON API that the app can use to fetch and send data to and from.
We're also planning on using the `ActionCable` library for instantaneous data
transfer (for instance for chat messages).

## Frontend

The frontend is written using the React and Redux libraries. We're serving the
app straight from the Rails server, although it is purely client-side rendered
to try and prevent the server from being overloaded during the hackathon! The
design is responsive and is based upon a branding document provided by the
wonderful people at [SheCanCode](//shecancode.io).

The user interface was mainly designed by me, and the design will continue to
change as the app evolves. I'm looking forward to seeing how the app progresses
as me and the rest of the team work on it!

# Demo

I'll create a demo further down the road once we have more of the app developed.
