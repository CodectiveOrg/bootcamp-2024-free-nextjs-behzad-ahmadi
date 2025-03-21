import PrismaClient from '@prisma/client';

export type SignUpDTO = Omit<PrismaClient.User, 'id' | 'name' | 'username'> & {
  'confirm-password': string;
};
export type SignInDTO = Pick<PrismaClient.User, 'email' | 'password'>;
