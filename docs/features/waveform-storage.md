---
tags:
  - sd card
  - storage
  - archive
  - waveforms
  - miniseed
---
# Waveform Archive

Additional to real-time waveform access the devices provision disk space for local waveform storage in MiniSeed format.
Here day-files can be stored for physical retrieval from the field.
This ensures that all recorded data is securely stored on a reliable storage medium on-site.

Depending on the sample rate the sensor and the equipped storage solution, the sensor can hold up to four years of 100 Hz data.

|       | 100 Hz  | 200 Hz   | 400 Hz   |
|-------|---------|----------|----------|
| **8 GB**  | 1 year  | 6 months | 3 months |
| **16 GB** | 2 years | 1 year   | 6 months |
| **32 GB** | 4 years | 2 years  | 1 year   |

High entropy noise will decrease the `STEIM` compression efficiency and result in a larger archive's size.

## Archive Configuration

The waveform recorder can be configured at *Waveform streaming > Waveform recorder*.

## Local Access and Download

To download data locally, e.g. from an offline sensor system, the SeismiQ MEMS is pre-configured to connect to a local WiFi network.
This network can be provided by a mobile hotspot or router.

::: tip WiFi Standard Configuration

* SSID / WiFi Name: `qsdebug`
* Password: `qs4debugging!!!`

:::

MiniSeed data can be downloaded from the sensor using `scp` or other SSH file transfer clients:

```sh
rsync -avz qssensor.local:/data/mseed_data .
```

The MiniSeed data will be organized in day files on the sensor.
