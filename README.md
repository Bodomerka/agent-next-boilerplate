# Agent Next.js Boilerplate for bitte.ai

This project is a Next.js application that serves as an "Open Agent" for the bitte.ai platform. It provides a set of API endpoints defined in an OpenAPI-compatible format, which bitte.ai Runtime can interact with to perform tasks.

## Project Structure

-   `/src/app/api/tools/`: Contains the logic for individual tools (API endpoints) that the agent exposes.
-   `/src/app/api/ai-plugin/route.ts`: Generates the AI plugin manifest and OpenAPI specification required by bitte.ai. This is available at the `/api/ai-plugin` endpoint after deployment.
-   `/public/`: Static assets.
-   `.env`: Contains environment variables. **A corresponding production environment configuration will be required.**

## Prerequisites

-   Node.js (version specified in `package.json` or latest LTS)
-   npm or pnpm

## Setup and Local Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```
3.  Create a `.env` file based on `.env.example` (if available) or provide necessary environment variables.
4.  Run the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`. The AI plugin manifest will be at `http://localhost:3000/api/ai-plugin`.

## Build for Production

To create a production build, run:

```bash
npm run build
```

This will create an optimized build in the `.next` directory.

## Running in Production

To start the application in production mode after a successful build:

```bash
npm run start
```

The application will typically run on port 3000 unless configured otherwise via the `PORT` environment variable.

## Deployment

1.  **Host the Next.js Application**:
    *   Deploy this Next.js application to a suitable hosting provider that supports Node.js (e.g., Vercel, Netlify, AWS, custom server).
    *   Ensure the application is accessible via a public URL (e.g., `https://<YOUR_DEPLOYED_APP_URL>`).
    *   Configure all necessary environment variables on the hosting platform.

2.  **OpenAPI / AI Plugin Endpoint**:
    *   The AI plugin manifest and OpenAPI specification will be available at `https://<YOUR_DEPLOYED_APP_URL>/api/ai-plugin`. This URL is crucial for bitte.ai integration.

3.  **Register/Deploy Agent to bitte.ai**:
    *   The `package.json` contains a script `build:deploy`:
        ```json
        "build:deploy": "next build && make-agent deploy -u https://agent-next-boilerplate.vercel.app"
        ```
    *   This script uses the `make-agent` tool to deploy/register the agent with bitte.ai.
    *   After deploying the Next.js application and obtaining its public URL, this command (or a similar one) needs to be executed, replacing `https://agent-next-boilerplate.vercel.app` with the actual public URL of your deployed application.
        ```bash
        make-agent deploy -u https://<YOUR_DEPLOYED_APP_URL>
        ```
    *   It's possible that `make-agent` requires authentication or further configuration to communicate with bitte.ai. Refer to `bitte.ai` or `make-agent` documentation for details.

## Environment Variables

The following environment variables are required for the application to run correctly. Please configure them in your deployment environment:

-   `ACCOUNT_ID`: Your account ID on the bitte.ai platform. This is used in the AI plugin manifest.
-   `NEXT_PUBLIC_HOST`: The public hostname of your deployed application (e.g., `my-agent.example.com`). This is used to construct the `PLUGIN_URL` if not deploying on Vercel.
-   `PORT`: The port on which the application will run in the production environment (e.g., `3000` or `8080`). This is used to construct the `PLUGIN_URL` if not deploying on Vercel and if the `PORT` is not standard (80/443).

If deploying on Vercel, `PLUGIN_URL` might be automatically determined. However, it's good practice to set `NEXT_PUBLIC_HOST` explicitly for clarity and for the `make-agent deploy` command.

The `PLUGIN_URL` (the full public base URL of the agent, e.g., `https://my-agent.example.com`) is crucial. It will be either automatically derived (e.g., on Vercel) or constructed using `NEXT_PUBLIC_HOST` and `PORT`. This URL needs to be provided to the `make-agent deploy -u <PLUGIN_URL>` command.

**Note**: Ensure that sensitive information is handled securely and not hardcoded.

## Contact

For any questions regarding this project setup, please contact [Your Name/Team Contact].
