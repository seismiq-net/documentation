
## Continuous PPSD

::: warning Work in progress
:construction: Continuous PPSDs are work in progress
:::

Probabilistic power spectral densities (PPSD) and power spectral density probability density functions (PSDPDFs)[^1][^2] are a powerful measures for the station and site's quality. Continuous PPSDs can be calculated on the sensor, reducing the load on data centers and offering a live and historic view of the station's noise conditions.

## Continuous H/V

::: warning Work in progress
:construction: Continuous PPSDs are work in progress
:::

H/V ratios reflect site conditions, structural properties and near-surface seismic properties. Changes in the site conditions due to environmental changes can be temporal or permanent. They may indicate failure of a building or a slope, where they can precede landslides. thus real-time monitoring of these changes is paramount for fast response.

SeismiQ sensors will be equipped with real-time and continuous calculation of H/V ratios to monitor and report these changes.

## Continuous Station Autocorrelation <Badge text="beta" type="error"/>

::: warning Work in progress
:construction: Continuous PPSDs are work in progress
:::

Autocorrelation of the station's vertical component can hold information about critical changes in the subsurface beneath the sensor[^3]. The processing of this data-product can be taken to the _edge_. This enables the operator to retrieve a real-time data stream informing about changes in the subsurface.

## Phase Identification and Characterization

::: warning Work in progress
:construction: Continuous PPSDs are work in progress
:::

Neural networks have proven very robust for earthquake identification and automated phase picking [^4]. Together with colleagues at [GFZ Potsdam](https://gfz-potsdam.de) and [University of Magdeburg](https://www.uni-magdeburg.de/en/) we currently are researching the limits of single-station earthquake identification and phase characterization, with the goal to bring these strategies and trained neural networks to the edge.

[^2]: Emily Wolin, Daniel E. McNamara; Establishing High‐Frequency Noise Baselines to 100 Hz Based on Millions of Power Spectra from IRIS MUSTANG. Bulletin of the Seismological Society of America 2019; 110 (1): 270–278. doi: [https://doi.org/10.1785/0120190123](https://doi.org/10.1785/0120190123)

[^3]: A. Gorbatov, E. Saygin, B. L. N. Kennett, Crustal properties from seismic station autocorrelograms, Geophysical Journal International, Volume 192, Issue 2, February 2013, Pages 861–870, [https://doi.org/10.1093/gji/ggs064](https://doi.org/10.1093/gji/ggs064)

[^4]: Weiqiang Zhu, Gregory C Beroza, PhaseNet: a deep-neural-network-based seismic arrival-time picking method, Geophysical Journal International, Volume 216, Issue 1, January 2019, Pages 261–273, <https://doi.org/10.1093/gji/ggy423>
