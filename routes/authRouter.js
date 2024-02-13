import {Router} from "express";
import {login, logout, register} from "../controllers/authController.js";
import rateLimiter from "express-rate-limit";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
const router = Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {msg: "IP rate limit exceeded, retry in 15 minutes"},
});

router.route("/register").post(apiLimiter, validateRegisterInput, register);
router.route("/login").post(apiLimiter, validateLoginInput, login);
router.route("/logout").get(logout);

export default router;
