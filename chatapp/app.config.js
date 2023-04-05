import 'dotenv/config';

export default {
  "expo" :{
    "name": "chatapp",
    "slug": "chatapp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: "AIzaSyBfnQrEbYCeSzqlGepnGZiTfNZIrb9fl4s",
      authDomain: process.env.authDomain,
      projectid: process.env.projectId,
      storageBucket: process.env.storageBucket,
      MessagingsenderId: process.env.MessagingsenderId,
      appId: process.env.appId
    }
  }
}
