import express from "express";
import { authAdminMiddleware } from "./middleware/auth.js";
const app = express();

app.get("/admin/getAllData", authAdminMiddleware, (req, res, next) => {
  console.log("handling the route admin");
  throw new Error("connection faild to database");
  res.send("get all Data");
});
// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Something went wront contact support team");
//   }
// });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
