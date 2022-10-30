import { Router } from "express";
import { Company } from "./entities/company";
import { Project } from "./entities/project";
interface user {
  name: string;
  age: number;
  title: string;
  image: string;
  discription: string;
  certifacateURL: string;
}
const router = Router();

router.post("/projects", (req, res) => {
  const projectItems = req.body as user;
  const project = new Project(projectItems);
  try {
    if (projectItems.title) {
      res.status(200).send(project);
    } else {
      res.status(404).send("não encontrado");
    }
  } catch (error) {
    res.send(error);
  }
});
router.get("/", (req, res) => {
  return res.status(200).send({ result: "Conseguiu guerreiro" });
});

router.get("/company", (req, res) => {
  const company = new Company("Neuralx", [
    {
      collaborator: "Allisson",
      job: "Cofundador",
      salary: "100000",
    },
    {
      collaborator: "João",
      job: "Gerente",
      salary: "15000",
    },
  ]);
  const owner = {
    ...company,
    newCompany: "Hixx",
  };

  res.status(200).send(owner);
  console.log(owner.name);
});

export { router };
