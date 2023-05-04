# Introduction
This is a simple user authentication system built with React and Serverless backend (API Gateway, Lambda, and DynamoDb), deployed to AWS using the serverless framework.


### Architecture

Frontend - Hosted on AWS S3
API - API Gateway used to define the routes
Backend - Lambda was used to execute code
Database - DynamoDb was used to store the user data
IAC - Serverless framework was used to build and manage the infrastructure

### Pre-requisites
1. Have the serverless framework installed on your system
2. Have AWS credentials configured on your system


### Installation
1. Clone the repo, access the backend-auth, take a look at the README then run "serverless deploy"

2. Access the frontend-auth, take a look at the README, update the .env file with the api url gotten from the backend-auth, then run "npm run build"

3. Upload the build file into your bucket in the console

4. Access your website url.
