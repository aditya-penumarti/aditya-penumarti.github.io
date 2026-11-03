---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate @ <a href='https://ufl.edu'>University of Florida</a> <a href='https://ufl.edu'><img class='subtitle-icon' src='/assets/img/about-icon.png' alt='University of Florida logo' width='20' height='20'></a>

profile:
  align: right
  image: Adi.jpeg
  alt: Aditya Penumarti standing with arms outstretched in front of a felled giant sequoia
  image_circular: false # crops the image to make it circular
  more_info: >
    <p><center>Me between a felled giant sequoia at Calveras Big Trees State Park, CA</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 8 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="open-to" markdown="0">
  <strong>Open to postdoctoral and faculty positions</strong> starting Fall 2027 (robot autonomy, planning under uncertainty, active perception). Reach me at {% al_email_protect_link site.contact_email %}.
</div>

{% assign counts = "" | split: "," %}{% assign total = 0 %}
{% for p in site.data.citations.papers %}{% assign counts = counts | push: p[1].citations %}{% assign total = total | plus: p[1].citations %}{% endfor %}
{% assign sorted = counts | sort | reverse %}{% assign h = 0 %}{% assign i10 = 0 %}
{% for c in sorted %}{% assign rank = forloop.index %}{% if c >= rank %}{% assign h = rank %}{% endif %}{% if c >= 10 %}{% assign i10 = i10 | plus: 1 %}{% endif %}{% endfor %}
{% assign m = site.data.citations.metadata %}
{% if m.citations %}{% assign total = m.citations %}{% assign h = m.h_index %}{% assign i10 = m.i10_index %}{% endif %}
<p class="scholar-metrics" markdown="0">
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}"><i class="ai ai-google-scholar"></i> Google Scholar</a>
  <span><strong>{{ total }}</strong> citations</span>
  <span><strong>{{ h }}</strong> h-index</span>
  <span><strong>{{ i10 }}</strong> i10-index</span>
  <small>as of {{ site.data.citations.metadata.last_updated | date: "%b %Y" }}</small>
</p>

I am a Ph.D. candidate at the University of Florida in the  Mechanical and Aerospace Engineering Department, where I study how robots can make good decisions when they can’t be sure where they are or what’s around them.
My research focuses on **planning under uncertainty** in **GPS-denied environments**, such as underwater or indoor environments. The overarching theme is *active perception*: my algorithms treat sensing as active, allowing them to choose to gather the information a robot needs to stay localized. This includes **belief-space planning**, **uncertainty-aware representations** of the environment, and **information-constrained planning** that decides how much sensing is enough. The algorithms I design have been tested on **underwater and ground robots** with support from the *Air Force Research Laboratory (AFRL)*.

I am advised by [Prof. Jane Shin](https://theaprilab.org/people/jane). I received my M.Sc from the University of Florida, working with [Prof. Carl Crane](https://mae.ufl.edu/people/name/carl-crane/) and [Prof. Michael Griffis](https://mae.ufl.edu/people/name/mike-griffis/). I received my B.Sc. from North Carolina State University.
 
I am deeply interested in teaching and mentoring. I co-developed an autonomous ground vehicle class at the University of Florida, built on 1/10 scale vehicle platforms, and I have mentored five undergraduate and master's students.

## Research Vision

{% capture v %}{% include research_vision.md %}{% endcapture %}{{ v | markdownify }}

See more on the [Research](/research/) page.
