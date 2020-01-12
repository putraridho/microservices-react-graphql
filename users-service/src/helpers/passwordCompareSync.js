import { compareSync } from "bcryptjs";

export default (passwordToTest, passwordHash) =>
  compareSync(passwordToTest, passwordHash);
