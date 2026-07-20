import { http_status } from "../../../shared/constant.js";
import { createAuthService } from "../services/authServices.js";
import { asyncHandler } from "../utila/asynchandler.js";


const authServes = createAuthService();

export const register = asyncHandler(async (req, res) => {
  const { user,accessToken } = await authServes.register(req.body);

  res.status(http_status.CREATED).json({
    user,accessToken,
    message: "User registered successfully",
  });
});