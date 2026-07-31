{
  "name": "telegram ai bot wokrflow",
  "nodes": [
    {
      "parameters": {
        "chatId": "={{ $json.message.chat.id }}",
        "text": "OUR PRICE IS $40 ",
        "additionalFields": {}
      },
      "id": "4afa8b9f-d6ca-4706-be3a-345949ca29eb",
      "name": "Send a text message1",
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        -2176,
        -1120
      ],
      "webhookId": "80d08f51-5564-4932-ad64-143c6b1ea0a7",
      "credentials": {
        "telegramApi": {
          "id": "eGVV9bdLCxd9mqc9",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "1vBD5dV3WiiNcqCJWTRkU5XSv_V8dsoudF5hZLUGZOSo",
          "mode": "list",
          "cachedResultName": "previous conversation",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1vBD5dV3WiiNcqCJWTRkU5XSv_V8dsoudF5hZLUGZOSo/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Sheet1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1vBD5dV3WiiNcqCJWTRkU5XSv_V8dsoudF5hZLUGZOSo/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "conversation": "={{ $json.message.text }}",
            "chat id": "={{ $json.message.chat.id }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "chat id",
              "displayName": "chat id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "conversation",
              "displayName": "conversation",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "id": "52a5e80e-7d64-470b-9ba9-c35eb854fe37",
      "name": "Append row in sheet",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        -2400,
        -928
      ],
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "00guqY6vmkaAhGTk",
          "name": "Google Sheets account"
        }
      }
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "triggerAtHour": 9
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.3,
      "position": [
        -2624,
        -1536
      ],
      "id": "739fb9e6-d59c-464e-a4ee-29f3238dd68c",
      "name": "Schedule Trigger"
    },
    {
      "parameters": {
        "chatId": "8099976790",
        "text": "Good Morning! Remember today's tasks.",
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        -2176,
        -1536
      ],
      "id": "6b46f89a-6630-4843-ada3-6c484b2c4da2",
      "name": "Send a text message4",
      "webhookId": "7ad8b1f0-02e9-4274-b24c-5f976dcfedb4",
      "credentials": {
        "telegramApi": {
          "id": "eGVV9bdLCxd9mqc9",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "1cSKRDGiWVAX3_MlpM2CBa_qo6x1i3cMVRUSnHnMpZhA",
          "mode": "list",
          "cachedResultName": "schedule ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1cSKRDGiWVAX3_MlpM2CBa_qo6x1i3cMVRUSnHnMpZhA/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Sheet1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1cSKRDGiWVAX3_MlpM2CBa_qo6x1i3cMVRUSnHnMpZhA/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "date": "={{ $('Schedule Trigger').item.json['Readable date'] }}",
            "time": "={{ $('Schedule Trigger').item.json['Readable time'] }}",
            "event": "={{ $('Schedule Trigger').item.json['event'] }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "event",
              "displayName": "event",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "date",
              "displayName": "date",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "time",
              "displayName": "time",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "location",
              "displayName": "location",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "notes(if any)",
              "displayName": "notes(if any)",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        -2400,
        -1536
      ],
      "id": "52fa5442-78f5-4ffd-b115-1c9300312245",
      "name": "Append row in sheet1",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "00guqY6vmkaAhGTk",
          "name": "Google Sheets account"
        }
      },
      "disabled": true
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 3
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.message.text.toLowerCase() }}",
                    "rightValue": "price",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    },
                    "id": "77400a81-7917-41b0-820d-7483aa6a6f36"
                  }
                ],
                "combinator": "and"
              }
            }
          ]
        },
        "options": {
          "fallbackOutput": "none"
        }
      },
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3.4,
      "position": [
        -2400,
        -1120
      ],
      "id": "531f2d33-2991-4416-801f-bbdb7f53d918",
      "name": "Switch"
    },
    {
      "parameters": {
        "chatId": "={{ $json.message.from.id }}",
        "text": "Hello! Welcome to my automation bot.",
        "additionalFields": {
          "reply_to_message_id": 8099976790
        }
      },
      "id": "4de34b1c-1217-4e4b-9b51-bdaba178e645",
      "name": "Send a text message6",
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        -2400,
        -1312
      ],
      "webhookId": "9c024178-d2ce-4b64-b309-c41cf387ba43",
      "credentials": {
        "telegramApi": {
          "id": "eGVV9bdLCxd9mqc9",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "value": "gpt-4o-mini",
          "mode": "list",
          "cachedResultName": "gpt-4o-mini"
        },
        "builtInTools": {},
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1.3,
      "position": [
        -1656,
        -408
      ],
      "id": "29a95b93-2e3a-4096-99ec-3d4dd606e44f",
      "name": "OpenAI Chat Model2",
      "credentials": {
        "openAiApi": {
          "id": null,
          "name": "",
          "__aiGatewayManaged": true
        }
      }
    },
    {
      "parameters": {
        "chatId": "={{ $('Telegram Trigger1').item.json.message.chat.id }}",
        "text": "={{ $('memory').item.json.text }}",
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        -1152,
        -640
      ],
      "id": "15500f81-3341-4f5d-81b6-1a6342caa711",
      "name": "Send a text message",
      "webhookId": "d68bcf83-0c8c-4fd0-981b-a7fa4b785a0f",
      "credentials": {
        "telegramApi": {
          "id": "eGVV9bdLCxd9mqc9",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "=You are a helpful AI assistant.\n\nUse the previous conversation to understand the context and answer naturally.\n\nCourse/FAQ Knowledge Base:\n{{ $json.faqInfo || \"No FAQ information provided.\" }}\n\nPrevious Conversation:\n{{ $json.previousConversation || \"No previous conversation history.\" }}\n\nCurrent User Message:\n{{ $('Telegram Trigger1').item.json.message?.text || $('Telegram Trigger1').item.json.text || \"Hello\" }}\n\nInstructions:\n- Use the previous conversation only as context.\n- Answer the current user message clearly and accurately.\n- If there is no previous conversation, answer normally.\n- If the answer isn't in the FAQ Knowledge Base or previous conversation, state that you don't have that information rather than guessing.",
        "batching": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chainLlm",
      "typeVersion": 1.9,
      "position": [
        -1728,
        -640
      ],
      "id": "bd07128d-c547-4820-bc48-e5042de5620f",
      "name": "memory"
    },
    {
      "parameters": {
        "updates": [
          "message"
        ],
        "additionalFields": {}
      },
      "id": "9d3c5acb-cc7f-4fc4-a705-2d611dfe8ac5",
      "name": "Telegram Trigger1",
      "type": "n8n-nodes-base.telegramTrigger",
      "typeVersion": 1.4,
      "position": [
        -2624,
        -1024
      ],
      "webhookId": "11245a81-c227-4798-813d-21be24dce01d",
      "credentials": {
        "telegramApi": {
          "id": "eGVV9bdLCxd9mqc9",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "return [\n  {\n    json: {\n      text: $input.first().json.Answer\n    }\n  }\n];"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        -1952,
        -640
      ],
      "id": "fccd753c-fc8f-43e6-b172-afa973591b44",
      "name": "Code in JavaScript"
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 3
          },
          "conditions": [
            {
              "id": "ca1f3107-6381-4a4c-9d3e-ae2dc409454e",
              "leftValue": "={{ $('Telegram Trigger1').item.json.message.text }}",
              "rightValue": "=",
              "operator": {
                "type": "string",
                "operation": "equals"
              }
            }
          ],
          "combinator": "and"
        },
        "options": {
          "ignoreCase": false
        }
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.3,
      "position": [
        -2176,
        -736
      ],
      "id": "4a622fdd-235a-4c9f-913e-5403b8b1f21c",
      "name": "If",
      "alwaysOutputData": true
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "12RaUqL8icHjPVUv8hIVcCE50M2rCcHqqVr9aYvKS7LI",
          "mode": "list",
          "cachedResultName": "new conversation + ai reply",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/12RaUqL8icHjPVUv8hIVcCE50M2rCcHqqVr9aYvKS7LI/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Sheet1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/12RaUqL8icHjPVUv8hIVcCE50M2rCcHqqVr9aYvKS7LI/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "chat id": "={{ $('Telegram Trigger1').item.json.message.chat.id }}",
            "user message": "={{ $('Telegram Trigger1').item.json.message.text }}",
            "ai reply": "={{ $json.text }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "chat id",
              "displayName": "chat id",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "user message",
              "displayName": "user message",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "ai reply",
              "displayName": "ai reply",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        -1376,
        -640
      ],
      "id": "160d8e5f-fa1e-4258-81d0-cfefe3301061",
      "name": "Append row in sheet2",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "00guqY6vmkaAhGTk",
          "name": "Google Sheets account"
        }
      }
    },
    {
      "parameters": {
        "chatId": "={{ $('Telegram Trigger1').item.json.message.chat.id }}",
        "text": "=",
        "additionalFields": {}
      },
      "type": "n8n-nodes-base.telegram",
      "typeVersion": 1.2,
      "position": [
        -1952,
        -832
      ],
      "id": "b9fd8765-5d6c-4534-ace4-95d683737071",
      "name": "Send a text message2",
      "webhookId": "e9ee64cd-304b-429d-9226-e5960c1ba813",
      "credentials": {
        "telegramApi": {
          "id": "eGVV9bdLCxd9mqc9",
          "name": "Telegram account"
        }
      }
    },
    {
      "parameters": {
        "documentId": {
          "__rl": true,
          "value": "1YhRomM4-KMszclGgrNETIlFLXQJT6HfXEihwJE8JK9s",
          "mode": "list",
          "cachedResultName": "FAQ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1YhRomM4-KMszclGgrNETIlFLXQJT6HfXEihwJE8JK9s/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Sheet1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1YhRomM4-KMszclGgrNETIlFLXQJT6HfXEihwJE8JK9s/edit#gid=0"
        },
        "filtersUI": {
          "values": [
            {
              "lookupColumn": "Question",
              "lookupValue": "={{ $json.message.text }}"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        -2400,
        -736
      ],
      "id": "dff6d73e-7a71-4795-9fed-aa8a5cab49f9",
      "name": "FAQ",
      "alwaysOutputData": true,
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "00guqY6vmkaAhGTk",
          "name": "Google Sheets account"
        }
      }
    }
  ],
  "pinData": {},
  "connections": {
    "Append row in sheet": {
      "main": [
        []
      ]
    },
    "Schedule Trigger": {
      "main": [
        [
          {
            "node": "Append row in sheet1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Append row in sheet1": {
      "main": [
        [
          {
            "node": "Send a text message4",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Switch": {
      "main": [
        [
          {
            "node": "Send a text message1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model2": {
      "ai_languageModel": [
        [
          {
            "node": "memory",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "memory": {
      "main": [
        [
          {
            "node": "Append row in sheet2",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Telegram Trigger1": {
      "main": [
        [
          {
            "node": "Switch",
            "type": "main",
            "index": 0
          },
          {
            "node": "Send a text message6",
            "type": "main",
            "index": 0
          },
          {
            "node": "Append row in sheet",
            "type": "main",
            "index": 0
          },
          {
            "node": "FAQ",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Code in JavaScript": {
      "main": [
        [
          {
            "node": "memory",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If": {
      "main": [
        [
          {
            "node": "Send a text message2",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Code in JavaScript",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Append row in sheet2": {
      "main": [
        [
          {
            "node": "Send a text message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "FAQ": {
      "main": [
        [
          {
            "node": "If",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "versionId": "b890123b-1c06-4498-9796-ac48ee2f323b",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "1268203d9db7a4b07517b3e7e8347682704f53fffdc55dcef6ef45b48bf90ca7"
  },
  "nodeGroups": [],
  "id": "T4YgxZgJVu32AZrf",
  "tags": []
}
