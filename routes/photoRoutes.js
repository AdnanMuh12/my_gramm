const router = require("express").Router()

const PhotoController = require("../controller/photoController")
const { authenticateToken } = require("../middleware/auth")

router.post("/photos", authenticateToken, PhotoController.createPhoto)