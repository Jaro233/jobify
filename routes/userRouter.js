import {Router} from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import {validateUpdateUserInput} from "../middleware/validationMiddleware.js";
import {
  authorizedPermissions,
  checkForTestUser,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.route("/current-user").get(getCurrentUser);
router
  .route("/admin/app-stats")
  .get([authorizedPermissions("admin")], getApplicationStats);
router
  .route("/update-user")
  .patch(
    checkForTestUser,
    upload.single("avatar"),
    validateUpdateUserInput,
    updateUser
  );

export default router;
