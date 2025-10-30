import express from "express";

const app = express();

app.get("/user", (req, res) => {
  console.log(req.body);
  res.send("data Save Successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
