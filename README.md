# Elvis DeFi Assistant - API Backend

Elvis, the ultimate DeFAI assistant for Trebleswap.com! This is a backend API service that provides DeFi tools and functionality through the bitte.ai platform.

## 🎯 What is this?

This is a **backend-only API service** that serves as an "Open Agent" for the [bitte.ai](https://bitte.ai) platform. It provides 17+ DeFi tools and functionality without any frontend interface - all interaction happens through bitte.ai's chat interface.

## 🚀 How it works

1. **No Frontend**: This project contains only API endpoints, no UI
2. **bitte.ai Integration**: Users interact with Elvis through bitte.ai's platform
3. **OpenAPI Specification**: The `/api/ai-plugin` endpoint provides the complete API spec for bitte.ai
4. **Agent Registration**: Deployed agents are registered with bitte.ai using `make-agent deploy`

## 🎸 Elvis Personality

Elvis combines:
- Historical Elvis Presley charm and catchphrases
- Johnny Bravo's exaggerated confidence
- Playful onomatopoeias ("Wham!", "Bam!", "Zap!", "Woah mama!")
- Deep DeFi knowledge for Trebleswap

## 🛠 Available API Endpoints

### Core Tools
- **`/api/tools/get-blockchains`**:
    - **Description**: Lists all blockchains supported by the platform.
    - **Functionality**: Allows users or the system to identify which blockchains Elvis can interact with. This is crucial for operations like cross-chain swaps or transactions on specific blockchains.
- **`/api/tools/get-user`**:
    - **Description**: Retrieves information about a specific user.
    - **Functionality**: Used for personalizing interactions, displaying user data (e.g., balances, transaction history), or authorizing certain actions. The specific information returned depends on the implementation.

### DeFi Operations
- **`/api/tools/gasless-swap`**:
    - **Description**: Performs token swaps without requiring the user to pay for gas.
    - **Functionality**: Enables users to exchange cryptocurrency tokens where the transaction fee (gas) is covered by another mechanism (e.g., relayers or special contracts), simplifying the process and reducing costs for the end-user.
- **`/api/tools/create-crosschain-swap`**:
    - **Description**: Creates a token swap operation between different blockchains.
    - **Functionality**: Allows users to exchange assets from one blockchain to another. This complex operation typically involves bridges or cross-chain interaction protocols.
- **`/api/tools/get-vault-info`**:
    - **Description**: Provides information about Trebleswap vaults.
    - **Functionality**: DeFi vaults are often used for staking, yield farming, or asset storage. This endpoint likely returns data about vault status, available assets, interest rates, etc.
- **`/api/tools/manage-liquidity`**:
    - **Description**: Allows adding or removing liquidity from pools.
    - **Functionality**: On decentralized exchanges, users can provide liquidity in exchange for a share of trading fees. This endpoint allows users to manage their liquidity positions.
- **`/api/tools/harvest-rewards`**:
    - **Description**: Collects accumulated farming rewards.
    - **Functionality**: Users who provide liquidity or stake tokens often earn rewards. This endpoint allows them to claim these earned rewards.

### TREB/xTREB Functions
- **`/api/tools/convert-treb-to-xtreb`**:
    - **Description**: Converts TREB tokens to xTREB tokens.
    - **Functionality**: xTREB is likely a derivative token of TREB, offering additional benefits such as voting rights, higher staking rewards, or other utilities within the Trebleswap ecosystem.
- **`/api/tools/stake-xtreb`**:
    - **Description**: Allows staking of xTREB tokens.
    - **Functionality**: Staking xTREB likely enables users to earn passive income or other bonuses within the ecosystem.
- **`/api/tools/vesting-options`**:
    - **Description**: Retrieves information about available vesting options.
    - **Functionality**: Vesting is the process of gradually unlocking tokens over a period. This endpoint provides information about the terms and schedules of vesting that may apply to certain tokens (e.g., received during a sale or as rewards).

### Analytics & Tools
- **`/api/tools/get-analytics`**:
    - **Description**: Provides analytical data on Trebleswap and the Base chain.
    - **Functionality**: Returns statistics, trends, trading volumes, user counts, or other relevant analytical information useful for users or for monitoring platform status.
- **`/api/tools/get-launchpad-tiers`**:
    - **Description**: Provides information about Treble Starter launchpad tiers.
    - **Functionality**: Launchpad platforms often have a tier system determining user access to Initial DEX Offerings (IDOs). This endpoint provides details about these tiers and their requirements.
- **`/api/tools/get-referral-link`**:
    - **Description**: Fetches a custom progressive referral link for the user.
    - **Functionality**: Generates a unique referral link. Higher xTREB staking by the user increases the referral rewards they can earn by sharing the link. The endpoint returns the link and a description of the current reward tier. (Elvis says: "Get your custom referral link hotter than a platinum record, darlin'!")

### Blockchain Transactions
- `/api/tools/create-near-transaction` - NEAR transaction payloads
- `/api/tools/create-evm-transaction` - EVM transaction payloads

## 🔧 Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev:agent

# Build for production
pnpm run build

# Deploy to Vercel and register with bitte.ai
pnpm run build:deploy
```

## 📡 API Documentation

The complete OpenAPI specification is available at `/api/ai-plugin` and includes:
- All endpoint descriptions
- Parameter requirements
- Response schemas
- Elvis personality configuration

## 🌐 Deployment

This service is deployed at: https://agent-next-boilerplate-chi.vercel.app

### Agent Registration
After deployment, the agent is registered with bitte.ai:
```bash
npx make-agent deploy
```

Agent ID: `agent-next-boilerplate-chi.vercel.app`

## 🎪 Interaction

Users don't interact with this service directly. Instead:
1. Visit [bitte.ai](https://bitte.ai)
2. Search for "Elvis" or the agent ID
3. Start chatting with Elvis about DeFi operations
4. Elvis will call these API endpoints as tools to help users

## 🔒 Environment Variables

```env
ACCOUNT_ID=your-near-account.near
PLUGIN_URL=https://your-domain.com
```

## 🎵 Elvis Says

*"Thank ya, thank ya very much! Now you've got a lean, mean, DeFi machine that's ready to rock and roll on bitte.ai, baby! Wham!"*
