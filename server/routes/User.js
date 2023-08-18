const express = require("express")
const router = express.Router();

const{createUser,getUser}=require("../controllers/form");

router.post("/createuser",createUser);
router.get("/getuser",getUser);

module.exports = router;