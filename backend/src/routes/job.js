const express = require('express')
const router = express.Router()
const { ensureSession } = require('./middleware')

router.get('/', ensureSession , async (req, res) => {
  res.send(req.user.jobs)
})

router.get('/:jobId', ensureSession, async (req, res) => {
  const job = req.user.jobs.filter(job => job._id == req.params.jobId)[0]
  if(!job) res.status(404).send('Job not found')
  res.send(job)
})

router.post('/', ensureSession, async (req, res) => {
  req.user.jobs.push(req.body)
  try{
    await req.user.save()
  } catch (err) {
    const firstErrorMessage = err.errors[Object.keys(err.errors)[0]].message
    return res.status(400).send(firstErrorMessage)
  }
  res.send(req.body)
})

module.exports = router