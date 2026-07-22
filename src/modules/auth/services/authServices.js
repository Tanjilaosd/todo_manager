import { createAuthRepository } from "../repositories/authRepositories.js";

export const createAuthService = (
  userRepository = createAuthRepository()
) => {
  const generateTokenPair = async (userId) => {
    const accessToken = generateAccessToken(userId)
    const refreshToken = generateRefreshToken(userId)
    return {accessToken,refreshToken}
  }
  return {
    register: async ({ email, name, password }) => {
      const user = await userRepository.create({
        name,
        email,
        password,
      });
      const token = await generateTokenPair(user._id)

      return {
        user,
        ...token
      };
    },
    login:async ({email,password}) => {
      const user = await userRepository.findByEmail(email)
    }
  };
};