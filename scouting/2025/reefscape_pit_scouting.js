var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "sco",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Height",
      "code": "hei",
      "type": "number",
      "defaultValue": ""
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": ""
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": ""
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "Neo": "Neo<br>",
        "Falcon": "Falcon<br>",
        "Kraken": "Kraken<br>",
        "Other": "Other<br>"
      },
      "defaultValue":""
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Coral L1",
      "code": "crl1",
      "type": "bool"
    },
    { "name": "Coral L2",
      "code": "crl2",
      "type": "bool"
    },
    { "name": "Coral L3",
      "code": "crl3",
      "type": "bool"
    },
    { "name": "Coral L4",
      "code": "crl4",
      "type": "bool"
    },
    { "name": "Algae in Processor",
      "code": "aip",
      "type": "bool"
    },
    { "name": "Algae in Barge",
      "code": "aib",
      "type": "bool"
    },
    { "name": "Coral Pickup",
      "code": "crlp",
      "type": "radio",
      "choices": {
        "Player Station": "Player Station<br>",
        "Floor": "Floor<br>",
        "Both": "Both<br>",
        "None": "None<br>"
      },
      "defaultValue":""
    },
    { "name": "Algae Pickup",
      "code": "algaep",
      "type": "radio",
      "choices": {
        "Reef": "Reef<br>",
        "Floor": "Floor<br>",
        "Both": "Both<br>",
        "None": "None<br>"
      },
      "defaultValue":"K"
    },
    { "name": "Algae and Coral Simultaneously?",
      "code": "aac",
      "type": "bool"
    },
    { "name": "Hanging",
      "code": "han",
      "type": "radio",
      "choices": {
        "Deep Cage": "Deep Cage<br>",
        "Shallow Cage": "Shallow Cage<br>",
        "Can't Hang": "Can't Hang<br>"
      },
      "defaultValue":""
    },
    { "name": "Willing to Defend?",
      "code": "def",
      "type": "bool"
    },
    { "name": "Human Player Preference",
      "code": "hpp",
      "type": "radio",
      "choices": {
        "Barge": "Barge<br>",
        "Coral Station": "Coral Statation<br>",
        "Neither": "No Preference<br>"
      },
      "defaultValue":""
    },
    { "name": "Describe Autonomous",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Known Robot Problems",
      "code": "Pro",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;