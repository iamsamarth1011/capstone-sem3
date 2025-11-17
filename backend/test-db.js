const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

async function testConnection() {
  try {
    console.log('Testing MongoDB connection...');
    
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('✅ Successfully connected to MongoDB!');
    
    const userCount = await User.countDocuments();
    console.log(`📊 Current user count: ${userCount}`);
    
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

testConnection();