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
- `/api/tools/get-blockchains` - List supported blockchains
- `/api/tools/get-user` - Get user information
- `/api/tools/coinflip` - Flip a coin (demo tool)

### DeFi Operations
- `/api/tools/gasless-swap` - Perform gasless token swaps
- `/api/tools/classic-swap` - Traditional swaps with gas
- `/api/tools/create-crosschain-swap` - Cross-chain swaps
- `/api/tools/get-vault-info` - Treble vault information
- `/api/tools/manage-liquidity` - Add/remove liquidity
- `/api/tools/harvest-rewards` - Harvest farming rewards

### TREB/xTREB Functions
- `/api/tools/convert-treb-to-xtreb` - Convert TREB to xTREB
- `/api/tools/stake-xtreb` - Stake xTREB tokens
- `/api/tools/vesting-options` - Get vesting options

### Analytics & Tools
- `/api/tools/get-analytics` - Treble and Base chain analytics
- `/api/tools/get-referral-link` - Generate referral links
- `/api/tools/get-launchpad-tiers` - Treble Starter tiers
- `/api/tools/twitter` - Generate Twitter share links

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
