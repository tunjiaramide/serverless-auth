# Introduction
To deploy the backend unto AWS

### Pre-requisites
The backend uses the serverless-framework to depploy this application, so you need to install and configure AWS to use it.

1. Run npm install -g serverless
2. Configure AWS credentials on your local system - Follow this tutorial to do so - https://www.webiny.com/docs/infrastructure/aws/configure-aws-credentials



# Installation

1. Open the serverless.yml to make some edits

2. Change the bucketName under custom to something unique globally, make note of the bucketName

3. If you have aws configured as default on your system, just run "serverless deploy"

4. After deployment take the api url and add to the .env of your frontend before running "npm run build"
