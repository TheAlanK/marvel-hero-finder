export const environment = {
  production: false,
  firebase : {
    apiKey: "<apiKey FIREBASE>",
    authDomain: "<authDomain FIREBASE>",
    databaseURL: "<databaseURL FIREBASE>",
    projectId: "<projectId FIREBASE>",
    storageBucket: "<storageBucket FIREBASE>",
    messagingSenderId: "<messagingSenderId FIREBASE>",
    appId: "<appId FIREBASE>",
    measurementId: "<measurementId FIREBASE>"
    },

    openAi : {
      apiKey: "<apiKey OPENAI>",
      openAiUri: "https://api.openai.com/v1/chat/completions"
    },

    marvel: {
      apiKey: "<apiKey MARVEL>",
      apiUrl: "https://gateway.marvel.com:443/v1/public/characters"
    }
};
