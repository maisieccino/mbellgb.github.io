---
title: BrewTube
project_url: https://devpost.com/software/brewtube
description: Journey updates from the comfort of your coffee cup.
img: /assets/img/brewtube.jpg
imgalt: "A photo of the Paulig Muki mug, displaying the current service update for the Metropolitan Line"
date: "2017-03-12 12:00+00:00"
---

BrewTube is an app that uses the Paulig Muki smart coffee mug to fetch real-time
service updates from Transport For London's API. The app allows you to find your
mug and specify a line to display updates from, sending the result to the Muki's
e-paper display.

Since I'm actually using this in my day-to-day life, I aim to make some
improvements to this app. However, I have exams and won't be using it this
summer (won't be in the city!), so don't expect much progress until late
August/September.

# How I built it

The Paulig Muki mug is a commercially available coffee mug that I acquired from
the 2016 edition of Junction, in Helsinki. I used Paulig's Java library which
exposed an API for their mug, and integrated this into a rather simple Android
app. The app sends a HTTP request to TFL's open API, which returns the status of
the given line. With this, I then used Java's built in drawing library to create
a bitmap, which uses the TFL logo and their font, and sent this to the mug over
Bluetooth.

# Challenges

* The mug isn't the most reliable when it comes to power; since it is charged by
  the heat of the beverage, it can sometimes take a while for it to warm up and
  for the phone to connect.
* I spent a really long time learning how to use the Java drawing library and
  adapting it for my task.
* I was working solo, so had the challenge of not having any help.
* Although I had prior experience using Java (including comprehensive stufy of
  its concurrency and networking features), I had no experience whatsoever of
  the inner workings of an Android app and learnt it all from scratch over the
  course of the weekend. I learned a lot though!

# Learn more

<a href="https://github.com/mbellgb/sh17" class="button"><i data-feather="github"></i>
Code</a>
