import { asyncHandlerPromises } from "../utiles/async_handler.js";
import jwt from "jsonwebtoken";
import { getUser } from "../controllers/user_controller.js";
import { apiError } from "../utiles/api_errors.js";

export const isUserAuthorized = asyncHandlerPromises(async (req, _, next) => {
  try {
    // Token extract karna
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "") ||
      req.body?.accessToken;

    if (!token) throw new apiError(401, "Access Token Missing");

    // Token verify karna
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) throw new apiError(401, "Invalid Access Token");

    // Database se user lana
    const fetchedUser = await getUser(decodedToken.Email);

    if (!fetchedUser) throw new apiError(401, "User Not Found");

    // User ko request object me add karna
    req.body.user = fetchedUser;
    next();
  } catch (error) {
    next(new apiError(401, error?.message || "Unauthorized Access"));
  }
});
