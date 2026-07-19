import { createAuthRepository } from "../repositories/authRepositories.js";

export const createAuthService = (
  userRepository = createAuthRepository()
) => {
  return {
    register: async ({ email, name, password }) => {
      const user = await userRepository.create({
        name,
        email,
        password,
      });

      return {
        user,
      };
    },
  };
};