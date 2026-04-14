const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Pig Beach Reservation App fonctionne !");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
