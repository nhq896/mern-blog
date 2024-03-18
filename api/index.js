import exress from "express";

const app = exress();

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
