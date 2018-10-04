export const decryptKey = encrypted => {
  var req = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encrypted: encrypted
    })
  };
  var url = "https://qr-shahama-server.herokuapp.com/decrypt";

  fetch(url, req)
    .then(response => {
      // In this case, we check the content-type of the response
      if (response.headers.get("content-type").match(/application\/json/)) {
        return response.json();
      }
      return response;
      // You can also try "return response.text();"
    })
    .then(responseJson => {
      console.log("responseJson", responseJson);
      return responseJson;
    })
    .catch(err => {
      console.log("Error", err);
      return "Error";
    });
};
