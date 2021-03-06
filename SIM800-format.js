[
    {
        "id": "c5823db2.4ff16",
        "type": "subflow",
        "name": "SIM800 GSM Modul",
        "info": "![Logo](https://simcom.ee/images/simcom_logo.png)\n\n# SIM800 GSM Modul Subflow\n\n---\n## INPUT:\n\nInput from Serial Modul\n\n`msg.input` = `SERIAL_INPUT`\n\n`msg.payload` = payload from Serial Modul\n\n---\nStart Connection to GSM Modul\n\n`msg.input` = `START`\n\n---\nStop Connection\n\n`msg.input` = `STOP`\n\n---\nReset SIM800\n\n`msg.input` = `RESET`\n\n---\nread Signal quality manually\n\n`msg.input` = `SIGNAL`\n\n---\nSend Message SMS\n\n`msg.input` = `SEND_SMS`\n\n`msg.payload` = {\"number\":\"01741234567\",\"message\":\"Nodered Test SMS\"}\n\n---\n## OUTPUT\n\n 1. to Serial Modul\n 2. Letzter Pruef-Status - `0=Nicht verfügbar; Erfolgreich; 1=TC35 Initialisierung-ShellBefehl fehlgeschlagen; 2=TC35 Initialisierung fehlgeschlagen; 3=Modem nicht bereit; 4=Aktivierung erweiterte Fehlermeldungen fehlgeschlagen; 5=Umschalten SMS-Textmodus fehlgeschlagen; 6=SIM-Pin wird benötigt; 7=Setzen SIM-Pin fehlgeschlagen; 8=Provider nicht registiert; 9=Ermittlung Signalstärke fehlgeschlagen; 10=Modem Reset fehlgeschlagen; 11=SIM-Fehler`\n 3. Signalstaerke - `0=unbekannt; 1=sehr schlecht; 2=schlecht; 3=ok; 4=gut; 5=sehr gut`\n 4. Modus - `true=aktiv; false=inaktiv`\n 5. Letzter Sende Status - `0=Unbekannt; 1=SMS Erfolgreich Versand; 13=SMS NICHT Versand; 15=sende SMS`\n 6. SMS-Emfang Absender ID\n 7. SMS-Emfang Text\n\n\n---\n\n## by [Matten Matten](https://github.com/Matten-Matten/SIM800-NodeRed/blob/main/README.md)\n",
        "category": "SMS",
        "in": [
            {
                "x": 380,
                "y": 4240,
                "wires": [
                    {
                        "id": "b7942615.a2aa98"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 380,
                "y": 4300,
                "wires": [
                    {
                        "id": "a7b72d2b.ef6f",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1580,
                "y": 200,
                "wires": [
                    {
                        "id": "7c013b94.3a9644",
                        "port": 0
                    },
                    {
                        "id": "a8ec3378.5187f",
                        "port": 0
                    },
                    {
                        "id": "c3064370.0712e",
                        "port": 0
                    },
                    {
                        "id": "74acc4ea.a6e16c",
                        "port": 0
                    },
                    {
                        "id": "dc0f46d1.7c8ff8",
                        "port": 0
                    },
                    {
                        "id": "917ff6a3.25e7e8",
                        "port": 0
                    },
                    {
                        "id": "a6a3b23b.af5fa",
                        "port": 0
                    },
                    {
                        "id": "966449f.d5418b8",
                        "port": 0
                    },
                    {
                        "id": "1165f2c5.e4f76d",
                        "port": 0
                    },
                    {
                        "id": "58168097.24291",
                        "port": 0
                    },
                    {
                        "id": "ffe7aa3c.66a618",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1520,
                "y": 1980,
                "wires": [
                    {
                        "id": "5dad3b00.ba0814",
                        "port": 0
                    },
                    {
                        "id": "8a30ee5a.164cf",
                        "port": 0
                    },
                    {
                        "id": "4cecd777.dd6758",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1520,
                "y": 2100,
                "wires": [
                    {
                        "id": "7bbd151a.37816c",
                        "port": 0
                    },
                    {
                        "id": "a2f7fc0a.41dad",
                        "port": 0
                    },
                    {
                        "id": "59d92d2.cc2d3d4",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 3300,
                "wires": [
                    {
                        "id": "1fce9bcd.1e5d44",
                        "port": 0
                    },
                    {
                        "id": "3d0b0db4.204fe2",
                        "port": 0
                    },
                    {
                        "id": "b9cb5dac.f821b",
                        "port": 0
                    },
                    {
                        "id": "c71eaeb0.a117c",
                        "port": 0
                    },
                    {
                        "id": "6cf70f8c.06d81",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2860,
                "wires": [
                    {
                        "id": "3eddb20e.c4c72e",
                        "port": 0
                    }
                ]
            },
            {
                "x": 1500,
                "y": 2940,
                "wires": [
                    {
                        "id": "e950fd7d.63846",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [
            {
                "name": "",
                "type": "str",
                "value": "SIM800",
                "ui": {
                    "icon": "font-awesome/fa-signal",
                    "label": {
                        "en-US": "SIM800 GSM Modul Subflow - to send and receive SMS."
                    },
                    "type": "none"
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "Version",
                "ui": {
                    "label": {
                        "en-US": "Version 1.2.0"
                    },
                    "type": "none"
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none"
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "Webif",
                "ui": {
                    "icon": "font-awesome/fa-info-circle",
                    "label": {
                        "en-US": "Webinterface Settings: System"
                    },
                    "type": "none"
                }
            },
            {
                "name": "SYSTEM",
                "type": "str",
                "value": "0",
                "ui": {
                    "icon": "font-awesome/fa-hdd-o",
                    "label": {
                        "en-US": "System"
                    },
                    "type": "select",
                    "opts": {
                        "opts": [
                            {
                                "l": {
                                    "en-US": "Nodered"
                                },
                                "v": "0"
                            },
                            {
                                "l": {
                                    "en-US": "RedMatic"
                                },
                                "v": "1"
                            }
                        ]
                    }
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none"
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "text",
                "ui": {
                    "icon": "font-awesome/fa-info-circle",
                    "label": {
                        "en-US": "Wenn PIN deaktiviert, einfach leer lassen!"
                    },
                    "type": "none"
                }
            },
            {
                "name": "PIN",
                "type": "str",
                "value": "",
                "ui": {
                    "icon": "font-awesome/fa-unlock-alt",
                    "label": {
                        "en-US": "PIN ****"
                    },
                    "type": "input",
                    "opts": {
                        "types": [
                            "str"
                        ]
                    }
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none"
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "text",
                "ui": {
                    "icon": "font-awesome/fa-info-circle",
                    "label": {
                        "en-US": "Startet bei Systemstart oder Deploy automatisch"
                    },
                    "type": "none"
                }
            },
            {
                "name": "AUTOSTART",
                "type": "bool",
                "value": "false",
                "ui": {
                    "icon": "font-awesome/fa-history",
                    "label": {
                        "en-US": "Auto Start"
                    },
                    "type": "checkbox"
                }
            },
            {
                "name": "",
                "type": "str",
                "value": "leer",
                "ui": {
                    "type": "none"
                }
            },
            {
                "name": "DEBUG",
                "type": "bool",
                "value": "false",
                "ui": {
                    "icon": "font-awesome/fa-bug",
                    "label": {
                        "en-US": "Debug"
                    },
                    "type": "checkbox"
                }
            }
        ],
        "color": "#FFCC66",
        "inputLabels": [
            "SERIAL INPUT"
        ],
        "outputLabels": [
            "SERIAL OUTPUT",
            "Letzter Pruef-Status",
            "Signalstaerke",
            "Modus",
            "Letzter Sende Status",
            "SMS-Emfang Absender ID",
            "SMS-Emfang Text"
        ],
        "icon": "font-awesome/fa-signal",
        "status": {
            "x": 380,
            "y": 4360,
            "wires": [
                {
                    "id": "1941ac98.e44073",
                    "port": 0
                }
            ]
        }
    },
    {
        "id": "6b90938.b16826c",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "+ \\r",
        "func": "var at_cmd = msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1130,
        "y": 120,
        "wires": [
            [
                "8be58ec4.d2b1c",
                "8f2963d1.67fae"
            ]
        ]
    },
    {
        "id": "19786752.8979e9",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+ cmd \"\\r\"",
        "func": "var at_cmd = \"AT+\"+msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1330,
        "y": 3020,
        "wires": [
            [
                "df0e2dc7.5640a"
            ]
        ]
    },
    {
        "id": "d5261f41.bb261",
        "type": "exec",
        "z": "c5823db2.4ff16",
        "command": "stty -F ",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "/dev/ttyUSBx",
        "x": 1270,
        "y": 4400,
        "wires": [
            [
                "1a685548.967bbb"
            ],
            [
                "1a685548.967bbb"
            ],
            []
        ]
    },
    {
        "id": "1a685548.967bbb",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "SET BAUD",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1470,
        "y": 4400,
        "wires": []
    },
    {
        "id": "b6d65af3.7a1848",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "#Gelesene SMS löschen",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "topic": "settings",
        "payload": "CMGD=1",
        "payloadType": "str",
        "x": 1070,
        "y": 3020,
        "wires": [
            [
                "19786752.8979e9"
            ]
        ]
    },
    {
        "id": "8f0a2647.d9f4d8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "CMGL/CMGD",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CMGL:",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "AT+CMGD=",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 420,
        "y": 2880,
        "wires": [
            [
                "3eddb20e.c4c72e"
            ],
            [
                "f049e3ea.46126"
            ]
        ]
    },
    {
        "id": "3eddb20e.c4c72e",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "SMS_INDEX",
        "func": "var incommingSMS = msg.payload.split(\",\");\nvar SMSindex = parseFloat((incommingSMS[0]).replace(\"+CMGL: \", ''));\nmsg.payload = (incommingSMS[2]).replace(/\"/g, '');\nflow.set('SMS_INPUT',true);\nflow.set('SMS_INDEX',SMSindex);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 2860,
        "wires": [
            [
                "4c63a73f.2f6648"
            ]
        ]
    },
    {
        "id": "b242dc2e.78bf1",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "SetVar",
        "func": "flow.set('SMS_INPUT',false);\nflow.set('SMS_Delete',false);\nflow.set('GSM_CMEE',false);\nflow.set('GSM_CMGF',false);\nflow.set('GSM_PING',false);\nflow.set('SMS_SEND',false);\nflow.set('GSM_POLL',false);\nflow.set('MODUL_RESET',false);\nflow.set('GSM_CPIN',false);\nflow.set('GSM_CNMI',false);\nflow.set('GSM_CSQ',false);\nflow.set('SMS_INDEX',0);\nflow.set('GSM_SEND',false);",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 2030,
        "y": 360,
        "wires": [
            []
        ]
    },
    {
        "id": "f579b3b9.6e146",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "Nummer",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1120,
        "y": 2840,
        "wires": []
    },
    {
        "id": "6829305e.bccfa",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "SMS Input",
        "property": "SMS_INPUT",
        "propertyType": "flow",
        "rules": [
            {
                "t": "false"
            },
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 210,
        "y": 2920,
        "wires": [
            [
                "8f0a2647.d9f4d8"
            ],
            [
                "26330577.a15d3a"
            ]
        ]
    },
    {
        "id": "26330577.a15d3a",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "SMS_Delete",
        "func": "msg.payload = msg.payload;\nflow.set('SMS_INPUT',false);\nflow.set('SMS_Delete',true);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 2960,
        "wires": [
            [
                "ff5bf6f5.f94d68",
                "e950fd7d.63846"
            ]
        ]
    },
    {
        "id": "a6aecdd1.c3112",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "Text",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1130,
        "y": 2920,
        "wires": []
    },
    {
        "id": "d01f3747.477d38",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "Index NR",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1120,
        "y": 2980,
        "wires": []
    },
    {
        "id": "ff5bf6f5.f94d68",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "SMS_INDEX",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 2980,
        "wires": [
            [
                "d33d75b3.281858",
                "ddddc340.8d69a"
            ]
        ]
    },
    {
        "id": "fa0939aa.a1d5c8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+ CMGD= \"\\r\"",
        "func": "var at_cmd = \"AT+CMGD=\"+msg.payload;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 3060,
        "wires": [
            [
                "aa8c677e.f7d7a8"
            ]
        ]
    },
    {
        "id": "f049e3ea.46126",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_Delete",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 650,
        "y": 2900,
        "wires": [
            []
        ]
    },
    {
        "id": "d33d75b3.281858",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "SMS Input",
        "property": "SMS_Delete",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 170,
        "y": 3060,
        "wires": [
            [
                "b5d302bc.94b24"
            ]
        ]
    },
    {
        "id": "3d01583d.aebe78",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "+CMTI:",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CMTI:",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 2740,
        "wires": [
            [
                "36dd9e13.877942",
                "dcaa2451.2ef768",
                "4fb2e343.cdc0cc"
            ]
        ]
    },
    {
        "id": "4fb2e343.cdc0cc",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+ CMGL=\"ALL\" \"\\r\"",
        "func": "var index = msg.payload.split(\",\");\nindex = parseFloat(index[1]);\n\n\n\n\nvar at_cmd = 'AT+CMGL=\"ALL\"'/* + index*/;\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 2740,
        "wires": [
            [
                "4d91a8ac.de7438"
            ]
        ]
    },
    {
        "id": "fc67751d.ad86d8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "sende sms",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMGS=",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "> ",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "+CMGS: ",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "ERROR",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 5,
        "x": 210,
        "y": 3380,
        "wires": [
            [
                "7598086e.c6ba78"
            ],
            [],
            [
                "76758d7e.4bacc4"
            ],
            [
                "76758d7e.4bacc4"
            ],
            [
                "e174a8a7.94ff78"
            ]
        ]
    },
    {
        "id": "34f38d0f.179172",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "SEND SMS",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1390,
        "y": 3500,
        "wires": []
    },
    {
        "id": "76758d7e.4bacc4",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "",
        "property": "SMS_SEND",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 3360,
        "wires": [
            [
                "c757c389.ad372",
                "957c03b5.8cdb",
                "599cb33.14a434c"
            ]
        ]
    },
    {
        "id": "7598086e.c6ba78",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 460,
        "y": 3300,
        "wires": [
            [
                "a221f7a5.4ec738"
            ]
        ]
    },
    {
        "id": "c757c389.ad372",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 3360,
        "wires": [
            [
                "2f8933ac.0a51ec"
            ]
        ]
    },
    {
        "id": "e174a8a7.94ff78",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "",
        "property": "SMS_SEND",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 3440,
        "wires": [
            [
                "e059d18d.14f94",
                "957c03b5.8cdb",
                "599cb33.14a434c"
            ]
        ]
    },
    {
        "id": "e059d18d.14f94",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 580,
        "y": 3440,
        "wires": [
            [
                "401aaf51.da716"
            ]
        ]
    },
    {
        "id": "b0deb164.36b31",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "+CSQ: ",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CSQ: ",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 190,
        "y": 2000,
        "wires": [
            [
                "a0301fe1.ce7ea",
                "e3d88ce1.b0cf5"
            ]
        ]
    },
    {
        "id": "a0301fe1.ce7ea",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Signalstärke",
        "func": "var signal = msg.payload.split(\",\");\nsignal = parseFloat((signal[0]).replace(\"+CSQ: \", ''));\n\nif (signal < 2) {\n\tmsg.payload = 1;\n\treturn msg;\n}\nelse if (signal >= 2 && signal <=9) {\n\tmsg.payload = 2;\n\treturn msg;\n}\nelse if (signal >= 10 && signal <=14) {\n\tmsg.payload = 3;\n\treturn msg;\n}\nelse if (signal >= 15 && signal <=19) {\n\tmsg.payload = 4;\n\treturn msg;\n}\nelse if (signal >= 20) {\n\tmsg.payload = 5;\n\treturn msg;\n}\nelse if (signal === 99) {\n\tmsg.payload = 99;\n\treturn msg;\n} else {\n\tmsg.payload = 0;\n\treturn msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 430,
        "y": 2000,
        "wires": [
            [
                "5dad3b00.ba0814",
                "c81d6ffc.aef7",
                "7c257a45.9fb544"
            ]
        ]
    },
    {
        "id": "f9494dd3.568cc",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "GSM Signal Stärke",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1190,
        "y": 2000,
        "wires": []
    },
    {
        "id": "482764ba.2e778c",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "== AT",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "AT",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 170,
        "y": 240,
        "wires": [
            [
                "fa61cec7.e3b29"
            ]
        ]
    },
    {
        "id": "96d07434.22ac98",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "16acf591.a0678a",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "GSM_PING",
        "property": "GSM_PING",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "eq",
                "v": "true",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 330,
        "y": 280,
        "wires": [
            [
                "69a40dd4.47f484"
            ],
            [
                "69a40dd4.47f484"
            ]
        ]
    },
    {
        "id": "69a40dd4.47f484",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 510,
        "y": 280,
        "wires": [
            [
                "eaba772b.7aa768",
                "6da7f0d5.9c6ef",
                "574fb898.aa0c08",
                "7c7e12b.e739aec"
            ],
            []
        ]
    },
    {
        "id": "eaba772b.7aa768",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "OK",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 690,
        "y": 200,
        "wires": [
            [
                "b0dbb491.91ac18"
            ]
        ]
    },
    {
        "id": "a56d5a4d.4154a8",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "GSM PING",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1230,
        "y": 200,
        "wires": []
    },
    {
        "id": "e9f7594c.56b078",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "6",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 520,
        "y": 160,
        "wires": [
            [
                "eed5a144.b032c"
            ]
        ]
    },
    {
        "id": "eed5a144.b032c",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "NOT OK",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "NOT OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 160,
        "wires": [
            [
                "b0dbb491.91ac18",
                "7c013b94.3a9644",
                "be7bb84d.71a688"
            ]
        ]
    },
    {
        "id": "6da7f0d5.9c6ef",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 180,
        "wires": [
            [
                "e9f7594c.56b078"
            ]
        ]
    },
    {
        "id": "4b622d90.d51914",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "1. START",
        "info": "",
        "x": 60,
        "y": 80,
        "wires": []
    },
    {
        "id": "2d967017.79e5d",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CMEE=2 \"\\r\"",
        "func": "var at_cmd = \"AT+CMEE=2\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 640,
        "wires": [
            [
                "2587c55c.be523a"
            ]
        ]
    },
    {
        "id": "26fbde80.f86502",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "AT+CMEE=2",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMEE=2",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 680,
        "wires": [
            [
                "69279250.abc96c"
            ]
        ]
    },
    {
        "id": "67d614da.0fa9cc",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CMGF=1 \"\\r\"",
        "func": "var at_cmd = \"AT+CMGF=1\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 860,
        "wires": [
            [
                "ec238d4e.b109d"
            ]
        ]
    },
    {
        "id": "69279250.abc96c",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "183a4e2e.7f6532",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "GSM_CMEE",
        "property": "GSM_CMEE",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 720,
        "wires": [
            [
                "e68b272f.46fc88"
            ]
        ]
    },
    {
        "id": "e68b272f.46fc88",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 720,
        "wires": [
            [
                "c1e1a67e.df7e88",
                "99c74235.f7287"
            ],
            [
                "a8ec3378.5187f"
            ]
        ]
    },
    {
        "id": "c1e1a67e.df7e88",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 680,
        "wires": [
            [
                "28979353.49285c",
                "fa6d2994.b67088"
            ]
        ]
    },
    {
        "id": "5ed2a0f4.1191a",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "AT+CMGF=1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CMGF=1",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 900,
        "wires": [
            [
                "74bedfd7.a66ec"
            ]
        ]
    },
    {
        "id": "74bedfd7.a66ec",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 430,
        "y": 900,
        "wires": [
            []
        ]
    },
    {
        "id": "4711d6db.b467c8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "GSM_CMGF",
        "property": "GSM_CMGF",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 940,
        "wires": [
            [
                "4ef672fb.63cdec"
            ]
        ]
    },
    {
        "id": "4ef672fb.63cdec",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 940,
        "wires": [
            [
                "309c8073.c5a4e",
                "dce0dcc7.2477"
            ],
            [
                "c3064370.0712e"
            ]
        ]
    },
    {
        "id": "309c8073.c5a4e",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 900,
        "wires": [
            [
                "e9480ad1.b062a8",
                "50443872.0dc8f8"
            ]
        ]
    },
    {
        "id": "fbeebfe7.98a4d",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "Extended Errormessage aktiv",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1230,
        "y": 680,
        "wires": []
    },
    {
        "id": "b4c82516.0530f8",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "TC35 in SMS-Textmodus versetzt",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1220,
        "y": 900,
        "wires": []
    },
    {
        "id": "638b0a97.f83d14",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CFUN=1,1 \"\\r\"",
        "func": "var at_cmd = \"AT+CFUN=1,1\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1110,
        "y": 2300,
        "wires": [
            [
                "7144fd0d.1e6b74"
            ]
        ]
    },
    {
        "id": "3989ab8e.9e7874",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "AT+CFUN=1,1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CFUN=1,1",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 2340,
        "wires": [
            [
                "7b4cd02.4c4de3",
                "f594fb25.ad2448"
            ]
        ]
    },
    {
        "id": "5cfbad75.b05e44",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 640,
        "wires": [
            [
                "2d967017.79e5d"
            ]
        ]
    },
    {
        "id": "99c74235.f7287",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 860,
        "wires": [
            [
                "67d614da.0fa9cc"
            ]
        ]
    },
    {
        "id": "a013bf4d.5fe9f",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Send SMS to number",
        "func": "var num = msg.payload.number;\nvar at_cmd = \"AT+CMGS=\\\"\"+num+\"\\\"\"; \n\nmsg.payload=at_cmd+\"\\r\";\n//msg.payload.msg =msg.payload.message;\n\nreturn msg;",
        "outputs": "1",
        "noerr": 0,
        "x": 460,
        "y": 3680,
        "wires": [
            [
                "e376a450.d0c1f8",
                "316831c3.34802e",
                "62ccc560.b18e4c"
            ]
        ]
    },
    {
        "id": "b5336715.625ac8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "Send Message",
        "func": "var sms_msg = msg.payload.message;\n\nmsg.payload = sms_msg + \"\\x1A\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 800,
        "y": 3760,
        "wires": [
            [
                "316831c3.34802e"
            ]
        ]
    },
    {
        "id": "6d20bef0.93b76",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "Wait for > prompt",
        "pauseType": "delay",
        "timeout": "3",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 450,
        "y": 3760,
        "wires": [
            [
                "d90bdd2d.af85b"
            ]
        ]
    },
    {
        "id": "ba4e74c5.0133e8",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "Wait 1 sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 430,
        "y": 3720,
        "wires": [
            [
                "7162a94c.a6af18"
            ]
        ]
    },
    {
        "id": "7162a94c.a6af18",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Write newline",
        "func": "//msg.payload=\"\\r\\n\";\nmsg.payload=\"\\r\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 800,
        "y": 3720,
        "wires": [
            [
                "316831c3.34802e"
            ]
        ]
    },
    {
        "id": "e376a450.d0c1f8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 770,
        "y": 3680,
        "wires": [
            []
        ]
    },
    {
        "id": "f7622c4.93d94d",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "25",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 870,
        "y": 3400,
        "wires": [
            [
                "e059d18d.14f94"
            ]
        ]
    },
    {
        "id": "957c03b5.8cdb",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 550,
        "y": 3400,
        "wires": [
            [
                "f7622c4.93d94d"
            ]
        ]
    },
    {
        "id": "4a4bb5a1.39682c",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CNMI=2,1 \"\\r\"",
        "func": "var at_cmd = \"AT+CNMI=2,1\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1090,
        "y": 420,
        "wires": [
            [
                "e435e590.ea6af8"
            ]
        ]
    },
    {
        "id": "e9a4fa6d.3ca2e8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CMGL=\"ALL\" \"\\r\"",
        "func": "var at_cmd = 'AT+CMGL=\"ALL\"';\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 2640,
        "wires": [
            [
                "632696ba.490f78"
            ]
        ]
    },
    {
        "id": "eacfb5b.791db48",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 160,
        "y": 1960,
        "wires": [
            [
                "595a477d.4b1148",
                "960b19e4.a30128"
            ]
        ]
    },
    {
        "id": "595a477d.4b1148",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CSQ \"\\r\"",
        "func": "var at_cmd = \"AT+CSQ\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1110,
        "y": 1960,
        "wires": [
            [
                "ce09fda5.cc774"
            ]
        ]
    },
    {
        "id": "e950fd7d.63846",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "decode",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "\u001e",
                "fromt": "str",
                "to": "ß",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "^",
                "fromt": "str",
                "to": "Ü",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "\\",
                "fromt": "str",
                "to": "Ö",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "[",
                "fromt": "str",
                "to": "Ä",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "~",
                "fromt": "str",
                "to": "ü",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "|",
                "fromt": "str",
                "to": "ö",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "{",
                "fromt": "str",
                "to": "ä",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 600,
        "y": 2940,
        "wires": [
            [
                "334e712d.7eae7e"
            ]
        ]
    },
    {
        "id": "1c79ed59.c9a4d3",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Filtern",
        "func": "var antwort = msg.payload;\n\nif (antwort.length > 2 && antwort.length !== \"\"){\n    msg.payload = (antwort.slice(0, antwort.length)).replace(\"\\n\", '').replace(\"\\r\", '');\n    return msg;\n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1000,
        "y": 4140,
        "wires": [
            [
                "2e3c9f3a.1e763",
                "310d2ef2.6c57a2"
            ]
        ]
    },
    {
        "id": "53b65f4d.eab59",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Sonderzeichen",
        "info": ".replace(\"{\", 'ä').replace(\"|\", 'ö').replace(\"~\", 'ü').replace(\"[\", 'Ä').replace(\"\\\", 'Ö').replace(\"^\", 'Ü').replace(\"\u001e\", 'ß')\n\n.replace(\"{\", 'ä')\n.replace(\"|\", 'ö')\n.replace(\"~\", 'ü')\n.replace(\"[\", 'Ä')\n.replace(\"\\\", 'Ö')\n.replace(\"^\", 'Ü')\n.replace(\"\u001e\", 'ß')",
        "x": 640,
        "y": 2820,
        "wires": []
    },
    {
        "id": "d90bdd2d.af85b",
        "type": "change",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "decode",
        "rules": [
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ß",
                "fromt": "str",
                "to": "\u001e",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ü",
                "fromt": "str",
                "to": "^",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ö",
                "fromt": "str",
                "to": "\\",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "Ä",
                "fromt": "str",
                "to": "[",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ü",
                "fromt": "str",
                "to": "~",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ö",
                "fromt": "str",
                "to": "|",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload.message",
                "pt": "msg",
                "from": "ä",
                "fromt": "str",
                "to": "{",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 620,
        "y": 3760,
        "wires": [
            [
                "b5336715.625ac8"
            ]
        ]
    },
    {
        "id": "46bb8398.c5cd9c",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "GSM MODUL",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1200,
        "y": 2040,
        "wires": []
    },
    {
        "id": "b1df725d.2ce6d",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "Bereit",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Bereit",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 830,
        "y": 2060,
        "wires": [
            [
                "c3b205c1.de1d78"
            ]
        ]
    },
    {
        "id": "7bbd151a.37816c",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "true",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 830,
        "y": 2100,
        "wires": [
            []
        ]
    },
    {
        "id": "dc0f46d1.7c8ff8",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 1410,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "a8ec3378.5187f",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "5",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "5",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "c3064370.0712e",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "6",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "6",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "c0d7ed59.0bf43",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "",
        "info": "Nicht verfügbar;\nErfolgreich;\nTC35 Initialisierung-ShellBefehl fehlgeschlagen;\nTC35 Initialisierung fehlgeschlagen;\nModem nicht bereit;\nAktivierung erweiterte Fehlermeldungen fehlgeschlagen;\nUmschalten SMS-Textmodus fehlgeschlagen;\nSIM-Pin wird benötigt;\nSetzen SIM-Pin fehlgeschlagen;\nProvider nicht registiert;\nErmittlung Signalstärke fehlgeschlagen;\nModem Reset fehlgeschlagen;\nSIM-Fehler (siehe Messenger-Log für mehr Details)",
        "x": 1690,
        "y": 160,
        "wires": []
    },
    {
        "id": "c176ee48.710aa",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "== 99",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "99",
                "vt": "num"
            },
            {
                "t": "lt",
                "v": "99",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 630,
        "y": 2040,
        "wires": [
            [
                "74acc4ea.a6e16c",
                "6f0bbe42.a4955"
            ],
            [
                "b1df725d.2ce6d",
                "7bbd151a.37816c",
                "d31d0d75.1c119"
            ]
        ]
    },
    {
        "id": "74acc4ea.a6e16c",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "10",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "10",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1390,
        "y": 2040,
        "wires": [
            []
        ]
    },
    {
        "id": "7c013b94.3a9644",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "4",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "4",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "4e7d9c8e.5251d4",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "2.  #Extended Errormessage aktivieren",
        "info": "",
        "x": 230,
        "y": 600,
        "wires": []
    },
    {
        "id": "a7b72d2b.ef6f",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL OUT",
        "links": [
            "632696ba.490f78",
            "7144fd0d.1e6b74",
            "df0e2dc7.5640a",
            "8be58ec4.d2b1c",
            "2587c55c.be523a",
            "aa8c677e.f7d7a8",
            "e435e590.ea6af8",
            "ac77dd03.cbe38",
            "ce09fda5.cc774",
            "ec238d4e.b109d",
            "4d91a8ac.de7438",
            "3b5438a0.df4c18",
            "316831c3.34802e",
            "62813d4f.ac35a4",
            "527c20bd.30aa8",
            "e7107356.0287a",
            "497481f8.e79cb",
            "ba941dd1.dd4a3",
            "d95f8bde.cb2d58",
            "2c8ab32e.58cffc"
        ],
        "x": 195,
        "y": 4300,
        "wires": [
            []
        ]
    },
    {
        "id": "8be58ec4.d2b1c",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f",
            "8a1f27d9.04abe8",
            "51da34fb.7b949c",
            "e5a26bf1.436b78"
        ],
        "x": 1215,
        "y": 120,
        "wires": []
    },
    {
        "id": "e435e590.ea6af8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 420,
        "wires": []
    },
    {
        "id": "2f45da81.fbc626",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN normalize",
        "links": [
            "49411f05.194a2",
            "7dc683de.2276ac",
            "adcc0c8b.0e5cb",
            "262c1743.d723b8",
            "850f1fbc.5a67b",
            "b0b36e4f.70cd3",
            "a1d37390.0d36c",
            "6eeafb1f.f51084",
            "91fb2347.29837",
            "417a52b1.587cfc",
            "cb5e8b68.828fb8",
            "1f98b903.5f81c7",
            "8c99cb52.b9e638",
            "d3472d85.e4e6f"
        ],
        "x": 1375,
        "y": 4140,
        "wires": []
    },
    {
        "id": "49411f05.194a2",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 55,
        "y": 280,
        "wires": [
            [
                "16acf591.a0678a"
            ]
        ]
    },
    {
        "id": "a1d37390.0d36c",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 95,
        "y": 680,
        "wires": [
            [
                "26fbde80.f86502",
                "183a4e2e.7f6532"
            ]
        ]
    },
    {
        "id": "adcc0c8b.0e5cb",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 95,
        "y": 900,
        "wires": [
            [
                "5ed2a0f4.1191a",
                "4711d6db.b467c8"
            ]
        ]
    },
    {
        "id": "d2aea1bd.91029",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "3.   TC35 in SMS-Textmodus versetzen",
        "info": "",
        "x": 230,
        "y": 820,
        "wires": []
    },
    {
        "id": "45c26f7.790c59",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "AT+CNMI=2,1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CNMI=",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 240,
        "y": 460,
        "wires": [
            [
                "a3ac48eb.199d68"
            ]
        ]
    },
    {
        "id": "a3ac48eb.199d68",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "73ad742.8e9a38c",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "GSM_CNMI",
        "property": "GSM_CNMI",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 500,
        "wires": [
            [
                "3a65a13e.ac740e"
            ]
        ]
    },
    {
        "id": "3a65a13e.ac740e",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "OK",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "OK",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 490,
        "y": 500,
        "wires": [
            [
                "c30c6dfc.e2fdd",
                "5cfbad75.b05e44"
            ],
            [
                "917ff6a3.25e7e8"
            ]
        ]
    },
    {
        "id": "c30c6dfc.e2fdd",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 460,
        "wires": [
            [
                "d0ed1822.94d568",
                "cfa7c1ea.7be58"
            ]
        ]
    },
    {
        "id": "51bc4552.5a2ddc",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "SMS Push aktiv",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1240,
        "y": 460,
        "wires": []
    },
    {
        "id": "7c7e12b.e739aec",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 180,
        "y": 420,
        "wires": [
            [
                "4a4bb5a1.39682c"
            ]
        ]
    },
    {
        "id": "e69c9761.e793a8",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "1. Neue SMS-Nachrichtenanzeigen Push",
        "info": "",
        "x": 240,
        "y": 380,
        "wires": []
    },
    {
        "id": "6eeafb1f.f51084",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 95,
        "y": 460,
        "wires": [
            [
                "45c26f7.790c59",
                "73ad742.8e9a38c"
            ]
        ]
    },
    {
        "id": "2587c55c.be523a",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 640,
        "wires": []
    },
    {
        "id": "ec238d4e.b109d",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 860,
        "wires": []
    },
    {
        "id": "ce09fda5.cc774",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 1960,
        "wires": []
    },
    {
        "id": "13af72db.180d3d",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "6. Signalstärke ermitteln",
        "info": "",
        "x": 160,
        "y": 1820,
        "wires": []
    },
    {
        "id": "5dad3b00.ba0814",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "99 = 0",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "99",
                "fromt": "num",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 630,
        "y": 1980,
        "wires": [
            []
        ]
    },
    {
        "id": "6f0bbe42.a4955",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "NICHT",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "NICHT Bereit",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 830,
        "y": 2020,
        "wires": [
            [
                "c3b205c1.de1d78"
            ]
        ]
    },
    {
        "id": "91fb2347.29837",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 75,
        "y": 2000,
        "wires": [
            [
                "b0deb164.36b31"
            ]
        ]
    },
    {
        "id": "130fbfdc.ebab4",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "# Modem Reset durchführen ----------------------------------------------------------------------------------------------------------------------------------",
        "info": "",
        "x": 500,
        "y": 2260,
        "wires": []
    },
    {
        "id": "9411302e.37ca6",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "# Modem Reset durchführen ----------------------------------------------------------------------------------------------------------------------------------",
        "info": "",
        "x": 500,
        "y": 2420,
        "wires": []
    },
    {
        "id": "7b4cd02.4c4de3",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "nach Modem Reset",
        "links": [
            "80e63e27.062f7",
            "868e3cd3.679b2"
        ],
        "x": 415,
        "y": 2340,
        "wires": []
    },
    {
        "id": "262c1743.d723b8",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 95,
        "y": 2340,
        "wires": [
            [
                "3989ab8e.9e7874"
            ]
        ]
    },
    {
        "id": "7144fd0d.1e6b74",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1275,
        "y": 2300,
        "wires": []
    },
    {
        "id": "1edb69e7.32c1b6",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "Modem Reset",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1100,
        "y": 2380,
        "wires": []
    },
    {
        "id": "60429020.5a23e",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "== 99",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "lt",
                "v": "99",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 150,
        "y": 2640,
        "wires": [
            [
                "c6683081.26c2f",
                "e9a4fa6d.3ca2e8",
                "86f00ff7.b6812"
            ]
        ]
    },
    {
        "id": "5fb20242.f7d7cc",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "7.  # SMS Speicher prüfen",
        "info": "",
        "x": 190,
        "y": 2600,
        "wires": []
    },
    {
        "id": "632696ba.490f78",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1275,
        "y": 2640,
        "wires": []
    },
    {
        "id": "df0e2dc7.5640a",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1435,
        "y": 3020,
        "wires": []
    },
    {
        "id": "5910cbcb.174c54",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "SMS Speicher prüfen",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1080,
        "y": 2680,
        "wires": []
    },
    {
        "id": "c6683081.26c2f",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "checke Eingeganene SMS",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 440,
        "y": 2680,
        "wires": [
            [
                "d6f608a8.4052c8"
            ]
        ]
    },
    {
        "id": "9e88b804.4190c8",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Incomming SMS PUSH",
        "info": "",
        "x": 180,
        "y": 2700,
        "wires": []
    },
    {
        "id": "850f1fbc.5a67b",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 95,
        "y": 2740,
        "wires": [
            [
                "3d01583d.aebe78"
            ]
        ]
    },
    {
        "id": "4d91a8ac.de7438",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1275,
        "y": 2740,
        "wires": []
    },
    {
        "id": "54a70d39.1f15d4",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SMS INPUT",
        "info": "",
        "x": 150,
        "y": 2880,
        "wires": []
    },
    {
        "id": "417a52b1.587cfc",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 75,
        "y": 3380,
        "wires": [
            [
                "fc67751d.ad86d8"
            ]
        ]
    },
    {
        "id": "aa8c677e.f7d7a8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 3060,
        "wires": []
    },
    {
        "id": "b5d302bc.94b24",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "Wait 1 sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 610,
        "y": 3060,
        "wires": [
            [
                "fa0939aa.a1d5c8"
            ]
        ]
    },
    {
        "id": "44086ab7.69f974",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Lösche SMS von SIM",
        "info": "",
        "x": 180,
        "y": 3020,
        "wires": []
    },
    {
        "id": "c6e0a26e.b0849",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "261014aa.f98f8c"
        ],
        "x": 75,
        "y": 2920,
        "wires": [
            [
                "6829305e.bccfa"
            ]
        ]
    },
    {
        "id": "36dd9e13.877942",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "checke Eingeganene SMS",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS eingegangen!",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 480,
        "y": 2780,
        "wires": [
            [
                "b1b39cbe.8eff8"
            ]
        ]
    },
    {
        "id": "46842513.31241c",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "SMS Push",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1110,
        "y": 2780,
        "wires": []
    },
    {
        "id": "a221f7a5.4ec738",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "sende SMS...",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "sende SMS...",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 880,
        "y": 3300,
        "wires": [
            [
                "3d0b0db4.204fe2",
                "78cb1eaa.af155",
                "4064077.deb58f8"
            ]
        ]
    },
    {
        "id": "3d0b0db4.204fe2",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "15",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "15",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 3300,
        "wires": [
            []
        ]
    },
    {
        "id": "c71eaeb0.a117c",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "1",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 3360,
        "wires": [
            []
        ]
    },
    {
        "id": "2f8933ac.0a51ec",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "SMS erfolgreich Versand",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS erfolgreich Versand",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 850,
        "y": 3360,
        "wires": [
            [
                "c71eaeb0.a117c",
                "78cb1eaa.af155",
                "5916ac7d.9d2a24"
            ]
        ]
    },
    {
        "id": "401aaf51.da716",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "SMS NICHT Versand",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "SMS konnte NICHT Versand werden",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 3440,
        "wires": [
            [
                "b9cb5dac.f821b",
                "78cb1eaa.af155",
                "957769d4.8bc8e8"
            ]
        ]
    },
    {
        "id": "b9cb5dac.f821b",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "13",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "13",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 3440,
        "wires": [
            []
        ]
    },
    {
        "id": "1fce9bcd.1e5d44",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 1370,
        "y": 3240,
        "wires": [
            []
        ]
    },
    {
        "id": "a2f7fc0a.41dad",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "x": 1390,
        "y": 2140,
        "wires": [
            []
        ]
    },
    {
        "id": "b7942615.a2aa98",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "msg.input",
        "property": "input",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "SERIAL_INPUT",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "START",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "STOP",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "RESET",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "SET_BAUD",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "SEND_SMS",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "SIGNAL",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 7,
        "x": 500,
        "y": 4240,
        "wires": [
            [
                "2662c266.dbc2fe"
            ],
            [
                "b6d9635.3301fa"
            ],
            [
                "a606f561.3ef308"
            ],
            [
                "ba148604.351808"
            ],
            [
                "74f1dab3.14bd34"
            ],
            [
                "62edc352.27b03c"
            ],
            [
                "9a4bce11.64946"
            ]
        ],
        "icon": "node-red/inject.svg"
    },
    {
        "id": "2662c266.dbc2fe",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "SERIAL_INPUT",
        "links": [
            "488992b.f7e2b6c",
            "d131a127.66928",
            "5b54e58f.d8455c"
        ],
        "x": 675,
        "y": 4140,
        "wires": []
    },
    {
        "id": "488992b.f7e2b6c",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL_INPUT",
        "links": [
            "2662c266.dbc2fe"
        ],
        "x": 895,
        "y": 4140,
        "wires": [
            [
                "1c79ed59.c9a4d3",
                "cd71b2fa.363f9"
            ]
        ]
    },
    {
        "id": "15fa306f.0afa7",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SERIAL_INPUT",
        "info": "",
        "x": 780,
        "y": 4140,
        "wires": []
    },
    {
        "id": "b6d9635.3301fa",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "START",
        "links": [
            "76709a4d.54fd34"
        ],
        "x": 675,
        "y": 4180,
        "wires": []
    },
    {
        "id": "5b78928c.82fe9c",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "START",
        "info": "",
        "x": 750,
        "y": 4180,
        "wires": []
    },
    {
        "id": "76709a4d.54fd34",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "START",
        "links": [
            "b6d9635.3301fa",
            "39897ba9.7d1514"
        ],
        "x": 95,
        "y": 120,
        "wires": [
            [
                "45b03f32.cde3e",
                "b6d169ae.1918e8"
            ]
        ]
    },
    {
        "id": "cd93d7c1.69ff58",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "links": [
            "ba148604.351808",
            "1414f54c.8ea6eb"
        ],
        "x": 95,
        "y": 2300,
        "wires": [
            [
                "638b0a97.f83d14"
            ]
        ]
    },
    {
        "id": "ba148604.351808",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "links": [
            "cd93d7c1.69ff58",
            "e4340d1b.de0a2",
            "e5a26bf1.436b78",
            "51da34fb.7b949c",
            "8a1f27d9.04abe8",
            "d5c73f08.77758",
            "19116b12.fcf025",
            "790c98d8.ab9f68"
        ],
        "x": 675,
        "y": 4260,
        "wires": []
    },
    {
        "id": "14fbaec7.e48e21",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "info": "",
        "x": 750,
        "y": 4260,
        "wires": []
    },
    {
        "id": "394eb530.0a467a",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SET_BAUD",
        "links": [
            "74f1dab3.14bd34"
        ],
        "x": 875,
        "y": 4400,
        "wires": [
            [
                "52340b3.4cf63f4"
            ]
        ]
    },
    {
        "id": "74f1dab3.14bd34",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "SET_BAUD",
        "links": [
            "394eb530.0a467a"
        ],
        "x": 675,
        "y": 4300,
        "wires": []
    },
    {
        "id": "28fbb8cb.60e768",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SET_BAUD",
        "info": "",
        "x": 770,
        "y": 4300,
        "wires": []
    },
    {
        "id": "52340b3.4cf63f4",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "SERIAL",
        "rules": [
            {
                "t": "move",
                "p": "PORT",
                "pt": "flow",
                "to": "SERIAL",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 980,
        "y": 4400,
        "wires": [
            [
                "7cf980f6.69c44"
            ]
        ]
    },
    {
        "id": "78cb1eaa.af155",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1080,
        "y": 3500,
        "wires": [
            [
                "34f38d0f.179172"
            ]
        ]
    },
    {
        "id": "ddddc340.8d69a",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2980,
        "wires": [
            [
                "d01f3747.477d38"
            ]
        ]
    },
    {
        "id": "334e712d.7eae7e",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2920,
        "wires": [
            [
                "a6aecdd1.c3112"
            ]
        ]
    },
    {
        "id": "b1b39cbe.8eff8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 960,
        "y": 2780,
        "wires": [
            [
                "46842513.31241c"
            ]
        ]
    },
    {
        "id": "d6f608a8.4052c8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 880,
        "y": 2680,
        "wires": [
            [
                "5910cbcb.174c54"
            ]
        ]
    },
    {
        "id": "f594fb25.ad2448",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 460,
        "y": 2380,
        "wires": [
            [
                "1edb69e7.32c1b6"
            ]
        ]
    },
    {
        "id": "c3b205c1.de1d78",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1000,
        "y": 2040,
        "wires": [
            [
                "46bb8398.c5cd9c"
            ]
        ]
    },
    {
        "id": "c81d6ffc.aef7",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1000,
        "y": 2000,
        "wires": [
            [
                "f9494dd3.568cc"
            ]
        ]
    },
    {
        "id": "e9480ad1.b062a8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 960,
        "y": 900,
        "wires": [
            [
                "b4c82516.0530f8"
            ]
        ]
    },
    {
        "id": "28979353.49285c",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1000,
        "y": 680,
        "wires": [
            [
                "fbeebfe7.98a4d"
            ]
        ]
    },
    {
        "id": "d0ed1822.94d568",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1040,
        "y": 460,
        "wires": [
            [
                "51bc4552.5a2ddc"
            ]
        ]
    },
    {
        "id": "b0dbb491.91ac18",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 200,
        "wires": [
            [
                "a56d5a4d.4154a8"
            ]
        ]
    },
    {
        "id": "b6d169ae.1918e8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "AT",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "AT",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 310,
        "y": 120,
        "wires": [
            [
                "e9f7594c.56b078",
                "6b90938.b16826c",
                "3117c9ef.1eb1e6"
            ]
        ]
    },
    {
        "id": "7cf980f6.69c44",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "payload",
        "func": "msg.payload = msg.SERIAL + \" cs8 -parenb -cstopb clocal -echo raw speed 115200\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1120,
        "y": 4400,
        "wires": [
            [
                "d5261f41.bb261"
            ]
        ]
    },
    {
        "id": "62edc352.27b03c",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "SEND_SMS",
        "links": [
            "ed7a57a1.010b68"
        ],
        "x": 675,
        "y": 4340,
        "wires": []
    },
    {
        "id": "5fe0c884.892798",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SEND_SMS",
        "info": "",
        "x": 770,
        "y": 4340,
        "wires": []
    },
    {
        "id": "ed7a57a1.010b68",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SEND_SMS",
        "links": [
            "62edc352.27b03c",
            "7e34c49a.79e90c"
        ],
        "x": 75,
        "y": 3680,
        "wires": [
            [
                "a45a3a22.151cf8"
            ]
        ]
    },
    {
        "id": "2e3c9f3a.1e763",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "Serial-In",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1180,
        "y": 4100,
        "wires": []
    },
    {
        "id": "409b2d08.7a6d34",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Messenger_LetzterPruefStatus",
        "info": "",
        "x": 1750,
        "y": 200,
        "wires": []
    },
    {
        "id": "acd47b5f.db8688",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Messenger_LetzteSignalstaerke",
        "info": "",
        "x": 1690,
        "y": 1980,
        "wires": []
    },
    {
        "id": "aea52756.795828",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Messenger_Modus",
        "info": "",
        "x": 1650,
        "y": 2100,
        "wires": []
    },
    {
        "id": "382aec75.7f37e4",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Messenger_LetzterSendeStatus",
        "info": "",
        "x": 1670,
        "y": 3300,
        "wires": []
    },
    {
        "id": "ecf448f5.0a9ce8",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Messenger_SMSEmfangAbsenderID",
        "info": "",
        "x": 1680,
        "y": 2860,
        "wires": []
    },
    {
        "id": "4a14cb3e.49f704",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Messenger_SMSEmfangText",
        "info": "",
        "x": 1660,
        "y": 2940,
        "wires": []
    },
    {
        "id": "8a30ee5a.164cf",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 1390,
        "y": 1960,
        "wires": [
            []
        ]
    },
    {
        "id": "917ff6a3.25e7e8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "5",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "5",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "574fb898.aa0c08",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "3117c9ef.1eb1e6",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 540,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "8a1f27d9.04abe8",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "0",
        "links": [
            "8be58ec4.d2b1c",
            "a606f561.3ef308",
            "ba148604.351808"
        ],
        "x": 1315,
        "y": 240,
        "wires": [
            [
                "a6a3b23b.af5fa"
            ]
        ]
    },
    {
        "id": "a6a3b23b.af5fa",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "51da34fb.7b949c",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "0",
        "links": [
            "8be58ec4.d2b1c",
            "a606f561.3ef308",
            "ba148604.351808"
        ],
        "x": 1295,
        "y": 1920,
        "wires": [
            [
                "4cecd777.dd6758"
            ]
        ]
    },
    {
        "id": "4cecd777.dd6758",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1390,
        "y": 1920,
        "wires": [
            []
        ]
    },
    {
        "id": "e5a26bf1.436b78",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "0",
        "links": [
            "8be58ec4.d2b1c",
            "a606f561.3ef308",
            "ba148604.351808"
        ],
        "x": 1275,
        "y": 3200,
        "wires": [
            [
                "6cf70f8c.06d81"
            ]
        ]
    },
    {
        "id": "6cf70f8c.06d81",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "0",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1370,
        "y": 3200,
        "wires": [
            []
        ]
    },
    {
        "id": "8f2963d1.67fae",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1360,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "960b19e4.a30128",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 460,
        "y": 1960,
        "wires": [
            []
        ]
    },
    {
        "id": "c8a3a1a3.3b0aa",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 460,
        "y": 2040,
        "wires": [
            []
        ]
    },
    {
        "id": "7c257a45.9fb544",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "GSM_CSQ",
        "property": "GSM_CSQ",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            },
            {
                "t": "false"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 170,
        "y": 2040,
        "wires": [
            [
                "c176ee48.710aa",
                "60429020.5a23e",
                "c8a3a1a3.3b0aa"
            ],
            [
                "7a132310.043ebc"
            ]
        ]
    },
    {
        "id": "a45a3a22.151cf8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "nicht leer",
        "property": "payload.number",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 3680,
        "wires": [
            [
                "a013bf4d.5fe9f",
                "ba4e74c5.0133e8",
                "6d20bef0.93b76",
                "892aa046.ff347",
                "4a726012.51588"
            ]
        ]
    },
    {
        "id": "78e3a141.c036c",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SEND SMS ",
        "info": "",
        "x": 130,
        "y": 3640,
        "wires": []
    },
    {
        "id": "45b03f32.cde3e",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status Start",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️ Starte...\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 80,
        "wires": [
            [
                "704a28fe.f3fae8"
            ]
        ]
    },
    {
        "id": "4ac832ef.ec9c0c",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "704a28fe.f3fae8",
            "ff929e80.febe",
            "9286232f.60a7d",
            "305fe7e6.0adba8",
            "bb28828b.68c63",
            "96ed99a4.ed2f08",
            "81a24989.245cd8",
            "2c2e35ed.3d5d1a",
            "810cba4c.eced88",
            "636bffcd.5f22e",
            "26715a38.f1b7e6",
            "462a16f.c5339e8",
            "daa0a37.9d8786",
            "f84e5225.d2d74",
            "d5bb8329.c51b4",
            "865c3944.51acf8",
            "6bb4720b.91176c",
            "565f2215.ed8bec",
            "1d575379.0142fd",
            "77e4c144.2a44b",
            "b9f8bc1b.416c8",
            "20657948.e5fc26",
            "a1a08d4.994407",
            "1b542991.083246",
            "86004cfc.fd58c",
            "46b8e5ab.aa57cc",
            "377f601b.b5fc"
        ],
        "x": 195,
        "y": 4360,
        "wires": [
            [
                "1941ac98.e44073"
            ]
        ]
    },
    {
        "id": "704a28fe.f3fae8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 355,
        "y": 80,
        "wires": []
    },
    {
        "id": "cfa7c1ea.7be58",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️️️️️️️️⚫️⚫️⚫️⚫️⚫️⚫️⚫️ SMS Push aktiviert\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 970,
        "y": 540,
        "wires": [
            [
                "ff929e80.febe"
            ]
        ]
    },
    {
        "id": "ff929e80.febe",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1105,
        "y": 540,
        "wires": []
    },
    {
        "id": "fa6d2994.b67088",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️️⚫️⚫️⚫️⚫️⚫️⚫️ Errormessage aktiviert\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 990,
        "y": 760,
        "wires": [
            [
                "9286232f.60a7d"
            ]
        ]
    },
    {
        "id": "9286232f.60a7d",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1125,
        "y": 760,
        "wires": []
    },
    {
        "id": "50443872.0dc8f8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️️⚫️⚫️⚫️⚫️⚫️ Text Modus aktiviert\"};\nreturn msg;\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 950,
        "y": 940,
        "wires": [
            [
                "305fe7e6.0adba8"
            ]
        ]
    },
    {
        "id": "305fe7e6.0adba8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1095,
        "y": 940,
        "wires": []
    },
    {
        "id": "d31d0d75.1c119",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️️⚫️⚫️ Signalstärke:\" + msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 830,
        "y": 2140,
        "wires": [
            [
                "81a24989.245cd8"
            ]
        ]
    },
    {
        "id": "81a24989.245cd8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1255,
        "y": 2140,
        "wires": []
    },
    {
        "id": "1941ac98.e44073",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "limit",
        "pauseType": "rate",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 290,
        "y": 4360,
        "wires": [
            []
        ]
    },
    {
        "id": "be7bb84d.71a688",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status Start",
        "func": "msg.payload = {fill:\"red\",shape:\"dot\",text:\"keine Verbindung\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 870,
        "y": 140,
        "wires": [
            [
                "810cba4c.eced88"
            ]
        ]
    },
    {
        "id": "810cba4c.eced88",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 975,
        "y": 140,
        "wires": []
    },
    {
        "id": "4064077.deb58f8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 3320,
        "wires": [
            [
                "636bffcd.5f22e"
            ]
        ]
    },
    {
        "id": "636bffcd.5f22e",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1195,
        "y": 3320,
        "wires": []
    },
    {
        "id": "5916ac7d.9d2a24",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 3400,
        "wires": [
            [
                "26715a38.f1b7e6",
                "ca55bde0.d00fe"
            ]
        ]
    },
    {
        "id": "26715a38.f1b7e6",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1395,
        "y": 3400,
        "wires": []
    },
    {
        "id": "957769d4.8bc8e8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"red\",shape:\"ring\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1070,
        "y": 3460,
        "wires": [
            [
                "462a16f.c5339e8"
            ]
        ]
    },
    {
        "id": "462a16f.c5339e8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1195,
        "y": 3460,
        "wires": []
    },
    {
        "id": "3e7a335f.a0ec9c",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1310,
        "y": 3400,
        "wires": [
            [
                "26715a38.f1b7e6"
            ]
        ]
    },
    {
        "id": "ca55bde0.d00fe",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "1sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1190,
        "y": 3400,
        "wires": [
            [
                "3e7a335f.a0ec9c"
            ]
        ]
    },
    {
        "id": "dcaa2451.2ef768",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"blue\",shape:\"dot\",text:\"SMS empfangen!\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 2720,
        "wires": [
            [
                "daa0a37.9d8786",
                "9fce369d.fd12b8"
            ]
        ]
    },
    {
        "id": "daa0a37.9d8786",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 755,
        "y": 2720,
        "wires": []
    },
    {
        "id": "9fce369d.fd12b8",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "3sec",
        "pauseType": "delay",
        "timeout": "3",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 2720,
        "wires": [
            [
                "a044f464.a0beb8"
            ]
        ]
    },
    {
        "id": "a044f464.a0beb8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 650,
        "y": 2720,
        "wires": [
            [
                "daa0a37.9d8786"
            ]
        ]
    },
    {
        "id": "b6307713.bf2388",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "STOP",
        "links": [
            "a606f561.3ef308"
        ],
        "x": 1875,
        "y": 360,
        "wires": [
            [
                "b242dc2e.78bf1"
            ]
        ]
    },
    {
        "id": "a606f561.3ef308",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STOP",
        "links": [
            "b6307713.bf2388",
            "8a1f27d9.04abe8",
            "e5a26bf1.436b78",
            "51da34fb.7b949c",
            "e0abd796.b78e18",
            "d5c73f08.77758",
            "22130148.a68e0e",
            "19116b12.fcf025",
            "790c98d8.ab9f68"
        ],
        "x": 675,
        "y": 4220,
        "wires": []
    },
    {
        "id": "cfd3d3bf.fae02",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "STOP",
        "info": "",
        "x": 750,
        "y": 4220,
        "wires": []
    },
    {
        "id": "e4340d1b.de0a2",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "links": [
            "ba148604.351808"
        ],
        "x": 895,
        "y": 4260,
        "wires": [
            [
                "15c068cf.f06317",
                "43f7a6c.6584258"
            ]
        ]
    },
    {
        "id": "e0abd796.b78e18",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "STOP",
        "links": [
            "a606f561.3ef308"
        ],
        "x": 895,
        "y": 4220,
        "wires": [
            [
                "a1dd1f4a.e3b24"
            ]
        ]
    },
    {
        "id": "a1dd1f4a.e3b24",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"grey\",shape:\"ring\",text:\"Stop\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 4220,
        "wires": [
            [
                "d5bb8329.c51b4"
            ]
        ]
    },
    {
        "id": "d5bb8329.c51b4",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1135,
        "y": 4220,
        "wires": []
    },
    {
        "id": "d5c73f08.77758",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "AUS",
        "links": [
            "a606f561.3ef308",
            "ba148604.351808"
        ],
        "x": 1295,
        "y": 2180,
        "wires": [
            [
                "59d92d2.cc2d3d4"
            ]
        ]
    },
    {
        "id": "59d92d2.cc2d3d4",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "false",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1390,
        "y": 2180,
        "wires": [
            []
        ]
    },
    {
        "id": "316831c3.34802e",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 975,
        "y": 3680,
        "wires": []
    },
    {
        "id": "9078f749.8a2358",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_PING",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "2eb53b20.1ca534",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CNMI",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "7e259982.51efd8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMEE",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 480,
        "wires": [
            []
        ]
    },
    {
        "id": "478dac2e.f2c014",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CMGF",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "2331aa36.0fd506",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "setze flow.GSM_CPIN",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "86c1b7c5.744558",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_POLL",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 640,
        "wires": [
            []
        ]
    },
    {
        "id": "2d6a7312.070dfc",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CSQ",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "ac9d620e.c148a",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 1810,
        "y": 400,
        "wires": [
            [
                "9078f749.8a2358",
                "2eb53b20.1ca534",
                "7e259982.51efd8",
                "478dac2e.f2c014",
                "2331aa36.0fd506",
                "2d6a7312.070dfc",
                "86c1b7c5.744558",
                "990ce62f.6c7768",
                "3196eb4.4d28914",
                "c3bd84f1.80bed8",
                "ab90bcd6.bcdcc",
                "e2530495.d2b228"
            ]
        ]
    },
    {
        "id": "22130148.a68e0e",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "STOP",
        "links": [
            "a606f561.3ef308"
        ],
        "x": 1875,
        "y": 840,
        "wires": [
            [
                "9078f749.8a2358",
                "2eb53b20.1ca534",
                "7e259982.51efd8",
                "478dac2e.f2c014",
                "2331aa36.0fd506",
                "2d6a7312.070dfc",
                "86c1b7c5.744558",
                "990ce62f.6c7768",
                "3196eb4.4d28914",
                "c3bd84f1.80bed8",
                "ab90bcd6.bcdcc",
                "e2530495.d2b228"
            ]
        ]
    },
    {
        "id": "990ce62f.6c7768",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2080,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "c3bd84f1.80bed8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_INDEX",
                "pt": "flow",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 760,
        "wires": [
            []
        ]
    },
    {
        "id": "3196eb4.4d28914",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_Delete",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "ab90bcd6.bcdcc",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 800,
        "wires": [
            []
        ]
    },
    {
        "id": "e2530495.d2b228",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "SMS_INPUT",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2090,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "310d2ef2.6c57a2",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "rate",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1220,
        "y": 4140,
        "wires": [
            [
                "2f45da81.fbc626",
                "261014aa.f98f8c"
            ]
        ]
    },
    {
        "id": "4c63a73f.2f6648",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 860,
        "y": 2840,
        "wires": [
            [
                "f579b3b9.6e146"
            ]
        ]
    },
    {
        "id": "86f00ff7.b6812",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️⚪️️⚫️ prüfe ungelesene SMS\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 2580,
        "wires": [
            [
                "565f2215.ed8bec",
                "f437b87d.54b3f8",
                "d4b4ba47.56edd8"
            ]
        ]
    },
    {
        "id": "f437b87d.54b3f8",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "1sec",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 2600,
        "wires": [
            [
                "a8c941b4.74d58"
            ]
        ]
    },
    {
        "id": "a8c941b4.74d58",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪ Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1150,
        "y": 2600,
        "wires": [
            [
                "565f2215.ed8bec"
            ]
        ]
    },
    {
        "id": "565f2215.ed8bec",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1275,
        "y": 2580,
        "wires": []
    },
    {
        "id": "b1731f2b.8f0be",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "🔵;🔴;⚫️;⚪️;🟢;🔘;",
        "info": "⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️️️️️️️️⚫️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️️⚫️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️️⚫️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️️⚫️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️️⚫️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️️⚫️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️⚪️️⚫️\n⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️",
        "x": 180,
        "y": 4120,
        "wires": []
    },
    {
        "id": "d4b4ba47.56edd8",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "2sec",
        "pauseType": "delay",
        "timeout": "2",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 530,
        "y": 2560,
        "wires": [
            [
                "2b32009e.bffc4"
            ]
        ]
    },
    {
        "id": "2b32009e.bffc4",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1150,
        "y": 2560,
        "wires": [
            [
                "565f2215.ed8bec"
            ]
        ]
    },
    {
        "id": "2437c7b8.3dcd78",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "AUTOSTART",
        "property": "AUTOSTART",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 420,
        "y": 20,
        "wires": [
            [
                "39897ba9.7d1514"
            ]
        ]
    },
    {
        "id": "c9e5858d.f6a4c8",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "3",
        "topic": "",
        "payload": "Autostart",
        "payloadType": "str",
        "x": 120,
        "y": 20,
        "wires": [
            [
                "2437c7b8.3dcd78"
            ]
        ]
    },
    {
        "id": "39897ba9.7d1514",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "AUTOSTART",
        "links": [
            "76709a4d.54fd34"
        ],
        "x": 755,
        "y": 20,
        "wires": []
    },
    {
        "id": "62ccc560.b18e4c",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "send SMS",
        "links": [
            "74508830.baece8"
        ],
        "x": 675,
        "y": 3640,
        "wires": []
    },
    {
        "id": "74508830.baece8",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SMS Timeout",
        "links": [
            "62ccc560.b18e4c"
        ],
        "x": 735,
        "y": 3400,
        "wires": [
            [
                "f7622c4.93d94d"
            ]
        ]
    },
    {
        "id": "6c5124f6.2e74bc",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "to Serial",
        "info": "",
        "x": 100,
        "y": 4300,
        "wires": []
    },
    {
        "id": "d3de4f97.ec004",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "info": "",
        "x": 90,
        "y": 4360,
        "wires": []
    },
    {
        "id": "f8e4d48e.dedb58",
        "type": "http in",
        "z": "c5823db2.4ff16",
        "name": "",
        "url": "/SIM800",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 230,
        "y": 4700,
        "wires": [
            [
                "e001b170.84f7f"
            ]
        ]
    },
    {
        "id": "d73ab5f8.293bc8",
        "type": "http in",
        "z": "c5823db2.4ff16",
        "name": "",
        "url": "/SIM800",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 230,
        "y": 4780,
        "wires": [
            [
                "6533fd1.1691d04"
            ]
        ]
    },
    {
        "id": "cc25047.2b8b7f8",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "msg.url = \"addons/red/SIM800\";",
        "func": "msg.url = \"addons/red/SIM800\";\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 670,
        "y": 4660,
        "wires": [
            [
                "2aa8fb3.a165504"
            ]
        ]
    },
    {
        "id": "2aa8fb3.a165504",
        "type": "template",
        "z": "c5823db2.4ff16",
        "name": "JavaScript",
        "field": "payload.script",
        "fieldType": "msg",
        "format": "javascript",
        "syntax": "plain",
        "template": "$(document).ready(function(e) {\n    \n    $(\"form[ajax=true]\").submit(function(e) {\n        \n        e.preventDefault();\n        \n        var form_data = $(this).serialize();\n        var form_url = $(this).attr(\"action\");\n        var form_method = $(this).attr(\"method\").toUpperCase();\n        \n        $(\"#loadingimg\").show();\n        \n        $.ajax({\n            url: form_url, \n            type: form_method,      \n            data: form_data,     \n            cache: false,\n            success: function(returnhtml){                          \n                $(\"#result\").html(returnhtml); \n                $(\"#loadingimg\").hide();                    \n            }           \n        });    \n        \n    });\n    \n});",
        "x": 910,
        "y": 4700,
        "wires": [
            [
                "991a5843.dc6488"
            ]
        ]
    },
    {
        "id": "12c6983a.49bb58",
        "type": "http response",
        "z": "c5823db2.4ff16",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 1370,
        "y": 4700,
        "wires": []
    },
    {
        "id": "e2f365e5.5c0148",
        "type": "template",
        "z": "c5823db2.4ff16",
        "name": "HTML",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n  <head>\n    <title>SIM800 GSM Modul</title>\n    <meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\">\n    <meta charset=\"utf-8\">\n    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js\"></script>\n    <style>{{{payload.style}}}</style>\n  </head>\n\n<div>\n  <h2>SMS senden</h2>\n  <form method=\"post\" action=\"/{{url}}\" ajax=\"true\">\n    <label for=\"number\">Nummer</label>\n    <input type=\"text\" id=\"number\" name=\"number\">\n    \n    <label for=\"message\">SMS Text</label>\n    <input type=\"text\" id=\"message\" name=\"message\">\n  \n    <input type=\"submit\" value=\"senden\">\n  </form>\n  <span id=\"result\"></span>\n</div>\n\n</body>\n</html>\n<script>{{{payload.script}}}</script>",
        "x": 1190,
        "y": 4700,
        "wires": [
            [
                "12c6983a.49bb58"
            ]
        ]
    },
    {
        "id": "c05d2c61.10f6",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Website",
        "info": "",
        "x": 180,
        "y": 4660,
        "wires": []
    },
    {
        "id": "2e00161a.2e9dda",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Form Submission",
        "info": "",
        "x": 200,
        "y": 4740,
        "wires": []
    },
    {
        "id": "6533fd1.1691d04",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "nicht leer",
        "property": "payload.message",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 440,
        "y": 4780,
        "wires": [
            [
                "8f80657e.57b7d8",
                "5b14da1.a920024"
            ]
        ]
    },
    {
        "id": "3720de3f.b0a6d2",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SMS WEBIF",
        "info": "",
        "x": 110,
        "y": 4620,
        "wires": []
    },
    {
        "id": "8f80657e.57b7d8",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "Limiter",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "5",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 890,
        "y": 4780,
        "wires": [
            [
                "7e34c49a.79e90c"
            ]
        ]
    },
    {
        "id": "991a5843.dc6488",
        "type": "template",
        "z": "c5823db2.4ff16",
        "name": "CSS",
        "field": "payload.style",
        "fieldType": "msg",
        "format": "html",
        "syntax": "mustache",
        "template": "input[type=text], select {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 100%;\n    background-color: #285E8A;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #1990C7;\n}\n\ndiv {\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    background-color: #f2f2f2;\n    padding: 20px;\n}\n\nh2 {\n    color: #285E8A;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    text-align: center;\n}",
        "x": 1070,
        "y": 4700,
        "wires": [
            [
                "e2f365e5.5c0148"
            ]
        ]
    },
    {
        "id": "7e34c49a.79e90c",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "SEND_SMS",
        "links": [
            "ed7a57a1.010b68"
        ],
        "x": 1155,
        "y": 4780,
        "wires": []
    },
    {
        "id": "5b14da1.a920024",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "return msg.payload to client",
        "func": "msg.payload = 'OK';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 680,
        "y": 4740,
        "wires": [
            [
                "a00985b7.785908"
            ]
        ]
    },
    {
        "id": "a00985b7.785908",
        "type": "http response",
        "z": "c5823db2.4ff16",
        "name": "",
        "x": 1190,
        "y": 4740,
        "wires": []
    },
    {
        "id": "261014aa.f98f8c",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "SERIAL_INPUT",
        "links": [
            "c6e0a26e.b0849"
        ],
        "x": 1375,
        "y": 4100,
        "wires": []
    },
    {
        "id": "fe8b7b71.fba018",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CPIN? \"\\r\"",
        "func": "var at_cmd = \"AT+CPIN?\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1100,
        "wires": [
            [
                "527c20bd.30aa8"
            ]
        ]
    },
    {
        "id": "2589c028.713e5",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "+CPIN: READY",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CPIN: READY",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "+CME ERROR",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 3,
        "x": 400,
        "y": 1240,
        "wires": [
            [
                "a8950858.e21598",
                "faf74d26.e34d5"
            ],
            [
                "1e8be87.47f2718",
                "1165f2c5.e4f76d",
                "681ed34f.b281ac"
            ],
            [
                "966449f.d5418b8",
                "def61631.b207c8",
                "681ed34f.b281ac"
            ]
        ]
    },
    {
        "id": "9ae9e884.3b92c8",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "Sim PIN ok, warte 5 sec.",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1130,
        "y": 1180,
        "wires": []
    },
    {
        "id": "dce0dcc7.2477",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 160,
        "y": 1120,
        "wires": [
            [
                "50d74fba.d16e7"
            ]
        ]
    },
    {
        "id": "966449f.d5418b8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "7",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "7",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1240,
        "wires": [
            []
        ]
    },
    {
        "id": "c1cc2428.d3e138",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "4. SIMPin prüfen",
        "info": "",
        "x": 160,
        "y": 1080,
        "wires": []
    },
    {
        "id": "281b71c2.3aceae",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "AT+CPIN",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "AT+CPIN",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 220,
        "y": 1180,
        "wires": [
            [
                "accb6e8a.8bd39"
            ]
        ]
    },
    {
        "id": "accb6e8a.8bd39",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 1180,
        "wires": [
            []
        ]
    },
    {
        "id": "a8950858.e21598",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "setze flow.GSM_CPIN",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            },
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 1180,
        "wires": [
            [
                "85d310c7.35352",
                "69f78e3c.7b76e"
            ]
        ]
    },
    {
        "id": "77ed6ae7.ee2ef4",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "GSM_CPIN",
        "property": "GSM_CPIN",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 1240,
        "wires": [
            [
                "2589c028.713e5"
            ]
        ]
    },
    {
        "id": "85d310c7.35352",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 920,
        "y": 1180,
        "wires": [
            [
                "9ae9e884.3b92c8"
            ]
        ]
    },
    {
        "id": "2ce2b587.f7b13a",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️️⚫️⚫️⚫️⚫️ warte auf Provider...\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1090,
        "y": 1260,
        "wires": [
            [
                "b9f8bc1b.416c8"
            ]
        ]
    },
    {
        "id": "50d74fba.d16e7",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "PIN",
        "property": "PIN",
        "propertyType": "env",
        "rules": [
            {
                "t": "empty"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 670,
        "y": 1120,
        "wires": [
            [
                "fe8b7b71.fba018"
            ],
            [
                "e7734931.e00678"
            ]
        ]
    },
    {
        "id": "c68b5c6f.2b5ef",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CPIN=0000 \"\\r\"",
        "func": "var at_cmd = \"AT+CPIN=\" + msg.PIN;\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1110,
        "y": 1140,
        "wires": [
            [
                "e7107356.0287a"
            ]
        ]
    },
    {
        "id": "e7734931.e00678",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "PIN",
        "rules": [
            {
                "t": "set",
                "p": "PIN",
                "pt": "msg",
                "to": "PIN",
                "tot": "env"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 910,
        "y": 1140,
        "wires": [
            [
                "c68b5c6f.2b5ef"
            ]
        ]
    },
    {
        "id": "98a9b38d.e9de2",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SIM PIN setzen",
        "info": "",
        "x": 1340,
        "y": 1140,
        "wires": []
    },
    {
        "id": "995491cd.8354e",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SIM prüfen",
        "info": "",
        "x": 1320,
        "y": 1100,
        "wires": []
    },
    {
        "id": "f0f681e2.26507",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"red\",shape:\"dot\",text:\"SIM PIN CHECK NICHT OK!\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 770,
        "y": 1320,
        "wires": [
            [
                "20657948.e5fc26"
            ]
        ]
    },
    {
        "id": "1e8be87.47f2718",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "erneut CPIN?",
        "func": "var at_cmd = \"AT+CPIN?\";\nmsg.payload = at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1100,
        "y": 1220,
        "wires": [
            [
                "497481f8.e79cb"
            ]
        ]
    },
    {
        "id": "34df8cec.a65a74",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SIM prüfen",
        "info": "",
        "x": 1320,
        "y": 1220,
        "wires": []
    },
    {
        "id": "69f78e3c.7b76e",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "PIN",
        "property": "PIN",
        "propertyType": "env",
        "rules": [
            {
                "t": "empty"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 910,
        "y": 1280,
        "wires": [
            [
                "2ce2b587.f7b13a"
            ],
            [
                "46936038.30057"
            ]
        ]
    },
    {
        "id": "46936038.30057",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"red\",shape:\"ring\",text:\"KEIN SIM PIN! Check die Config!\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1090,
        "y": 1340,
        "wires": [
            [
                "d75bf918.3ee3f8",
                "b9f8bc1b.416c8"
            ]
        ]
    },
    {
        "id": "d75bf918.3ee3f8",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "500ms",
        "pauseType": "delay",
        "timeout": "500",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 1090,
        "y": 1300,
        "wires": [
            [
                "2ce2b587.f7b13a"
            ]
        ]
    },
    {
        "id": "1165f2c5.e4f76d",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "8",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "8",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1200,
        "wires": [
            []
        ]
    },
    {
        "id": "def61631.b207c8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "PIN leer",
        "property": "PIN",
        "propertyType": "env",
        "rules": [
            {
                "t": "empty"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 640,
        "y": 1320,
        "wires": [
            [
                "f0f681e2.26507"
            ]
        ]
    },
    {
        "id": "681ed34f.b281ac",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "setze flow.GSM_CPIN",
        "rules": [
            {
                "t": "set",
                "p": "GSM_CPIN",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 680,
        "y": 1280,
        "wires": [
            []
        ]
    },
    {
        "id": "1f98b903.5f81c7",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 95,
        "y": 1180,
        "wires": [
            [
                "281b71c2.3aceae",
                "77ed6ae7.ee2ef4"
            ]
        ]
    },
    {
        "id": "527c20bd.30aa8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 1100,
        "wires": []
    },
    {
        "id": "e7107356.0287a",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 1140,
        "wires": []
    },
    {
        "id": "497481f8.e79cb",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 1220,
        "wires": []
    },
    {
        "id": "b9f8bc1b.416c8",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1235,
        "y": 1300,
        "wires": []
    },
    {
        "id": "20657948.e5fc26",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 855,
        "y": 1320,
        "wires": []
    },
    {
        "id": "ad3e3e61.cffd1",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "5 Sekunden bis zum vollständigen Einloggen beim Provider warten",
        "info": "",
        "x": 680,
        "y": 1460,
        "wires": []
    },
    {
        "id": "b8e1f904.e6ec98",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "+CREG:",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "+CREG:",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 140,
        "y": 1580,
        "wires": [
            [
                "35b05178.4eb51e"
            ]
        ]
    },
    {
        "id": "a243e16f.9615b",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "bei Mobilfunkprovider angemeldet",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 1160,
        "y": 1540,
        "wires": []
    },
    {
        "id": "316636.26b4d9ca",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "60s nach Reset",
        "pauseType": "delay",
        "timeout": "60",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 900,
        "y": 1660,
        "wires": [
            [
                "69a93d98.4e2ea4"
            ]
        ]
    },
    {
        "id": "69a93d98.4e2ea4",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CREG? \"\\r\"",
        "func": "var at_cmd = \"AT+CREG?\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1660,
        "wires": [
            [
                "d95f8bde.cb2d58"
            ]
        ]
    },
    {
        "id": "faf74d26.e34d5",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 160,
        "y": 1500,
        "wires": [
            [
                "1b23d111.e0ac8f"
            ]
        ]
    },
    {
        "id": "1b23d111.e0ac8f",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "AT+CREG? \"\\r\"",
        "func": "var at_cmd = \"AT+CREG?\";\nmsg.payload=at_cmd+\"\\r\";\nreturn msg;\n",
        "outputs": "1",
        "noerr": 0,
        "x": 1100,
        "y": 1500,
        "wires": [
            [
                "ba941dd1.dd4a3"
            ]
        ]
    },
    {
        "id": "ffe7aa3c.66a618",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "9",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "9",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1580,
        "wires": [
            []
        ]
    },
    {
        "id": "b8d4ceb8.68bac",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "5. Prüfen ob bei Mobilfunkprovider angemeldet",
        "info": "",
        "x": 250,
        "y": 1460,
        "wires": []
    },
    {
        "id": "868e3cd3.679b2",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": " Mobilfunkprovider angemeldet",
        "links": [
            "7b4cd02.4c4de3"
        ],
        "x": 735,
        "y": 1660,
        "wires": [
            [
                "316636.26b4d9ca"
            ]
        ]
    },
    {
        "id": "1414f54c.8ea6eb",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "nicht angemeldet",
        "links": [
            "cd93d7c1.69ff58"
        ],
        "x": 675,
        "y": 1660,
        "wires": []
    },
    {
        "id": "2cd4a37d.6f72ac",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "OK",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "OK",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 1540,
        "wires": [
            [
                "883b7762.6e3ef8",
                "58168097.24291",
                "eacfb5b.791db48"
            ]
        ]
    },
    {
        "id": "883b7762.6e3ef8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "DEBUG",
        "property": "DEBUG",
        "propertyType": "env",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 920,
        "y": 1540,
        "wires": [
            [
                "a243e16f.9615b"
            ]
        ]
    },
    {
        "id": "aa7d241d.7ac778",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"yellow\",shape:\"ring\",text:\"⚪️⚪️⚪️⚪️⚪️️⚫️⚫️⚫️ \" + msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 710,
        "y": 1620,
        "wires": [
            [
                "1b542991.083246"
            ]
        ]
    },
    {
        "id": "a871dc85.ace06",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "angemeldet",
        "func": "var signal = msg.payload.split(\",\");\nsignal = parseFloat(signal[1]);\n\nif (signal === 0) {\n    msg.payload = \"nicht registriert\";\n    return [ msg, null, null, null, null, null ];\n} else if (signal === 1) {\n    msg.payload = \"registriert (zu Hause)\";\n    return [ null, msg, null, null, null, null ];\n} else if (signal === 2) {\n    msg.payload = \"nicht registriert (Suche)\";\n    return [ null, null, msg, null, null, null ];\n} else if (signal === 3) {\n    msg.payload = \"Registrierung verweigert\";\n    return [ null, null, null, msg, null, null ];\n} else if (signal === 4) {\n    msg.payload = \"Unbekannt\";\n    return [ null, null, null, null, msg, null ];\n} else if (signal === 5) {\n    msg.payload = \"registriert (Roaming)\";\n    return [ null, null, null, null, null, msg ];\n}",
        "outputs": 6,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 490,
        "y": 1560,
        "wires": [
            [
                "44232e5c.57d96"
            ],
            [
                "2cd4a37d.6f72ac",
                "aa7d241d.7ac778"
            ],
            [
                "c19f3852.cfc968",
                "aa7d241d.7ac778"
            ],
            [
                "1414f54c.8ea6eb",
                "44232e5c.57d96"
            ],
            [
                "44232e5c.57d96"
            ],
            [
                "2cd4a37d.6f72ac",
                "aa7d241d.7ac778"
            ]
        ],
        "inputLabels": [
            "CREG input"
        ],
        "outputLabels": [
            "nicht registriert",
            "registriert (zu Hause)",
            "nicht registriert (Suche)",
            "Registrierung verweigert",
            "Unbekannt",
            "registriert (Roaming)"
        ],
        "icon": "font-awesome/fa-rss"
    },
    {
        "id": "c19f3852.cfc968",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 740,
        "y": 1500,
        "wires": [
            [
                "1b23d111.e0ac8f"
            ]
        ]
    },
    {
        "id": "44232e5c.57d96",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"red\",shape:\"dot\",text:msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 710,
        "y": 1580,
        "wires": [
            [
                "a1a08d4.994407"
            ]
        ]
    },
    {
        "id": "35b05178.4eb51e",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "property": "MODUL_RESET",
        "propertyType": "flow",
        "rules": [
            {
                "t": "false"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 280,
        "y": 1580,
        "wires": [
            [
                "a871dc85.ace06"
            ],
            [
                "2698c7b3.cd2e78"
            ]
        ]
    },
    {
        "id": "2698c7b3.cd2e78",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "links": [
            "9fc2b488.c93f58"
        ],
        "x": 395,
        "y": 1600,
        "wires": []
    },
    {
        "id": "58168097.24291",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "1",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1410,
        "y": 1540,
        "wires": [
            []
        ]
    },
    {
        "id": "8c99cb52.b9e638",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 35,
        "y": 1580,
        "wires": [
            [
                "b8e1f904.e6ec98"
            ]
        ]
    },
    {
        "id": "ba941dd1.dd4a3",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 1500,
        "wires": []
    },
    {
        "id": "d95f8bde.cb2d58",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1235,
        "y": 1660,
        "wires": []
    },
    {
        "id": "a1a08d4.994407",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 795,
        "y": 1580,
        "wires": []
    },
    {
        "id": "1b542991.083246",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 795,
        "y": 1620,
        "wires": []
    },
    {
        "id": "43f7a6c.6584258",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"grey\",shape:\"ring\",text:\"Reset Bitte warten...\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1010,
        "y": 4300,
        "wires": [
            [
                "86004cfc.fd58c"
            ]
        ]
    },
    {
        "id": "e6aae470.66bf98",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"grey\",shape:\"ring\",text:\"Reset ok\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1290,
        "y": 4300,
        "wires": [
            [
                "46b8e5ab.aa57cc"
            ]
        ]
    },
    {
        "id": "9fc2b488.c93f58",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "links": [
            "2698c7b3.cd2e78"
        ],
        "x": 1195,
        "y": 4300,
        "wires": [
            [
                "e6aae470.66bf98",
                "ed81f49e.51d8f8"
            ]
        ]
    },
    {
        "id": "ed81f49e.51d8f8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "MODUL_RESET",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1360,
        "y": 4260,
        "wires": [
            []
        ]
    },
    {
        "id": "15c068cf.f06317",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "MODUL_RESET",
                "pt": "flow",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1080,
        "y": 4260,
        "wires": [
            []
        ]
    },
    {
        "id": "86004cfc.fd58c",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1135,
        "y": 4300,
        "wires": []
    },
    {
        "id": "46b8e5ab.aa57cc",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 1415,
        "y": 4300,
        "wires": []
    },
    {
        "id": "f6f56c8e.a36b7",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 1830,
        "y": 320,
        "wires": [
            [
                "b242dc2e.78bf1"
            ]
        ]
    },
    {
        "id": "19116b12.fcf025",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "links": [
            "ba148604.351808",
            "a606f561.3ef308",
            "892aa046.ff347",
            "9a4bce11.64946"
        ],
        "x": 235,
        "y": 1920,
        "wires": [
            [
                "8a03fda8.774de"
            ]
        ]
    },
    {
        "id": "8a03fda8.774de",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 410,
        "y": 1920,
        "wires": [
            [
                "e3d88ce1.b0cf5"
            ]
        ]
    },
    {
        "id": "e3d88ce1.b0cf5",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "1min Poll",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "minutes",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 700,
        "y": 1920,
        "wires": [
            [
                "772cf128.d25fc"
            ]
        ]
    },
    {
        "id": "73cd8834.b9cdc8",
        "type": "inject",
        "z": "c5823db2.4ff16",
        "name": "Start",
        "props": [
            {
                "p": "reset",
                "v": "true",
                "vt": "bool"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "1",
        "topic": "",
        "payloadType": "str",
        "x": 190,
        "y": 1880,
        "wires": [
            [
                "8a03fda8.774de"
            ]
        ]
    },
    {
        "id": "a77f61ab.59eb8",
        "type": "http in",
        "z": "c5823db2.4ff16",
        "name": "",
        "url": "/SIM800sendSMS",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 260,
        "y": 4900,
        "wires": [
            [
                "7653f533.4d42fc",
                "51e67650.340cc8"
            ]
        ]
    },
    {
        "id": "89429a79.c68628",
        "type": "http response",
        "z": "c5823db2.4ff16",
        "name": "",
        "x": 1190,
        "y": 4940,
        "wires": []
    },
    {
        "id": "aa5d5509.171668",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "!= leer",
        "property": "payload.number",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nempty"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 730,
        "y": 4860,
        "wires": [
            [
                "966ee45.998c718",
                "8f80657e.57b7d8"
            ],
            [
                "7f425abb.498a24"
            ]
        ]
    },
    {
        "id": "456f1ccd.9c1514",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "limit",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 1070,
        "y": 4940,
        "wires": [
            [
                "89429a79.c68628"
            ]
        ]
    },
    {
        "id": "7653f533.4d42fc",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "200ms",
        "pauseType": "delay",
        "timeout": "200",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 510,
        "y": 4940,
        "wires": [
            [
                "5475d8cf.3ddb88"
            ]
        ]
    },
    {
        "id": "5475d8cf.3ddb88",
        "type": "template",
        "z": "c5823db2.4ff16",
        "name": "page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n    <head>\n       <h1>SIM800 API</h1> \n    </head>\n    <body>\n        <h1>error unknown API request!</h1>\n    </body>\n</html>",
        "x": 730,
        "y": 4940,
        "wires": [
            [
                "456f1ccd.9c1514"
            ]
        ]
    },
    {
        "id": "7f425abb.498a24",
        "type": "template",
        "z": "c5823db2.4ff16",
        "name": "page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n    <head>\n        <h1>SIM800 Web API</h1>\n    </head>\n    <body>\n        <h1>error wrong Value!</h1>\n    </body>\n</html>",
        "x": 890,
        "y": 4880,
        "wires": [
            [
                "456f1ccd.9c1514"
            ]
        ]
    },
    {
        "id": "966ee45.998c718",
        "type": "template",
        "z": "c5823db2.4ff16",
        "name": "page",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<html>\n    <head>\n       <h1>SIM800 Web API</h1> \n    </head>\n    <body>\n        <h1>OK</h1>\n        <h1>Message send</h1>\n    </body>\n</html>",
        "x": 890,
        "y": 4840,
        "wires": [
            [
                "456f1ccd.9c1514"
            ]
        ]
    },
    {
        "id": "51e67650.340cc8",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "has key number",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "hask",
                "v": "number",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 540,
        "y": 4900,
        "wires": [
            [
                "aa5d5509.171668"
            ],
            [
                "5475d8cf.3ddb88"
            ]
        ]
    },
    {
        "id": "f9e5ad42.d04c8",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Web API Input",
        "info": "",
        "x": 110,
        "y": 4860,
        "wires": []
    },
    {
        "id": "892aa046.ff347",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "PAUSE",
        "links": [
            "78662d0a.85ab44",
            "19116b12.fcf025"
        ],
        "x": 375,
        "y": 3640,
        "wires": []
    },
    {
        "id": "10412741.96f149",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "START",
        "links": [
            "8f25dd59.2425b",
            "9a4bce11.64946"
        ],
        "x": 735,
        "y": 1880,
        "wires": [
            [
                "772cf128.d25fc"
            ]
        ]
    },
    {
        "id": "8f25dd59.2425b",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "START",
        "links": [
            "10412741.96f149"
        ],
        "x": 935,
        "y": 3480,
        "wires": []
    },
    {
        "id": "599cb33.14a434c",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "1s",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 550,
        "y": 3480,
        "wires": [
            [
                "eed689d8.5f7788"
            ]
        ]
    },
    {
        "id": "eed689d8.5f7788",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "Start Signalst.",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 3480,
        "wires": [
            [
                "8f25dd59.2425b"
            ]
        ]
    },
    {
        "id": "d3472d85.e4e6f",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "SERIAL IN",
        "links": [
            "2f45da81.fbc626"
        ],
        "x": 75,
        "y": 3860,
        "wires": [
            [
                "90e6fc1d.cbf73"
            ]
        ]
    },
    {
        "id": "90e6fc1d.cbf73",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "GSM_SEND",
        "property": "GSM_SEND",
        "propertyType": "flow",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 230,
        "y": 3860,
        "wires": [
            [
                "5feabc85.abf364"
            ]
        ]
    },
    {
        "id": "5feabc85.abf364",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "enthält > ",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": ">",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 1,
        "x": 420,
        "y": 3860,
        "wires": [
            [
                "6294707f.a6dd7",
                "e69458f3.2fce68"
            ]
        ]
    },
    {
        "id": "4a726012.51588",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "payload.message",
                "pt": "msg",
                "to": "MESSAGE_TEXT",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 490,
        "y": 3800,
        "wires": [
            []
        ]
    },
    {
        "id": "6294707f.a6dd7",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "MESSAGE_TEXT",
        "rules": [
            {
                "t": "move",
                "p": "MESSAGE_TEXT",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "ENTER",
                "pt": "msg",
                "to": "\\n",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 610,
        "y": 3860,
        "wires": [
            [
                "71360eb9.54bda",
                "f215c308.5ee17"
            ]
        ]
    },
    {
        "id": "e69458f3.2fce68",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "GSM_SEND",
                "pt": "flow",
                "to": "false",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 630,
        "y": 3900,
        "wires": [
            []
        ]
    },
    {
        "id": "71360eb9.54bda",
        "type": "change",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "decode",
        "rules": [
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "ß",
                "fromt": "str",
                "to": "\u001e",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "Ü",
                "fromt": "str",
                "to": "^",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "Ö",
                "fromt": "str",
                "to": "\\",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "Ä",
                "fromt": "str",
                "to": "[",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "ü",
                "fromt": "str",
                "to": "~",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "ö",
                "fromt": "str",
                "to": "|",
                "tot": "str"
            },
            {
                "t": "change",
                "p": "payload",
                "pt": "msg",
                "from": "ä",
                "fromt": "str",
                "to": "{",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 800,
        "y": 3820,
        "wires": [
            [
                "66d855e4.0c033c"
            ]
        ]
    },
    {
        "id": "66d855e4.0c033c",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Send Message",
        "func": "var sms_msg = msg.payload;\n\nmsg.payload = sms_msg + \"\\x1A\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 980,
        "y": 3820,
        "wires": [
            [
                "2c8ab32e.58cffc"
            ]
        ]
    },
    {
        "id": "2c8ab32e.58cffc",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "to SERIAL OUT",
        "links": [
            "a7b72d2b.ef6f"
        ],
        "x": 1155,
        "y": 3860,
        "wires": []
    },
    {
        "id": "772cf128.d25fc",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "LIMIT",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "3",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 930,
        "y": 1920,
        "wires": [
            [
                "595a477d.4b1148"
            ]
        ]
    },
    {
        "id": "fa61cec7.e3b29",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "",
        "pauseType": "delay",
        "timeout": "3",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 340,
        "y": 240,
        "wires": [
            [
                "96d07434.22ac98"
            ]
        ]
    },
    {
        "id": "86cbc714.c760b8",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "",
        "rules": [
            {
                "t": "move",
                "p": "port",
                "pt": "msg",
                "to": "PORT",
                "tot": "flow"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1210,
        "y": 4060,
        "wires": [
            []
        ]
    },
    {
        "id": "cd71b2fa.363f9",
        "type": "rbe",
        "z": "c5823db2.4ff16",
        "name": "",
        "func": "rbe",
        "gap": "",
        "start": "",
        "inout": "out",
        "property": "port",
        "x": 1010,
        "y": 4060,
        "wires": [
            [
                "86cbc714.c760b8",
                "f07f3c81.7a487"
            ]
        ]
    },
    {
        "id": "f07f3c81.7a487",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "d": true,
        "name": "port",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "port",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1170,
        "y": 4020,
        "wires": []
    },
    {
        "id": "35528d89.f445a2",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "CONF",
        "rules": [
            {
                "t": "set",
                "p": "SERIAL",
                "pt": "msg",
                "to": "SERIAL",
                "tot": "env"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 970,
        "y": 4440,
        "wires": [
            []
        ]
    },
    {
        "id": "e001b170.84f7f",
        "type": "switch",
        "z": "c5823db2.4ff16",
        "name": "SYSTEM",
        "property": "SYSTEM",
        "propertyType": "env",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 440,
        "y": 4700,
        "wires": [
            [
                "cc25047.2b8b7f8"
            ],
            [
                "eb3d6df9.bd432"
            ]
        ]
    },
    {
        "id": "eb3d6df9.bd432",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "msg.url = \"/SIM800\";",
        "func": "msg.url = \"SIM800\";\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 700,
        "y": 4700,
        "wires": [
            [
                "2aa8fb3.a165504"
            ]
        ]
    },
    {
        "id": "9a4bce11.64946",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "SIGNAL",
        "links": [
            "dafbb857.10c068",
            "19116b12.fcf025",
            "10412741.96f149"
        ],
        "x": 675,
        "y": 4380,
        "wires": []
    },
    {
        "id": "e2ab8c0d.a3166",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SIGNAL",
        "info": "",
        "x": 760,
        "y": 4380,
        "wires": []
    },
    {
        "id": "7a132310.043ebc",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"ring\",text:\"Signalstärke:\" + msg.payload};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 410,
        "y": 2080,
        "wires": [
            [
                "377f601b.b5fc",
                "cef72130.c7c29"
            ]
        ]
    },
    {
        "id": "377f601b.b5fc",
        "type": "link out",
        "z": "c5823db2.4ff16",
        "name": "STATUS",
        "links": [
            "4ac832ef.ec9c0c"
        ],
        "x": 675,
        "y": 2080,
        "wires": []
    },
    {
        "id": "2f6aa22c.4510de",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "Status",
        "func": "msg.payload = {fill:\"green\",shape:\"dot\",text:\"Verbunden\"};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 2120,
        "wires": [
            [
                "377f601b.b5fc"
            ]
        ]
    },
    {
        "id": "cef72130.c7c29",
        "type": "delay",
        "z": "c5823db2.4ff16",
        "name": "3sec",
        "pauseType": "delay",
        "timeout": "3",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 410,
        "y": 2120,
        "wires": [
            [
                "2f6aa22c.4510de"
            ]
        ]
    },
    {
        "id": "405848a2.aa8f28",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "Alt wird über die Rückgabe gesendet",
        "info": "",
        "x": 640,
        "y": 3760,
        "wires": []
    },
    {
        "id": "64377d49.4f3ef4",
        "type": "comment",
        "z": "c5823db2.4ff16",
        "name": "SEND SMS  AUSWERTUNG",
        "info": "",
        "x": 180,
        "y": 3240,
        "wires": []
    },
    {
        "id": "fa42b8cc.401b78",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "ENTER",
        "rules": [
            {
                "t": "move",
                "p": "payload.message",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "ENTER",
                "pt": "msg",
                "to": "\\n",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 260,
        "y": 3560,
        "wires": [
            [
                "f50154e7.035d58"
            ]
        ]
    },
    {
        "id": "f50154e7.035d58",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "\"\\n\" & Send Message",
        "func": "var meinArray = msg.payload.split(msg.ENTER);\nvar liste = \"\";\n\nfor (var i = 0; i < meinArray.length; i++) {\n        liste = liste + \"\\n\" + meinArray[i];\n}\n\nvar sms_msg = liste;\n\nmsg.payload = sms_msg + \"\\x1A\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 440,
        "y": 3560,
        "wires": [
            [
                "2b468ff.a1eba7"
            ]
        ]
    },
    {
        "id": "2b468ff.a1eba7",
        "type": "debug",
        "z": "c5823db2.4ff16",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 630,
        "y": 3560,
        "wires": []
    },
    {
        "id": "f215c308.5ee17",
        "type": "function",
        "z": "c5823db2.4ff16",
        "name": "\"\\n\" & Send Message",
        "func": "var meinArray = msg.payload.split(msg.ENTER);\nvar liste = \"\";\n\nfor (var i = 0; i < meinArray.length; i++) {\n        liste = liste + \"\\n\" + meinArray[i];\n}\n\nvar sms_msg = liste;\n\nmsg.payload = sms_msg + \"\\x1A\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 920,
        "y": 3860,
        "wires": [
            [
                "2c8ab32e.58cffc"
            ]
        ]
    },
    {
        "id": "790c98d8.ab9f68",
        "type": "link in",
        "z": "c5823db2.4ff16",
        "name": "RESET",
        "links": [
            "ba148604.351808",
            "a606f561.3ef308"
        ],
        "x": 615,
        "y": 1700,
        "wires": [
            [
                "1477dcf.1c66323"
            ]
        ]
    },
    {
        "id": "1477dcf.1c66323",
        "type": "change",
        "z": "c5823db2.4ff16",
        "name": "reset",
        "rules": [
            {
                "t": "set",
                "p": "reset",
                "pt": "msg",
                "to": "true",
                "tot": "bool"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 710,
        "y": 1700,
        "wires": [
            [
                "316636.26b4d9ca"
            ]
        ]
    },
    {
        "id": "92117134.d5efb",
        "type": "subflow:c5823db2.4ff16",
        "z": "3ccff976.212636",
        "name": "",
        "env": [
            {
                "name": "AUTOSTART",
                "type": "bool",
                "value": "true"
            },
            {
                "name": "SERIAL",
                "value": "/dev/USB0",
                "type": "str"
            }
        ],
        "x": 660,
        "y": 360,
        "wires": [
            [
                "8b22b3f6.ad9c"
            ],
            [
                "5af87e3c.08b4a"
            ],
            [
                "d9c20bd3.c4e728"
            ],
            [
                "d8ff3d30.176ea"
            ],
            [
                "56130da8.d20c04"
            ],
            [
                "15ff5276.2d336e"
            ],
            [
                "94421635.c88188"
            ]
        ]
    },
    {
        "id": "6560e1f7.f1382",
        "type": "change",
        "z": "3ccff976.212636",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "input",
                "pt": "msg",
                "to": "SERIAL_INPUT",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 140,
        "wires": [
            [
                "92117134.d5efb"
            ]
        ],
        "inputLabels": [
            "SERIAL IN"
        ],
        "outputLabels": [
            "to GSM TC35"
        ],
        "icon": "node-red/inject.svg"
    },
    {
        "id": "18323ee.e40dec1",
        "type": "inject",
        "z": "3ccff976.212636",
        "name": "START",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "START",
        "payloadType": "str",
        "x": 210,
        "y": 200,
        "wires": [
            [
                "6f6a254.14482dc"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "e1a0ad6.e5db65",
        "type": "inject",
        "z": "3ccff976.212636",
        "name": "Sende Test SMS",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"number\":\"0174123456789\",\"message\":\"Nodered\\nSMS Test Text\\nvom SIM800 Modul\"}",
        "payloadType": "json",
        "x": 240,
        "y": 280,
        "wires": [
            [
                "9130e56d.bdb868"
            ]
        ]
    },
    {
        "id": "2161205e.cebc3",
        "type": "inject",
        "z": "3ccff976.212636",
        "name": "STOP",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payloadType": "str",
        "x": 210,
        "y": 240,
        "wires": [
            [
                "7de805d4.de2a4c"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "6f6a254.14482dc",
        "type": "change",
        "z": "3ccff976.212636",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "START",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 200,
        "wires": [
            [
                "92117134.d5efb"
            ]
        ]
    },
    {
        "id": "9130e56d.bdb868",
        "type": "change",
        "z": "3ccff976.212636",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "SEND_SMS",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 280,
        "wires": [
            [
                "92117134.d5efb"
            ]
        ]
    },
    {
        "id": "7de805d4.de2a4c",
        "type": "change",
        "z": "3ccff976.212636",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "STOP",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 240,
        "wires": [
            [
                "92117134.d5efb"
            ]
        ]
    },
    {
        "id": "52b6d97d.89e888",
        "type": "debug",
        "z": "3ccff976.212636",
        "name": "Signalstaerke",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1120,
        "y": 240,
        "wires": []
    },
    {
        "id": "15ff5276.2d336e",
        "type": "debug",
        "z": "3ccff976.212636",
        "name": "SMS-Emfang Absender ID",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1040,
        "y": 360,
        "wires": []
    },
    {
        "id": "5af87e3c.08b4a",
        "type": "debug",
        "z": "3ccff976.212636",
        "name": "Letzter Pruef Status",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1020,
        "y": 200,
        "wires": []
    },
    {
        "id": "d8ff3d30.176ea",
        "type": "debug",
        "z": "3ccff976.212636",
        "name": "Modus",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 970,
        "y": 280,
        "wires": []
    },
    {
        "id": "56130da8.d20c04",
        "type": "debug",
        "z": "3ccff976.212636",
        "name": "Letzter Sende Status",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1020,
        "y": 320,
        "wires": []
    },
    {
        "id": "94421635.c88188",
        "type": "debug",
        "z": "3ccff976.212636",
        "name": "SMS-Emfang Text",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1010,
        "y": 400,
        "wires": []
    },
    {
        "id": "865e1474.718988",
        "type": "inject",
        "z": "3ccff976.212636",
        "name": "RESET",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 210,
        "y": 320,
        "wires": [
            [
                "4ed62353.a246dc"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "4ed62353.a246dc",
        "type": "change",
        "z": "3ccff976.212636",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "RESET",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 320,
        "wires": [
            [
                "92117134.d5efb"
            ]
        ]
    },
    {
        "id": "3ee8f7ed.826038",
        "type": "serial in",
        "z": "3ccff976.212636",
        "name": "Serial-In",
        "serial": "cda9305.76a21d",
        "x": 260,
        "y": 140,
        "wires": [
            [
                "6560e1f7.f1382",
                "d9bf5259.af6cb"
            ]
        ]
    },
    {
        "id": "8b22b3f6.ad9c",
        "type": "serial out",
        "z": "3ccff976.212636",
        "name": "Serail-Out",
        "serial": "cda9305.76a21d",
        "x": 980,
        "y": 140,
        "wires": []
    },
    {
        "id": "2c25175d.c86028",
        "type": "inject",
        "z": "3ccff976.212636",
        "name": "Signal Qu.",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "x": 220,
        "y": 360,
        "wires": [
            [
                "4611663e.a1e318"
            ]
        ],
        "icon": "node-red-dashboard/ui_switch.png"
    },
    {
        "id": "4611663e.a1e318",
        "type": "change",
        "z": "3ccff976.212636",
        "name": "msg.input",
        "rules": [
            {
                "t": "set",
                "p": "msg.input",
                "pt": "msg",
                "to": "SIGNAL",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 420,
        "y": 360,
        "wires": [
            [
                "92117134.d5efb"
            ]
        ]
    },
    {
        "id": "d9c20bd3.c4e728",
        "type": "rbe",
        "z": "3ccff976.212636",
        "name": "",
        "func": "rbe",
        "gap": "",
        "start": "",
        "inout": "out",
        "property": "payload",
        "x": 970,
        "y": 240,
        "wires": [
            [
                "52b6d97d.89e888"
            ]
        ]
    },
    {
        "id": "cda9305.76a21d",
        "type": "serial-port",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "115200",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "newline": "\\r",
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
    }
]
