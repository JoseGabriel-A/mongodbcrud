import { Router } from "express";
import {
  renderElements,
  renderModify,
  addFruit,
  renderEdit,
  updateFruits,
  deleteFruit,
} from "../controllers/tasks_controllers";
const router = Router();

router.get("/", renderElements);

router.get("/modify", renderModify);

router.post("/fruits/add", addFruit);

router.get("/edit/:id", renderEdit);

router.post("/edit/:id", updateFruits);

router.get("/delete/:id", deleteFruit);

export default router;
