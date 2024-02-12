import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import {verifyJWT} from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const {token} = req.cookies;
  if (!token) throw new UnauthenticatedError("authentication invalid");
  try {
    const {userId, role} = verifyJWT(token);
    const testUser = userId === "65c7a6f373e74a4a5aa095bb";
    req.user = {userId, role, testUser};
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const authorizedPermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    console.log(roles);

    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Demo User, Read Only!");
  next();
};
