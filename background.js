chrome.alarms.create("sessionTimeout", { delayInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "sessionTimeout") {
    console.log("Session timeout triggered after 1 minute");
    chrome.runtime.restart();
  }
});
