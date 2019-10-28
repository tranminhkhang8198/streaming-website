define({ "api": [
  {
    "type": "get",
    "url": "/admin",
    "title": "",
    "description": "<p>Render admin page</p>",
    "version": "1.0.0",
    "name": "Admin_page",
    "group": "Main",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "filename": "src/api/routes/main.route.js",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/config",
    "title": "",
    "description": "<p>Send neccessary configuration to browser</p>",
    "version": "1.0.0",
    "name": "Configuration_data",
    "group": "Main",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "success": {
      "fields": {
        "Ok 200": [
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<ul> <li>IP address of live-streaming server</li> </ul>"
          },
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "port",
            "description": "<ul> <li>Port of live-streaming server</li> </ul>"
          }
        ]
      }
    },
    "filename": "src/api/routes/main.route.js",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/admin/create-streaming",
    "title": "",
    "description": "<p>Render create streaming page</p>",
    "version": "1.0.0",
    "name": "CreateStreaming_page",
    "group": "Main",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "filename": "src/api/routes/main.route.js",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/",
    "title": "",
    "description": "<p>Render index page</p>",
    "version": "1.0.0",
    "name": "Index_page",
    "group": "Main",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "filename": "src/api/routes/main.route.js",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/streaming",
    "title": "",
    "description": "<p>Render watch streaming page</p>",
    "version": "1.0.0",
    "name": "WatchStreaming_page",
    "group": "Main",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "filename": "src/api/routes/main.route.js",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/api/matches",
    "title": "",
    "description": "<p>Get all matches</p>",
    "version": "1.0.0",
    "name": "Get_matches",
    "group": "Match",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "success": {
      "fields": {
        "Ok 200": [
          {
            "group": "Ok 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<ul> <li>Successfully get matches</li> </ul>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Not Found 404": [
          {
            "group": "Not Found 404",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<ul> <li>No matches found</li> </ul>"
          }
        ]
      }
    },
    "filename": "src/api/routes/api/match.route.js",
    "groupTitle": "Match"
  }
] });
