var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.1923424073626414,
        "pitch": 0.046977677370922066,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -1.6266567471549784,
          "pitch": 0.7086089072316817,
          "rotation": 0,
          "target": "1-dinig-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dinig-hall",
      "name": "DINIG HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -0.7104672329011041,
        "pitch": 0.2151985337700264,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.8261533101745009,
          "pitch": 0.6699348453640166,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -1.022423598468471,
          "pitch": 0.6054534416844888,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.8575247180778138,
          "pitch": 0.5344486335337049,
          "rotation": 0,
          "target": "4-upstair-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5912757577973924,
          "pitch": 0.5536997960193641,
          "rotation": 0,
          "target": "1-dinig-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bed-room-1",
      "name": "BED ROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.565944278428322,
          "pitch": 0.5815956450569786,
          "rotation": 0,
          "target": "4-upstair-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-upstair-hall",
      "name": "UPSTAIR HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2860910111250448,
          "pitch": 0.8168930445082818,
          "rotation": 0,
          "target": "1-dinig-hall"
        },
        {
          "yaw": 0.009326143299846379,
          "pitch": 0.8277977597535706,
          "rotation": 0,
          "target": "3-bed-room-1"
        },
        {
          "yaw": -2.6797736474206477,
          "pitch": 0.9139084833788935,
          "rotation": 0,
          "target": "5-bed-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bed-room-2",
      "name": "BED ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9798401079031898,
          "pitch": 0.8314708706394498,
          "rotation": 0,
          "target": "4-upstair-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "RESIDENTIAL INTERIOR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
