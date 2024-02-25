// contentScript.js
navigator.clipboard
  .writeText(window.location.href)
  .then(() => {
    console.log("URL copied to clipboard:", window.location.href);
  })
  .catch((err) => {
    console.error("Failed to copy URL:", err);
  });
