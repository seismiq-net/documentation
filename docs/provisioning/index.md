
# Device Provisioning

This section explains how you can provision your device manually with a fresh image.

## Finding the right SD Card

There are multiple types of SD cards and storage technologies on the market. A comprehensive summary of the various kinds can be found [here](https://www.mydigitaldiscount.com/everything-you-need-to-know-about-slc-mlc-and-tlc-nand-flash.html). We strongly recommend using an SLC (Single Level Cell) or pSLC (pseudo Single Level Cell) NAND technology as these provide the longest reliability and durability. These SD cards are often labeled as *High Endurance* or *Industrial Grade*.

## Flashing the Device Software

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

After this process finished you can take the SD card out of your computer and insert it into your sensor. There is no need to run `sync` or unmount your device as `bmaptool` does this automatically.

Boot your device and have fun.

::: tip Note
Note that the device ID will be assigned during the first boot of an image and will not be persistent for a device after re-provisioning.
:::

In case of questions, send us a message: <info@quakesaver.net>.

## Sensor Self-Test

Upon first boot the device will perform a self-test autonomously to ensure correct sensor and software functionality. Booting the sensor takes roughly one minute. After the booting finished the status LED turns off. Some seconds later it will start to flash irregularly in bright green. This indicates the ongoing system health check. Each passing test is indicated by one short green flash.

Once all tests are finished the LED will flash green at a 1-second interval for 10 seconds before it is turned off. The test phase finished, and regular sensor operation commences.

In the unlikely event of a failing test, the LED will turn red permanently to indicate that at least one test failed unexpectedly.

Test results are summarized in a report and can be checked locally at http://qssensor.local/test-result.
