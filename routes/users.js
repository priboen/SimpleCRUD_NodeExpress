import express, { Router } from "express";
const router = express.Router();

const users = [
  {
    first_name: "Relly",
    lastname: "Amanda",
    email: "relly@mail.com",
  },
  {
    first_name: "Vovy",
    lastname: "Amelia",
    email: "vovy@mail.com",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

export default router;
