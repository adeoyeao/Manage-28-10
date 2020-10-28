const emailModel = require("../model/emailModel")
const express = require("express")
const bodyParser = require("body-parser")

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true}))

router.post("/subscriber", (req, res) => {
      const email = req.body.email
      const newSubscriber = new emailModel({
            email: email
      })

      newSubscriber.save()
      .then(() => console.log("Succesfully added"), res.redirect("/"))
      .catch(err => console.error(err), res.end())
})

module.exports = router