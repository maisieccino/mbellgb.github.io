---
title: Chromelexa
project_url: https://devpost.com/software/chromelexa
description: Control your browser with your Alexa device.
img: /assets/img/chromelexa.jpg
imgalt: "A photo of an Amazon Echo, behind a laptop displaying the Chromelexa plugin"
date: "2017-03-04 12:00+00:00"
---

Chromelexa is an Amazon Alexa skill and a Google Chrome extension which pair
together to allow you to control your browser with voice commands. Saying simple
things like, "open a new tab", "scroll down", and "load Facebook", and
Chromelexa will carry it out for you.

# How we built it

The system uses four main parts: An Alexa skill, an AWS Lambda function that
handles the skill, a webserver, and a Chrome extension.

The Alexa skill simply allows the user to dictate commands, and the Lambda
function processes these. The function then sends the command to the webserver
(in a HTTP POST request). This webserver runs a Socket.io server, and when it
receives a command from the Lambda function, it emits an event to the Chrome
extension containing the command. The extension receives this event, processes
the command, then runs it on the current browser tab.

# Learn more

<div class="buttons">
<a href="https://github.com/Nedervino/HackUPC" class="button"><i data-feather="github"></i> Code</a>
<a href="https://www.youtube.com/watch?v=iCnNRsLW0ns" class="button"><i data-feather="video"></i> Video Demo</a>
</div>
