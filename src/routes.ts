import { Router } from "express";

const router = Router();

router.post("/projects", (req, res) => {
  return res.status(201).send();
});

export { router };
