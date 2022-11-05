import { Router } from 'express';
import { prisma } from './database/prismaClient';
import { Company } from './entities/company';
import { Project } from './entities/project';
interface user {
    name: string;
    age: number;
    title: string;
    image: string;
    discription: string;
    certifacateURL: string;
}
const router = Router();

router.post('/projects', (req, res) => {
    const projectItems = req.body as user;
    const project = new Project(projectItems);
    try {
        if (projectItems.title) {
            res.status(200).send(project);
        } else {
            res.status(404).send('não encontrado');
        }
    } catch (error) {
        res.send(error);
    }
});
router.get('/', (req, res) => {
    return res.status(200).send({ version: '0.0.1', author: 'Allisson Lima' });
});
router.get('/api', async (req, res) => {
    const allCollaborators = await prisma.company.findMany();

    return res.status(200).send(allCollaborators);
});

router.get('/company', async (req, res) => {
    const company = new Company('Neuralx');

    const allCollaborators = await prisma.company.findMany();

    res.status(200).send(allCollaborators);
});

router.post('/company', async (req, res) => {
    const company = new Company('Hixx');
    const { collaborator, job, salary } = req.body;

    if (collaborator && job && salary) {
        const result = await prisma.company.create({
            data: {
                collaborator,
                job,
                salary
            }
        });
        company.addCollaborator({
            collaborator,
            job,
            salary,
            date: new Date()
        });
        return res.status(200).send({ result });
    } else if (!collaborator && !job && !salary) {
        return res.status(400).send({
            required: 'collaborator, job, salary'
        });
    } else if (!salary) {
        return res.status(400).send({
            error: 'Salary required'
        });
    } else if (!job) {
        res.status(400).send({
            error: 'Job required'
        });
    } else {
        res.status(400).send({
            error: 'Collaborator required'
        });
    }
});

router.put('/company/:id', async (req, res) => {
    const { collaborator, job, salary } = req.body;
    const id = Number(req.params.id);

    const checkId = await prisma.company.findUnique({
        where: {
            id
        }
    });

    console.log({ id });

    if (!id) {
        return res.status(404).send({
            error: 'id required'
        });
    }

    if (!checkId) {
        return res.status(404).send({
            error: 'company not found'
        });
    }

    const company = await prisma.company.update({
        where: {
            id
        },
        data: {
            collaborator,
            job,
            salary
        }
    });

    return res.status(200).send(company);
});

router.delete('/company/:id', async (req, res) => {
    const id = req.params.id

    const checkId = await prisma.company.findUnique({
        where: {
            id
        }
    });
    if (!id) {
        return res.status(404).send({
            error: 'id required'
        });
    }

    if (!checkId) {
        return res.status(404).send({
            error: 'company not found'
        });
    }

    const result = await prisma.company.delete({
        where: {
            id
        }
    });

    if (result) {
        return res.status(200).send({ result: 'success' });
    }
});

export { router };
