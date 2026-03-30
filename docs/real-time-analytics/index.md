---
tags:
  - realtime
  - analysis
  - analytics
  - analyse
  - SI
  - innovation
---
# Real-time Analytics

SeismiQ is the **first seismic sensor platform to deliver edge processing and AI inference directly on the instrument**. Every sensor ships with a quad-core CPU and ample RAM — purpose-configured to run continuous seismic signal processing in the field, without relying on a central data center.

This edge-first architecture delivers three strategic advantages:

- **Reduced network load** — high-level data products are computed locally, not transmitted as raw waveform streams
- **Higher network reliability** — sensor nodes remain operationally useful even during intermittent connectivity
- **Faster decision making** — actionable metrics are available in real time, directly from the sensor

All plug-ins can be deployed and upgraded seamlessly across existing sensor fleets through [over-the-air updates](../features/system-integrity.md#over-the-air-ota-updates). Custom plug-ins can be developed to match your specific data processing requirements.

::: tip Contact Sales
Interested in a custom edge processing pipeline or a large-scale deployment? Reach out at <info@seismiq.net>
:::

## PGA / PGV

Peak Ground Acceleration (PGA) and Peak Ground Velocity (PGV) are robust ground shaking indicators used in earthquake response, structural health monitoring, and early warning systems. SeismiQ MEMS and HiDRA sensors perform continuous on-device restitution to deliver these parameters in real time.

## JMA Shindo

The [Japanese Meteorological Agency intensity scale](https://en.wikipedia.org/wiki/Japan_Meteorological_Agency_seismic_intensity_scale) (Shindo) is the de facto standard for ground shaking analysis in Japan. SeismiQ sensors calculate Shindo intensity continuously, enabling accelerated post-earthquake decision making for operators and emergency responders.

## Spectral Intensity

Spectral Intensity (SI) and spectral acceleration quantify energy in a configurable frequency band. Continuously calculated on-device, SI is widely used in engineering seismology and structural monitoring for rapid damage assessment.

## Probabilistic Power Spectral Density (PPSD)

Continuous PPSD computation on the sensor enables real-time and historical assessment of station noise conditions — without offloading raw data to a data center. This is valuable for long-term network quality control and site characterization.

## AI-powered Phase Identification

SeismiQ sensors run neural network-based earthquake phase identification developed in collaboration with [GFZ Potsdam](https://gfz-potsdam.de) and [University of Magdeburg](https://www.uni-magdeburg.de/en/). Trained on large seismological datasets, the on-device AI provides robust single-station P- and S-phase picks and earthquake characterization — entirely at the edge.

## Outlook

Further edge analytics plug-ins in development:

- **Continuous H/V** — real-time horizontal-to-vertical spectral ratios for site characterization and slope/structural failure precursor monitoring
- **Continuous Station Autocorrelation** — subsurface change detection for geothermal reservoir monitoring and critical infrastructure surveillance

All new plug-ins are rolled out to existing deployments via over-the-air updates at no hardware cost.
