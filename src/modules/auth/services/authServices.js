import { createAuthRepository } from "../repositories/authRepositories.js";

export const createAuthService = (
  userRepository = createAuthRepository()
) => {
  const generateTokenPair = async (userId) => {
    const accessToken = generateTokenPair(userId)
    return {accessToken}
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
  };
};