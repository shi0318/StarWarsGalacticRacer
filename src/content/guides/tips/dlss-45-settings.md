---
title: "Star Wars Galactic Racer DLSS 4.5 and PC Settings"
heading: "DLSS 4.5, drivers, and the PC baseline"
description: "What Star Wars Galactic Racer actually confirms about DLSS 4.5, ray-traced lighting, drivers, SSD storage, and safe launch-day PC checks."
category: tips
status: official
preRelease: false
order: 21
cover: "/images/swgr-cockpit-pilot.webp"
updatedAt: "2026-10-15"
sources: []
---

<figure>
  <img src="/images/swgr-cockpit-pilot.webp" alt="A pilot in the Star Wars Galactic Racer cockpit during a high-speed run" width="1600" height="900" loading="lazy" decoding="async" />
</figure>

Star Wars Galactic Racer launched with NVIDIA **DLSS 4.5**, including Super Resolution and Dynamic Multi Frame Generation, plus hardware-accelerated ray-traced Lumen lighting and Ray Reconstruction. Those are the features the launch announcement names. It does not publish a universal preset or a guaranteed frame rate, so the useful settings guide starts with the hardware and the driver rather than an invented FPS target.

## Check the shipped PC baseline

| Tier | CPU | Memory | GPU | Storage |
| --- | --- | ---: | --- | --- |
| Minimum | Intel i5-8400 / Ryzen 5 2600 | 12 GB | RTX 2060 / Arc A580 / RX 5600 XT 6 GB | 50 GB SSD |
| Recommended | Intel i7-10700 / Ryzen 7 3700X | 16 GB | RTX 3060 Ti / Arc B580 / RX 6700 XT | 50 GB SSD |

Both tiers require Windows 10 and an SSD. A hard drive with 50 GB free does not satisfy the listed storage requirement, and adding memory cannot replace the GPU tier.

## A safe first boot

1. Install the current graphics driver before diagnosing a black screen. The [launch driver hotfix](/driver-hotfix/) raised the minimum driver requirement; an old driver can look like a game bug.
2. If your NVIDIA card exposes DLSS 4.5, start with Super Resolution and test a short Arcade event. Turn on frame generation only after input latency feels acceptable in a straight run.
3. Treat ray-traced Lumen as the expensive switch. If a race stutters, lower the lighting or reconstruction path before dropping the entire output resolution.
4. Keep the 50 GB install on an SSD and rebuild shaders after a driver change if the first race hitches.

The second step is a compatibility check, not a promise that every card in the minimum table can use DLSS. Intel and AMD are in the official baseline, while DLSS is NVIDIA’s feature. Those are separate facts.

## Match the setting to the symptom

- **Black screen between races:** check the driver, then use the [HDR and black-screen checklist](/hdr-black-screens/). Do not treat a temporary transition hang as a failed save until the file is checked.
- **One or two small hitches:** compare with the [race-stutter notes](/tips/race-stutters/). A brief hitch every few races is a different report from a boot-check failure.
- **Blown-out HDR:** turn HDR off for one test run, then compare the image. The game’s HDR path and DLSS path are separate toggles; changing one does not prove the other is broken.

Do not quote a single “best” preset for every PC. The shipped requirements, the DLSS feature flag, the driver hotfix, and the symptom-specific checks are the reproducible parts of the launch build.
