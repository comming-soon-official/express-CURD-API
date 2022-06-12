import express from "express";
import {createUser,getUser,deleteUser,updateUser,idUser} from "../controllers/users.js"
const router = express.Router();


router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", idUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
