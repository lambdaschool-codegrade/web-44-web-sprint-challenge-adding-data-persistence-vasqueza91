// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('../project/model')

router.get('/', (req,res,next) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(trueOrFalse(projects));
        })
        .catch(err => {
            next(err)
        })
})

router.post('/', (req, res,next) => {
    Projects.addProject(req.body)
    .then((project) => {
        res.status(201).json(trueOrFalse(project)[0])
    })
    .catch(next)
})




router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router',
        message: err.message,
        stack: err.stack
    })
})

const trueOrFalse = (projects) => {
	return projects.map((proj) => ({
		...proj,
		project_completed: proj.project_completed ? true : false,
	}));
};

module.exports = router