---
layout: post
title:  "Perfecting Your Linux Setup"
date:   2017-07-11 00:35:50 +0100
categories: linux hacking
subtitle: "A full guide to tweaking Linux to run quickly, beautifully, and efficiently on a laptop that’s past its prime."
---

Over the past few weeks, I’ve been busy procrastinating between exams by
modifying and tweaking the Linux install on my laptop to be fast, efficient,
personal and pretty. As someone who uses their laptop almost daily for
note-taking, web browsing, and programming, it’s vital for me that my system
allows me to achieve what I want with a minimum of fuss.

Picking an operating system did not take long at all. I went straight to Arch
Linux, because I’m already very accustomed to the package system and ecosystem,
and it’s very straightforward as far as Linux distributions go. A solid
contender was NixOS, a distribution that is entirely managed by config files,
which apparently allows you to have a deterministic (same input = same output)
installation. I might have to give it a go in the future though!

This is almost definitely going to be a very long article, so I’m going to split
it into a few fundamental sections. Firstly, I’m going to describe my current
laptop’s setup and the design/aesthetic choices made. The aim is to give you,
dear reader, a real-world example of someone stumbling through all the
installation and setup steps and how to make something that’s more than just
nice to look at. Next, I’ll highlight some useful applications and the
fundamentals of configuring them. I’ll then provide a quick guide on making
design choices that work for you, for instance keyboard shortcuts, colours and
fonts. I’ll also make sure to mention how to keep your configuration files neat
and tidy. Finally, I’ll drop a bunch of links at the end of the articles for
more helpful, formal or articles that I just found very interesting.

# Act I: My setup (the HackTop)
![There's a few stickers...]({{ "/assets/img/perfecting-your-linux-setup/hacktop.png" | prepend: site.baseurl }})

If you’ve seen me at a hackathon before, you’ve probably seen my ghastly laptop
which is now chock-full of stickers for various companies, hackathons, events,
meetups and communities I’ve interacted with over the last two years (fun
trivia: I think the first sticker was for HackNotts). I mean although it’s kinda
ugly, it’s special to me because of the memories that come with the communities
the stickers represent. It quickly went from a cold, sleek ultrabook to being a
personal statement — and it turns plenty of heads (though not always in a good
way)!

The design of my interface was kinda similar. Rather than picking a ready-made
desktop environment for me to get straight to work on, I went down the path of
customising my own setup by putting together a whole range of programs. It’s not
going to be intuitive in the slightest for someone else too use, but importantly
it’s incredibly usable for me and me only. And I definitely think that if you
have the time and opportunity to set up your own personal working environment,
you’ll find it incredibly hard to go back. The need to tinker with configuration
files, testing colour schemes and writing scripts to achieve common tasks is a
very addictive hobby.
