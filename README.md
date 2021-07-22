# SIM800-NodeRed
Subflow to send and receive SMS via Serialport &amp; SIM800 Modul.

![Logo](http://simcom.ee/images/simcom_logo.png)

---
![Logo](https://homematic-forum.de/forum/styles/prosilver/theme/images/homematic-logo.png)

Forum: https://homematic-forum.de/forum/viewtopic.php?f=77&t=63797&p=628671#p628671

---
[->Subflow only<-](https://github.com/Matten-Matten/SIM800-NodeRed/blob/main/subflow.js)

[->Beispiel flow<-](https://github.com/Matten-Matten/SIM800-NodeRed/blob/main/SIM800-flow.js)

---

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

### read Signal quality manually

`msg.input` = `SIGNAL`


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

## OUTPUT

 1. to Serial Modul
 2. Letzter Pruef-Status - `0=Nicht verfügbar; Erfolgreich; 1=TC35 Initialisierung-ShellBefehl fehlgeschlagen; 2=TC35 Initialisierung fehlgeschlagen; 3=Modem nicht bereit; 4=Aktivierung erweiterte Fehlermeldungen fehlgeschlagen; 5=Umschalten SMS-Textmodus fehlgeschlagen; 6=SIM-Pin wird benötigt; 7=Setzen SIM-Pin fehlgeschlagen; 8=Provider nicht registiert; 9=Ermittlung Signalstärke fehlgeschlagen; 10=Modem Reset fehlgeschlagen; 11=SIM-Fehler`
 3. Signalstaerke - `0=unbekannt; 1=sehr schlecht; 2=schlecht; 3=ok; 4=gut; 5=sehr gut`
 4. Modus - `true=aktiv; false=inaktiv`
 5. Letzter Sende Status - `0=Unbekannt; 1=SMS Erfolgreich Versand; 13=SMS NICHT Versand; 15=sende SMS`
 6. SMS-Emfang Absender ID
 7. SMS-Emfang Text
 
 ---
 
![Logo](https://raw.githubusercontent.com/Matten-Matten/SIM800-NodeRed/main/SIM800%20view.png)

![Logo](https://raw.githubusercontent.com/Matten-Matten/SIM800-NodeRed/main/SIM800%20config.png)

![Logo](https://raw.githubusercontent.com/Matten-Matten/SIM800-NodeRed/main/SIM800%20GSM%20Modul-webif.png)

---

## Changelog:

- V.1.2.0 - `Add read Signal quality`, `correction Provider registration check loop`
- V.1.1.1 - `Add SIM PIN Show Support`, `correction Provider registration check`, `Update UI`, `add multi System(Nodered/Redmatic)`

- V.1.1.0 - `Add SMS API Input`

- V.1.0.1 - `first publication`
