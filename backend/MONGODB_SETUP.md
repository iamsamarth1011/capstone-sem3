# MongoDB Atlas Setup Guide

## 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new cluster (choose the free tier)

## 2. Configure Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Create a username and password
4. Set privileges to "Read and write to any database"

## 3. Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Choose "Allow access from anywhere" (0.0.0.0/0) for development
   - For production, restrict to specific IPs

## 4. Get Connection String
1. Go to "Clusters" and click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<username>`, `<password>`, and `<database-name>` in your .env file

## 5. Update .env file
Replace the DATABASE_URL in your .env file with:
```
DATABASE_URL="mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/your-database-name?retryWrites=true&w=majority"
```

## 6. Generate Prisma Client
Run the following commands:
```bash
npx prisma generate
npx prisma db push
```

Your MongoDB database is now ready to use!