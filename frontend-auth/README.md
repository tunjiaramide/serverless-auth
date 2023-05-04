# Installation
To deploy the frontend into AWS S3 follow the following instructions


1. Open the .env file and update the REACT_APP_URL=https://u7yjnxwaq7.execute-api.us-east-1.amazonaws.com/dev with api url gotten from the backend-auth

2. Run "npm run build"

3. Upload the build contents into the S3 bucket created in the backend-auth
