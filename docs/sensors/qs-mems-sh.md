---
tags:
  - mems
  - structural health monitoring
  - strong motion
  - vibration
  - ip68
  - poe
---

# SeismiQ MEMS-SH

The SeismiQ MEMS-SH is a 3-component accelerometer for continuous vibration, structural health, and strong-motion monitoring. It uses the same MEMS sensing chain, firmware, and data interfaces as the SeismiQ MEMS, packaged in an IP68 structural enclosure and powered through PoE or a direct DC supply.

::: tip Quick Facts

* **3-component 20-bit MEMS** accelerometer with selectable ±2 g, ±4 g, or ±8 g range.
* Flat frequency response from **0 Hz to 100 Hz** and selectable sampling from **40 SPS to 500 SPS**.
* **Ethernet** connectivity with **PoE at 48 V** or **9–48 V DC direct** power.
* [Time synchronization](../features/timing.md) through tailored NTP with sub-millisecond accuracy.
* **IP68 structural enclosure** for exposed and outdoor mounting positions.
* Operating and storage temperature from **−20 °C to +70 °C**.

:::

<img src="./mems-sh.jpg" alt="SeismiQ MEMS-SH structural sensor" class="center" width="60%" />

Figure: SeismiQ MEMS-SH accelerometer for structural vibration and strong-motion monitoring.

## Structural Monitoring

MEMS-SH supports continuous vibration monitoring and strong-motion recording from the same installation. On-device spectral processing can track structural resonance frequencies over time, while acceleration waveforms record earthquake, blasting, piling, and other vibration events for subsequent engineering interpretation.

## Sensor and Acquisition

| Specification | Value |
|---|---|
| Type | 3-component MEMS accelerometer |
| ADC resolution | 20-bit |
| Acceleration range | ±2 g, ±4 g, or ±8 g, selectable |
| Self-noise | 22 μg/√Hz |
| Frequency response | 0–100 Hz, flat |
| Sampling rate | 40–500 SPS, selectable |

## Connectivity, Power, and Timing

| Specification | Value |
|---|---|
| Network | Ethernet |
| Power | PoE 48 V, or 9–48 V DC direct |
| Time synchronization | Tailored NTP, sub-millisecond |

The network connection carries waveform data and can also power the instrument through PoE. For timing details, see [Timing and Synchronization](../features/timing.md).

## Enclosure and Environment

| Specification | Value |
|---|---|
| Enclosure | Structural enclosure |
| Ingress rating | IP68 |
| Operating temperature | −20 °C to +70 °C |
| Storage temperature | −20 °C to +70 °C |

## Processing, Storage, and Data Access

| Specification | Value |
|---|---|
| Processor | Quad core |
| Storage | Industrial pSLC NAND |
| Firmware | Customizable SeismiQ firmware with OTA A/B updates |
| Data access | SeedLink v3, FDSN WebService, StationXML |
| Real-time products | PGA/PGV, instrument intensities, PPSD, H/V spectra |

See [Real-time Analytics](../real-time-analytics/), [SeedLink](../features/seedlink.md), [FDSN Web Services](../features/fdsnws.md), and [Meta Data](../features/meta-data.md) for the shared platform capabilities.
