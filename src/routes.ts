import { Router } from "express";
interface user {
  name: string;
  age: number;
}
const router = Router();

router.post("/projects", (req, res) => {
  try {
    const { name, age } = req.body as user;

    if (name === "Allisson") {
      res.status(200).send("Seja bem vindo meu Guerreiro");
    } else {
      res.status(404).send("não encontradp");
    }
  } catch (error) {
    res.send(error);
  }
});
router.get("/", (req, res) => {
  return res.status(200).send("Conseguiu guerreiro");
});

export { router };
