# SIM800-NodeRed
Subflow to send and receive SMS via Serialport &amp; SIM800 Modul.

![Logo](https://simcom.ee/images/simcom_logo.png)


## INPUT:

### Input from Serial Modul

`msg.input` = `SERIAL_INPUT`

`msg.payload` = payload from Serial Modul


### Start Connection to GSM Modul

`msg.input` = `START`


### Stop Connection

`msg.input` = `STOP`


### Reset SIM800

`msg.input` = `RESET`


### Send Message SMS

`msg.input` = `SEND_SMS`

`msg.payload` = {"number":"01741234567","message":"Nodered Test SMS"}

---

## SMS via web API:

- RedMatic: `http://`IP-Adresse der CCU`/addons/red/SIM800sendSMS?number=`01741234567`&message=`Test Message
- Nodred:  `http://`IP-Adresse`:`Port`/SIM800sendSMS?number=`01741234567`&message=`Test Message

---

## SMS via Webinterface:

- RedMatic: `http://`IP-Adresse der CCU`/addons/red/SIM800`
- Nodred:  `http://`IP-Adresse`:`Port`/SIM800`

---

![Logo](https://raw.githubusercontent.com/Matten-Matten/SIM800-NodeRed/main/SIM800%20view.png)

![Logo](https://raw.githubusercontent.com/Matten-Matten/SIM800-NodeRed/main/SIM800%20config.png)

![Logo](https://raw.githubusercontent.com/Matten-Matten/SIM800-NodeRed/main/SIM800%20GSM%20Modul-webif.png)


---

## Changelog:

- V.1.1.1 - Add SIM PIN Show Support; correction Provider registration check, Update UI, add multi System(Nodered/Redmatic)

- V.1.1.0 - Add SMS API Input

- V.1.0.1 - first publication
