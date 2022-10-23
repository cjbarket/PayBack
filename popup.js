// Update the relevant fields with the new data.
const setDOMInfo = (
  info = {
    name: "",
    delivery: "",
    weight: "",
    groups: "",
    latitude: "",
    longitude: "",
  }
) => {
  document.getElementById("item_name").innerHTML = info.name;
  document.getElementById("delivery").innerHTML = info.delivery;
  document.getElementById("item_weight").innerHTML = info.weight;
  document.getElementById("item_groups").innerHTML = info.groups;
  document.getElementById("latitude").innerHTML = info.latitude;
  document.getElementById("longitude").innerHTML = info.longitude;
};

// Once the DOM is ready...
window.addEventListener("DOMContentLoaded", () => {
  // ...query for the active tab...
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      // ...and send a request for the DOM info...
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: "popup", subject: "DOMInfo" },
        // ...also specifying a callback to be called
        //    from the receiving end (content script).
        setDOMInfo
      );
    }
  );
});

async function checkbookPay() {
  let moneyDue = document.getElementById("fname").value;
  // window.alert(moneyDue);

  let recipient = document.getElementById("cars").value;
  // window.alert(recipient);

  let charities = {
    volvo: "wmz3@duke.edu",
    saab: "willzzzak@gmail.com",
    fiat: "example@gmail.com",
    audi: "example@gmail.com",
  };

  window.alert(charities[recipient]);

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "d6aa2703655f4ba2af2a56202961ca86:dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8",
    },
    body: JSON.stringify({
      recipient: charities[recipient],
      name: "PayBack User",
      amount: parseFloat(moneyDue),
      description: "Save the planet!",
    }),
  };

  fetch("https://demo.checkbook.io/v3/check/digital", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  document.getElementById("donate-button").remove();
}

document.getElementById("donate-button").addEventListener("click", () => {
  checkbookPay();
});
