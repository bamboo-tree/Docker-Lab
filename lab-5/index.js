const fs = require("fs");
const os = require("os");
const { networkInterfaces } = require("os");

// Pobranie adresu IP serwera
function getServerIP() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "Nieznany";
}

// Pobranie wersji aplikacji z zmiennej środowiskowej
const VERSION = process.env.VERSION || "1.0.0";

// Tworzenie statycznej strony HTML
const htmlContent = `
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informacje o serwerze</title>
</head>
<body>
    <h1>Informacje o serwerze</h1>
    <p><strong>IP:</strong> ${getServerIP()}</p>
    <p><strong>Hostname:</strong> ${os.hostname()}</p>
    <p><strong>Wersja aplikacji:</strong> ${VERSION}</p>
</body>
</html>
`;

// Zapisanie pliku HTML
fs.writeFileSync("/app/index.html", htmlContent);
console.log("Plik index.html wygenerowany!");
