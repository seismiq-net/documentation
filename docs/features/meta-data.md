# Meta Data

Your sensor keeps track of state changes and provides the entire sensor history data as  [**stationxml**](http://docs.fdsn.org/projects/stationxml/en/latest/).

Each time your change the sampling rate, gain, or the location of your sensor a new epoch in the sensor's history is created.

To retrieve the metadata open the sensor management user interface, go to **FDSN Web Service** and click on **Download StationXML Metadata**.
Along with the sensor epoch history you will also be provided with the sensor's transfer function.

Or use the sensors' FDSN Web Service endpoint at [http://qssensor.local/fdsnws](http://qssensor.local/fdsnws).
