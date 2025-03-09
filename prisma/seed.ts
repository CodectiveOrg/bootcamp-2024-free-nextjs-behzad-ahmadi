import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: 'بهزاد حاجی احمدی',
    username: 'behzad',
    email: 'bh.ahmady@gmail.com',
    password: '2222',
  },
];

export async function main() {
  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

main().then(() => console.log('Done!'));
