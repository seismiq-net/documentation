Command Line Interface
======================

Our open-source [`sqcli`](https://github.com/seismiq-net/sqcli) is a small,
cross-platform command line tool for working with your SeismiQ sensors straight
from the terminal — no browser required.

It ships as a single self-contained binary for **Debian/Ubuntu**, **Linux**,
**macOS (Apple Silicon)** and **Windows**. Grab it from the
[latest release](https://github.com/seismiq-net/sqcli/releases).

## What it can do

- **`detect`** — discover SeismiQ sensors on your **local network** by scanning
  your subnet. Works offline and needs no authentication.
- **`sensors`** — list the sensors registered to your SeismiQ account via the
  cloud API, showing hardware type, UID, software version and when each was
  last seen.
- **`action <action> <sensor-uid>`** — send a remote command to a single
  sensor: `reboot`, `blink` (to physically locate a unit), or `check-update`.

The `sensors` and `action` commands talk to the SeismiQ cloud API and need
credentials, set via the `SEISMIQ_USERNAME` and `SEISMIQ_PASSWORD` environment
variables (a local `.env` file is also picked up).

::: tip
See the **[repository README](https://github.com/seismiq-net/sqcli)** for
installation details and the full command reference.
:::

## Example

```shell
# Find sensors on your LAN
sqcli detect

# List the sensors on your account
sqcli sensors

# Blink a sensor's LED to locate it
sqcli action blink A3B7K9Q2
```
