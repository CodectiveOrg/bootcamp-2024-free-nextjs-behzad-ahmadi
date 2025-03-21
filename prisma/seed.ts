import { Prisma, PrismaClient } from '@prisma/client';
import { hashPassword } from '@/lib/bcrypt';

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    // name: 'بهزاد حاجی احمدی',
    username: 'behzad',
    email: 'bh.ahmady@gmail.com',
    password: 'Aa123456',
  },
];

export async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: { ...user, password: await hashPassword(user.password) },
    });
  }
}

main().then(() => console.log('Done!'));
