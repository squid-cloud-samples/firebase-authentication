# Integrating Firebase Authentication with Squid Cloud

This project showcases an implementation of [Squid Cloud](https://squid.cloud) with Firebase Authentication.

## Prerequisites

For this project you will need:

- NodeJS v18 or later.
- [Vite](https://vitejs.dev/).
- A Squid Cloud account and a Squid application. To sign up for Squid, go to [Squid Cloud Console](https://console.squid.cloud). Once signed up, you can create an application.
- The Squid Cloud CLI (`npm i @squidcloud/cli`).
- A [Firebase project](https://firebase.google.com/docs/projects/learn-more) with a web application.

## Environment configuration

### Setting up your `.env` file

After cloning this project, go to the [Squid Cloud Console](https://console.squid.cloud), create an application (if haven't done so already) and click the **Create .env file** button under **Backend project**. This provides you with the command to create the `.env` file required for this template to work and run.

Change to the backend directory, and install the required dependencies:

```bash
cd backend
npm install
```

Run the initialization command you copied from the console. The command has the following format:

```bash
squid init-env \
 --appId YOUR_APP_ID \
 --apiKey YOUR_API_KEY \
 --environmentId YOUR_ENVIRONMENT_ID \
 --squidDeveloperId YOUR_SQUID_DEVELOPER_ID \
 --region YOUR_REGION
```

### Finalizing setup

Open a new terminal window and navigate to the `frontend` directory. You should now have two terminal windows open: one in which you will run the local backend server, and one in which you will run the frontend. Complete the environment setup with the following steps, ensuring you're in the `frontend` directory:

```bash
npm run setup-env
```

This command prepares your `.env` file for the Vite environment by generating a `frontend/.env.local` file.

To give your project access to your Firebase credentials, replace the placeholders in `firebase.ts` with your Firebase config values.
Learn more about the Firebase config object in the [Firebase documenation](https://firebase.google.com/docs/web/learn-more#config-object).

## Running the application

### Starting the local backend server

To launch the local backend server of your Squid application, run the following command from the `backend` directory:

```bash
squid start
```

You'll see output similar to the following, indicating that your server is up and running:

```bash
> nodemon --watch ./src --exec ts-node -r tsconfig-paths/register src/main.ts
[Nest] 68047  - 03/15/2024, 7:55:23 PM     LOG [NestApplication] Nest application successfully started +1ms
```

### Launching the frontend server

Initialize the frontend server by running the following commands in the `frontend` directory:

```bash
npm install
npm run dev
```

Verify that Vite server has started, providing URLs to access your app:

```bash
  VITE v5.1.6  ready in 149 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Exploring your Squid application