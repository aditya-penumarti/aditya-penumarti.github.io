---
layout: page
permalink: /research/
title: Research
description: Planning and perception for robots that must act under uncertainty without GPS.
nav: true
nav_order: 1
---

<div class="teaching-section" markdown="1">

## Vision

{% capture v %}{% include research_vision.md %}{% endcapture %}{{ v | markdownify }}

</div>

<div class="teaching-section" markdown="1">

## Research Threads

<figure class="thrust-figure">
  <img src="{{ '/assets/img/research-thrusts.png' | relative_url }}" alt="Left to right: Thrust 1 Model, representing what the robot does not know, shown as an uncertain map; Thrust 2 Information, a belief that narrows after measurement; Thrust 3 Decision, a safe path chosen around an obstacle to a goal. An arrow labeled New Measurements returns from the decision back to the model." loading="lazy">
  <figcaption class="caption">Three thrusts form a loop: model the uncertainty, value information against it, decide under risk, then measure again.</figcaption>
</figure>

<div class="research-thread">
  <img class="preview z-depth-1 rounded" src="{{ '/assets/img/publication_preview/BEAMM_cropped.webp' | relative_url }}" alt="Magnetic field map built by a ground robot, with the uncertainty of the map quantified" loading="lazy">
  <div markdown="1">

### Thrust 1: Representing What the Robot Does Not Know

Maps and sensor models that say how uncertain they are. BEAMM builds expandable magnetic field maps with calibrated uncertainty, a neural magnetometer model supports virtual testing, and multimodal RGB and sonar work (calibration and the uScenes dataset) gives underwater robots richer representations to reason over.

[BEAMM](https://beamm-map.github.io) · [SciTech 2025](/publications/#penumarti2025neural) · [Sonar calibration](/publications/#penumarti2026calibration) · [uScenes](/publications/#dong2026uscenes)

  </div>
</div>

<div class="research-thread">
  <img class="preview z-depth-1 rounded" src="{{ '/assets/img/publication_preview/InfoMagNav.webp' | relative_url }}" alt="Simulation of a robot choosing a path through a magnetic field map to reduce its localization uncertainty" loading="lazy">
  <div markdown="1">

### Thrust 2: Active Perception and the Value of Information

Deciding where to sense, not just where to go. HALo characterizes how field gradients determine localizability, and my information-driven planner uses that to choose paths that keep the robot localized, improving localization accuracy by 5% and cutting failure rates by 34% over state-of-the-art methods.

[IEEE Access 2026](/publications/#penumarti2026real) · [Global planning preprint](/publications/#penumarti2024global)

  </div>
</div>

<div class="research-thread">
  <img class="preview z-depth-1 rounded" src="{{ '/assets/img/publication_preview/bcod.webp' | relative_url }}" alt="Diffusion-based trajectory planning that conditions on the robot's belief" loading="lazy">
  <div markdown="1">

### Thrust 3: Deciding Under Risk with Classical and Learned Planners

Turning belief into action, whether the planner is classical or learned. B-COD conditions a one-step diffusion planner on the robot's belief for real-time trajectories with just-enough sensing, and the real-time magnetic planner reduces compute by over 99%. Akule extends diffusion planning to multi-robot teams.

[CoRL 2025](/publications/#puthumanaillam2025belief) · [Project page](https://bcod-diffusion.github.io)

  </div>
</div>

<p class="systems-note" markdown="1">**Systems I have built to test these ideas:** the software stack for an underwater vehicle, a [gesture-driven diver-following controller](/publications/#zhang2025action), research drones, and an Isaac Sim digital twin.</p>

</div>

<div class="teaching-section" markdown="1">

## Collaborations

<div class="teaching-card" markdown="1">
### [Melkior Ornik's group](https://mornik.web.illinois.edu){:target="_blank"}
<div class="meta">University of Illinois Urbana-Champaign</div>
Joint work on belief-conditioned and multi-robot diffusion planning with students [Gokul Puthumanaillam](https://gokulp01.github.io){:target="_blank"} and [Manav Vora](https://manavvora.github.io){:target="_blank"}.
</div>

<div class="teaching-card" markdown="1">
### [Xiaomin Lin's group](https://xiaominlin.github.io){:target="_blank"}
<div class="meta">Electrical Engineering, University of South Florida</div>
Joint work on underwater sonar calibration and the uScenes dataset with students Trung Tien Dong and Zhenqi Wu.
</div>

<div class="teaching-card" markdown="1">
### [Autonomous Vehicles Lab (AVL)](https://avl.reef.ufl.edu){:target="_blank"}
<div class="meta">UF Research and Engineering Education Facility (REEF)</div>
Magnetic navigation work with Humberto Ramos and Kristy Waters (UF FLARE) and Kevin Brink (Air Force Research Laboratory, AFRL), connected through AVL. This work is supported by AFRL.
</div>

</div>
