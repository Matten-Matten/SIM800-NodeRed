# SIM800-NodeRed
Subflow to send and receive SMS via Serialport &amp; SIM800 Modul.

![Logo](https://simcom.ee/images/simcom_logo.png)


## INPUT:

Input from Serial Modul

`msg.input` = `SERIAL_INPUT`

`msg.payload` = payload from Serial Modul

---
Start Connection to GSM Modul

`msg.input` = `START`

---
Stop Connection

`msg.input` = `STOP`

---
Reset SIM800

`msg.input` = `RESET`

---
Send Message SMS

`msg.input` = `SEND_SMS`

`msg.payload` = {"number":"01741234567","message":"Nodered Test SMS"}
