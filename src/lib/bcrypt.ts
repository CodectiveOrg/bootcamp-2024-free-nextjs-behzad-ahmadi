import bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
}

export async function comparePassword(
  password: string,
  hashed: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hashed);
}
