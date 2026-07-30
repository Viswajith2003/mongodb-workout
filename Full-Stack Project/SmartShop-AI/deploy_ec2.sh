#!/bin/bash
# SmartShop-AI EC2 Deployment Script
# Run this on a fresh Ubuntu EC2 instance

set -e

echo "Starting deployment setup..."

# 1. Update and install dependencies
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install -y curl git build-essential

# 2. Install Node.js (v20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install PM2 globally
sudo npm install pm2 -g

# 4. Clone repository
# IMPORTANT: Replace with your actual repo URL if private, use Personal Access Token or SSH keys
git clone https://github.com/Viswajith2003/mongoDB-workout.git smartshop-ai
cd smartshop-ai/Smartshop-AdminSide/backend

# 5. Install Backend Dependencies
echo "Installing AdminSide Backend Dependencies..."
npm install

cd ../../Smartshop-ClientSide/backend
echo "Installing ClientSide Backend Dependencies..."
npm install

echo "Dependencies installed successfully."
echo "IMPORTANT: Don't forget to create .env files in both backend directories before starting PM2."
echo "Run the following commands to start the servers:"
echo "pm2 start server.js --name 'smartshop-admin-backend'"
echo "pm2 start server.js --name 'smartshop-client-backend'"
echo "pm2 save"
echo "pm2 startup"
