
# Device Provisioning

This section explains how devices are provisioned a fresh firmware image.

::: warning
Use any external tools at your own risk as we have not reviewed the internals of any of the referenced applications.
:::

## Finding the right SD Card

There are multiple types of SD cards and storage technologies on the market. A comprehensive summary of the various kinds can be found [here](https://www.mydigitaldiscount.com/everything-you-need-to-know-about-slc-mlc-and-tlc-nand-flash.html). We strongly recommend using an SLC (Single Level Cell) or pSLC (pseudo Single Level Cell) NAND technology as these provide the longest reliability and durability. These SD cards are often labeled as *High Endurance* or *Industrial Grade*.

## Flashing the Device Software

### Linux / Mac OSX

We use the [bmaptool](https://github.com/intel/bmap-tools) to flash images which is up to 10x faster (and safer) than using plain old `dd`.

::: tip
If you are using Ubuntu or Debian you can install the `bmap-tools` using `apt`:

```sh
sudo apt install bmap-tools
```

:::

Insert the SD card that came with your device into your computer and find the device using e.g. `dmesg`. After you identified the SD card device use `bmaptool` to flash the provided compressed image to your SD card:

```sh
sudo bmaptool copy --bmap <IMAGE_NAME>.bmap <IMAGE_NAME>.bz2 /dev/<SD_CARD_DEVICE>
```

**Mac users** may have to use the unbuffered device for flashing. E.g. instead of `/dev/disk3` use `/dev/rdisk3`.

The provided `bmap` file maps big blocks of binary data to memory - that's essentially why this tool is so fast.

There is no need to run `sync` or unmount your device as `bmaptool` does this automatically.

### Windows

We recommend [balena etcher](https://www.balena.io/etcher/) for Windows users to flash the image onto an SD card.

To uncompress a zipped artifacts file right-click onto the file and select `Extract All...`. There exists [bzip2-windows](https://github.com/philr/bzip2-windows/releases) to decompress the contained `.bz2` file (which contains the actual image).
Since `balena etcher` requires images to end with `.iso` you have to rename the artifact, accordingly.

Open `balena etcher`, select the image and the drive and flash the image. 

---

After this process finished you can take the SD card out of your computer and insert it into your sensor.

Boot your device and wait for the [sensor self-test](#sensor-self-test) to start.

## Sensor Self-Test

Upon first boot the device will perform a self-test autonomously to ensure correct sensor and software functionality. Booting the sensor takes roughly one minute. After the booting finished the status LED turns off. Some seconds later it will start to flash irregularly in bright green. This indicates the ongoing system health check. Each passing test is indicated by one short green flash.

Once all tests are finished the LED will flash green at a 1-second interval for 10 seconds before it is turned off. The test phase finished, and regular sensor operation commences.

In the unlikely event of a failing test, the LED will turn red permanently to indicate that at least one test failed unexpectedly.

Test results are summarized in a report and can be checked locally at <http://qssensor.local/test-result>.

By the end of the self-test turn off the device by disconnecting the power supply. Your sensor is now ready for [setup](../setup/quickstart.md)
