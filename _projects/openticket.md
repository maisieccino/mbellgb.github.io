---
title: Openticket
project_url: https://org.openticket.tech/
description: A dead simple ticketing platform ready to host on your own system.
img: /assets/img/openticket.jpg
date: "2017-10-10 12:00+00:00"
---

Openticket (previously Easyticket) is a self hosted events platform powered by Node.JS.

# Inspiration

While working on the [TechSoc](http://techsoc.io) committee, I noticed that
the majority of student societies, meetups and events had to rely on one of a
small selection of proprietary ticketing providers that do not offer a lot of
flexibility. I started the Openticket project because I want to give student
societies and other small organisations control over how tickets for their
own events are managed. The main targets for the project are:

* A powerful RESTful API that can be used to access and control most of the
  system, allowing organisations to roll their own interfaces if they wish.

* A simple yet graceful reference interface, that can be customized with the
  owners' own branding.

* A highly configurable storefront that can be modified to the owners' desires,
  using a sane templating system (most likely Liquid).

* Ability to work with payment providers like Stripe, Braintree, etc.
  (Openticket won't have its own API key for these services however).

* (Possibly) a mobile app to allow for fast check-in for both attendees and
  organisers.

# Progress So Far

So far, I've been busy working on the modelling side of things as well as
setting up a server with Node.JS. I've been somewhat hindered by life and
university work, so my aim right now is to set up a framework to help others
contribute to the platform.

Honestly right now it doesn't feel like I've gone about creating the project
in the right way, so I'm going to try to seek advice from people who have had
experience setting up an open source project and learn from them. If you have
any tips or want to help, I'd love to hear from you! Either use my contact
information at the bottom of this page, or create an issue in the [meta
repository](https://github.com/open-ticket/openticket-meta).

# Archived projects

My previous efforts on Openticket can be found on the following repositories:

* [Rails archive](https://github.com/mbellgb/easyticket-rails-archive)
* [Node.JS archive](https://github.com/mbellgb/easyticket-node)
