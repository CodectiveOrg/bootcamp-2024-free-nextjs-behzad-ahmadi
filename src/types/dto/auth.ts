import PrismaClient from '@prisma/client';

export type SignUpDTO = Omit<PrismaClient.User, 'id' | 'name' | 'username'>;
export type SignInDTO = Pick<PrismaClient.User, 'email' | 'password'>;
