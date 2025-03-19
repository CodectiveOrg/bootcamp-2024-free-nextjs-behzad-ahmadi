import PrismaClient from '@prisma/client';

export type SignUpDTO = Omit<PrismaClient.User, 'id'>;
