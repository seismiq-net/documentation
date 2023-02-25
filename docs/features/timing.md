
# Timing and Synchronization
Time synchronization of the instrument is crucial to ensure the quality of the seismic data stream. Our sensors offer a redundant
system using a combination of low-latency NTP and external GPS time stamping.

Furthermore, QuakeSaver sensors determine the intrinsic clock drift of the system in correlation with the ambient temperature to constantly
correct skew and correct the system's clock. The system will learn the clock drift and provide more accurate timestamps the longer the system is deployed.

## Network Time Protocol (NTP)
The network time protocol (NTP) and its implementation has evolved over the years to provide precisions less than a millisecond.
We leverage these modern implementations together with continuous quality control to ensure reliable time stamping over the network.

## GNSS <Badge text="HiDRA only" type="tip"/>

An external GPS receiver can be used for time stamping. Using precise PPS interrupts this solution guarantees precise clock synchronization in
connected and off-line environments.
