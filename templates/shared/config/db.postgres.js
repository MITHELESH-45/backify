import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const connectPostgres = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('PostgreSQL connection error:', error);
    process.exit(1);
  }
};

export default connectPostgres;
export { prisma };
