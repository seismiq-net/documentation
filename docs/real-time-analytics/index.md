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

Every QuakeSaver sensor is equipped with a quad-core CPU and plenty of RAM to process your seismic data in real-time in the field. This allows **continuous and real-time seismic data analysis** carried out on the _edge_. This paves the road for communication of high-level data products directly from the sensors. All of these single-station data products can be calculated continuously on the device.

Particularly large network deployments can profit by carrying out signal processing on the edge, while keeping traditional real-time waveform streams like [SeedLink](../features/realtime-waveforms.md#seedlink). Further delivery of high-level data products improves **reliability of the network** and enables **fast decision making**.

The flexible architecture allows a simple extension with **custom plug-ins** tailored to meet your data processing needs. Plug-ins can be upgraded seamlessly on existing sensor deployments through [over-the-air](../features/system-integrity.md#over-the-air-ota-updates) updates.

::: tip
:construction: The real-time processing pipelines are developed. We currently are in the process of implementing various advanced signal processing plugins on QuakeSaver Sensors.
:::

::: tip Contact
If you want more information or have ideas, reach out to us at <info@quakesaver.net> :e-mail:
:::

## PGA / PGV
Peak Ground Acceleration (PGA) and Peak Ground Velocity (PGV) are simple yet robust indicators used to characterize ground shaking and structural health monitoring. On-device restitution on QuakeSaver MEMS and Coil sensors enables continuous calculation of these critical parameters in real-time.

## JMA Shindo
The [Japanese Meteorological Agency intensity scale](https://en.wikipedia.org/wiki/Japan_Meteorological_Agency_seismic_intensity_scale) (aka _Shindo_) is an instrument intensity measure. It is the de facto standard used for ground shaking analysis in Japan. QuakeSaver sensors continuously calculate the Shindo instrument intensity to enable accelerate decision making processes after large earthquakes.

## Spectral Intensity
Spectral Intensity (SI) and spectral acceleration are measures of the energy in an adjustable limited frequency band. QuakeSaver sensors can calculate these data products continuously.

## Outlook :rocket:

We are researching more single station real-time signal processing extension:

* Continuous PPSD
* Continuous H/V
* Continuous Station Autocorrelation
* EQ Phase Identification and Characterization

Once plug-ins are integrated they will be rolled out through over-the-air updates.
