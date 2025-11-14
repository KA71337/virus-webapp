window.Telegram = {
  WebApp: {
    initData: "query_id=AAAAA&user=%7B%22id%22%3A12345%2C%22first_name%22%3A%22Test%22%7D",
    initDataUnsafe: {
      query_id: "AAAAA",
      user: {
        id: 12345,
        first_name: "LocalUser",
        username: "local_tester"
      }
    },
    colorScheme: "light",
    themeParams: {
      bg_color: "#ffffff",
      button_color: "#2481cc",
      button_text_color: "#ffffff"
    },
    isExpanded: true,
    viewportHeight: 800,
    viewportStableHeight: 800,
    version: "7.0",
    platform: "web",
    isTelegramWebView: true,

    sendData: function (data) {
      console.log("Mock sendData:", data);
    },

    expand() { console.log("Mock expand") },
    close() { console.log("Mock close") },

    onEvent(event, callback) {
      console.log("Mock event subscribed:", event);
    },

    offEvent(event, callback) {
      console.log("Mock event unsubscribed:", event);
    }
  }
};
