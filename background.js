chrome.alarms.create("sessionTimeout", { delayInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "sessionTimeout") {
    chrome.browserAction.setBadgeText({ text: "END" });
    console.log("Session ended after 1 minute");
  }
});