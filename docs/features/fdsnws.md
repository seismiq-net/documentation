---
tags:
  - fdsnws
  - miniseed
---
# FDSN Web Services

Waveform data can be accessed using the [FDSN Web Services](https://www.fdsn.org/webservices/) protocol via our network management. FDSN Web Service clients are offered by [ObsPy](https://docs.obspy.org/) and [Pyrocko](https://pyrocko.org).

## Network Data- and Stationselect

You can find a web interface to access the network's central FDSN service at `Waveforms > FDSN Web Service Dataselect`. Select the stations you want to download waveformdata from and hit the `Download miniSEED` button.
Filter stations by their location and hit `Download StationXML` to get their meta data.

The FDSNWS endpoint is available at:

<https://fdsnws.network.quakesaver.net/fdsnws/dataselect/1/queryauth>

Use your `username` and `password` to authenticate. This service is always enabled for all sensors that you have access to.

### Script Example

A standalone script which only requires Pythons [requests](https://requests.readthedocs.io/en/latest/) library. This example also highlights how to authenticate with your login credentials at the backend to fetch data.

```python
"""This module provides a standalone script for the fdsnws."""
from datetime import datetime, timedelta
import requests

# Provide your login credentials below:
EMAIL = "[USER_LOGIN_EMAIL_ADDRESS]"
PASSWORD = "[USER_LOGIN_PASSWORD]"

# Select the sensors you would like to fetch data from as a list:
SENSOR_UIDS = ["1A28YR3Q"]

# Time range of request. As an example we fetch the latest 10 minutes of data:
END_TIME = datetime.utcnow()
START_TIME = END_TIME - timedelta(minutes=10)

QS_AUTH_ENDPOINT = "https://api.network.quakesaver.net/api/v1/user/get_token"
JWT_DATASELECT_ENDPOINT = "https://fdsnws.network.quakesaver.net/fdsnws/dataselect/1/queryauth_jwt_by_id"

print(f"authenticating at {QS_AUTH_ENDPOINT}")
response = requests.post(url=QS_AUTH_ENDPOINT, data=f"username={EMAIL}&password={PASSWORD}",
                         headers={"Content-Type": "application/x-www-form-urlencoded"})

token = response.json()["access_token"]
print(f"authenticated")

# query by uid
params = {
    "starttime": START_TIME.timestamp(),
    "endtime": END_TIME.timestamp(),
    "sensor_uids": SENSOR_UIDS,
    "quality": "B",
    "minimumlength": 0,
    "longestonly": "false",
    "format": "miniseed",
    "nodata": 204,
}

print(f"fetching data...This can take up to 20 seconds")
response = requests.get(url=JWT_DATASELECT_ENDPOINT, params=params, headers={"Authorization": f"Bearer {token}"})
with open("QuakeSaverData.mseed", "wb") as f:
    f.write(response.content)

print("stored data in QuakeSaverData.mseed")
```

## Sensor Dataselect

The sensor's FDSNWS Dataselect query endpoint is always enabled and can be found under `Waveforms > FDSN Web Service` from the sensors local configuration page [http://qssensor.local](http://qssensor.local). Or connect to the endpoint under

<https://qssensor.local/fdsnws/dataselect/1/query>

Note, that you need to be connected to the same network as the sensor to be able to access that endpoint.

### Script Example

This Example uses [ObsPy](https://docs.obspy.org/) to request data directly from a sensor in a local network:

```python
#!/bin/env python3
from obspy import UTCDateTime
from obspy.clients.fdsn import Client

client = Client('http://qssensor.local')

m = 60.  # seconds
tmax = UTCDateTime.now()
tmin = tmax - 5*m

st = client.get_waveforms("*", "*", "*", "*", tmin, tmax)
st.write('/tmp/quakesaver-sensors.mseed')
st.plot()
```
