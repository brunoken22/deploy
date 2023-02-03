import * as express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.get("/hola", (req, res) => {
   res.json({
      message: "Hola Mundo desde el servidor",
   });
});
app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
