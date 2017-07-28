---
title: Hatch Portal
project_url: https://github.com/hatch-ucl/hatch-site
description: Bespoke online portal for an upcoming hackathon.
img: /assets/img/hatch-site.png
---

# Background
Hatch is a hackathon being planned for November 2017 at University College
London. The aim of the hackathon is to provide a learning experience that is fun
and rewarding for both coders and non-coders alike, as well as focusing on
closing in the gender balance in the tech industry.

# Hatch Portal
The Hatch online portal is a webapp that allows attendees to log in and keep
track of their progress completing our coding courses. In addition to this,
the system also allows attendees to get live updates and information about the
event, including a timeline of events, venue map/help, and registering for
submitting their projects. Finally, we're planning on adding a mentoring system
to the app, so that attendees can request help from our awesome team of mentors.

Below is a screenshot of a very early work in progress design of the home
screen. As you can see, it's currently just a mockup and isn't yet fetching data
from the server.

![A screenshot of the app alongside some of the source code](/assets/img/hatch-code.png)

# The Tech

## Server
We're using a Ruby On Rails server to serve up the front end app, as well as
providing a JSON API that the app can use to fetch and send data to and from.
We're also planning on using the `ActionCable` library for instantaneous data
transfer (for instance for chat messages).

## Frontend
The frontend is written using the React and Redux libraries. We're serving the
app straight from the Rails server, although it is purely client-side rendered
to try and prevent the server from being overloaded during the hackathon!
The design is responsive and is based upon a branding document provided by the
wonderful people at [SheCanCode](//shecancode.io).

The user interface was mainly designed by me, and the design will continue to
change as the app evolves. I'm looking forward to seeing how the app progresses
as me and the rest of the team work on it!

# Demo
I'll create a demo further down the road once we have more of the app developed.
