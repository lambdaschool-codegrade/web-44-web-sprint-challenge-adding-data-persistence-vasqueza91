// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resources = require('../resource/model')

router.get('/', (req, res, next) => {
    Resources.find()
        .then((resources) => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.addResource(req.body)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})






module.exports = router