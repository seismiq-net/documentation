

# System Integrity
We believe that there should be no need for regular maintenance visits at the instrument after deployment .

All QuakeSaver sensors run a tailored embedded Linux which yields a numerous advantages over other distributions such as Debian, Raspbian or Armbian.

## Security is Paramount
The connected nature of QuakeSaver sensors demands uncompromising security measures. For our embedded Linux we carefully selected all components that are required for long term stability and stripped everything that is not absolutely essential and hereby reduce the potential vulnerabilities of the entire system.

## Over-the-air (OTA) Updates
When you operate a system that is online for a long time you need to guarantee that your software is up to date with the latest security updates. We employ an `A/B` partition layout where we start with two redundant sensor images on one device. When we update your sensor software remotely, we flush a completely recompiled and tested image to the non-active partition and reboot your device. After rebooting into the new image, the sensor performs tests. If those pass the new image remains the active partition. If any test fails or if the system cannot connect to the back-end, the update will be rolled back automatically and reported as failed.

::: warning Manual System Updates
OTA updates are not an option? Device can also be updated offline manually.
:::

## Long Term Support
Our back-end and sensor software is under continuous development. Each new line contributed to our software stack is heavily tested not only in virtual environments but on every sensor type that we offer. This guarantees stable, continuous software delivery and fast release cycles.
