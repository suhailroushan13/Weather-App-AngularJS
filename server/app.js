import express from "express";
const PORT = 4200;
import path from "path";
import { fileURLToPath } from "url"
const app = express();
const port = 4200
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("weather"));


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "weather"));
});

app.use((req, res) => {
  res.redirect("https://weather.csprojects.live")
})
app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});