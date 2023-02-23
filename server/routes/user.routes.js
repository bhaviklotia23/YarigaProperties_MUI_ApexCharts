import express from "express";
import {
  CreateUser,
  getAllUsers,
  getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(CreateUser);
router.route("/:id").get(getUserInfoByID);

export default router;
