---
layout: page
permalink: /teaching/
title: Teaching
description: Courses I co-developed, assisted, and guest-lectured, plus student mentoring at the University of Florida.
nav: true
nav_order: 3
---

<p class="teaching-statement"><a class="cv-btn cv-btn-primary" href="{{ '/assets/pdf/PenumartiAditya_TeachingStatement.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Teaching Statement (PDF)</a></p>

<div class="teaching-section" markdown="1">

## Course Development

<div class="teaching-card" markdown="1">

### EML4842C: Autonomous Vehicles
<div class="meta">Course Co-Developer · University of Florida · Fall 2022 (with Carl D. Crane III)</div>

- Co-developed the course with Prof. Carl D. Crane III.
- Designed and maintained the robotic vehicle platforms, and created assignments, projects, and lecture materials alongside the lecturer.
- Taught undergraduates autonomous navigation with GNSS and LiDAR on a 1/10th-scale autonomous vehicle platform running ROS 2.
- Course documentation: [av1tenth-docs.readthedocs.io](https://av1tenth-docs.readthedocs.io/en/latest/){:target="_blank"}

<div class="teaching-gallery">
  <figure class="wide"><img src="{{ '/assets/img/teaching/av-vehicle.jpg' | relative_url }}" alt="1/10th scale autonomous vehicle platform used in EML4842C" loading="lazy"><figcaption>The 1/10th-scale vehicle platform</figcaption></figure>
  <figure><img src="{{ '/assets/img/teaching/av-gps.jpg' | relative_url }}" alt="GNSS receiver used on the vehicle" loading="lazy"><figcaption>GNSS positioning</figcaption></figure>
  <figure><img src="{{ '/assets/img/teaching/av-lidar.jpg' | relative_url }}" alt="RPLidar sensor used on the vehicle" loading="lazy"><figcaption>LiDAR mapping and localization</figcaption></figure>
</div>

</div>
</div>

<div class="teaching-section" markdown="1">

## Teaching Assistant
<div class="meta">University of Florida · 2021–2023, 2025</div>

<div class="teaching-card" markdown="1">
### EML2023: Computer Aided Design
<div class="meta">Fall 2021, Summer 2025</div>
Graded assignments and held office hours.
</div>

<div class="teaching-card" markdown="1">
### EML6282: Robot Geometry II
<div class="meta">Spring 2022</div>
Graded assignments and held office hours.
</div>

<div class="teaching-card" markdown="1">
### EML3301C: Mechanics of Materials Lab
<div class="meta">Summer 2025</div>
Graded assignments and provided office hours.
</div>

</div>

<div class="teaching-section" markdown="1">

## UF-MAE Rapid Prototyping Facility
<div class="meta">Manager and Lab TA · Gainesville, FL · September 2021 – August 2023</div>

- Trained and managed student assistants in CNC machining and 3D printing to precise tolerances.
- Designed and built apparatus and experiments for undergraduate labs: Computer Aided Design, Mechanics of Materials Lab, and Dynamics and Controls System Laboratory.

</div>

<div class="teaching-section" markdown="1">

## Guest Lectures

{% assign lectures = "Uncertainty-Aware Motion Planning for Magnetic-based Navigation|EML6934: Sensor-Based Robot Planning|Spring 2026|magnav-planning-2026;Controllability|EML4312: Control of Dynamic Systems|Fall 2024|controllability-2024;Particle Filtering|EML6934: Sensor-Based Robot Planning|Spring 2024|particle-filtering-2024;Dead Reckoning|EML4842C: Autonomous Vehicles|Spring 2023|dead-reckoning-2023" | split: ";" %}
{% assign exts = "pdf,pptx" | split: "," %}
<ul>
{% for l in lectures %}{% assign f = l | split: "|" %}
  <li><strong>{{ f[0] }}</strong>, {{ f[1] }}, {{ f[2] }}{% for ext in exts %}{% capture slide_path %}/assets/pdf/slides/{{ f[3] }}.{{ ext }}{% endcapture %}{% assign has = site.static_files | where: "path", slide_path | first %}{% if has %} · <a href="{{ slide_path | relative_url }}" download>Slides ({{ ext | upcase }})</a>{% endif %}{% endfor %}</li>
{% endfor %}
</ul>

</div>

<div class="teaching-section" markdown="1">

## Mentoring

<div class="teaching-card" markdown="1">
**Zi-Hao Zhang**, master's and Ph.D. researcher (2024–present)<br>Learning-based tracking of divers and agents
</div>
<div class="teaching-card" markdown="1">
**Khanh Dong**, master's researcher (2026–present)<br>Computer vision and sonar calibration
</div>
<div class="teaching-card" markdown="1">
**Nikhil Iyer**, undergraduate researcher (2023–2026)<br>Magnetometer modeling and mapping; now a software engineer at AutoPCB
</div>
<div class="teaching-card" markdown="1">
**You-Long Wu**, master's researcher (2024–2026)<br>Multi-modal fusion; now a lecturer at the National Defense University, Taiwan
</div>
<div class="teaching-card" markdown="1">
**Loi Park**, undergraduate researcher (2024–2025)<br>Magnetometer modeling; now a senior in mechanical engineering at the University of Florida
</div>

</div>

<div class="teaching-section" markdown="1">

## Outreach

- FIRST Robotics mentor at P.K. Yonge High School: mentored students on robotic design and software development.
- First-Year Engineering presentation on the Department of Mechanical and Aerospace Engineering (2025).

</div>
