import * as express from "express";
import * as process from "process";
const app = express();
const port = process.env.PORT || 3000;
const ROOT_PATH = __dirname.replace("src/", "");

app.use(express.json());
app.get("/env", (req, res) => {
   res.json({
      environment: process.env.ENV,
      back: process.env.BACKEND_URL,
   });
});

app.use(express.static("dist"));
app.get("*", (req, res) => {
   res.sendFile(ROOT_PATH + "dist/index.html");
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
