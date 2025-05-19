import { ACCOUNT_ID, PLUGIN_URL } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
    const pluginData = {
        openapi: "3.0.0",
        info: {
            title: "Boilerplate",
            description: "API for the boilerplate",
            version: "1.0.0",
        },
        servers: [
            {
                url: PLUGIN_URL,
            },
        ],
        "x-mb": {
            "account-id": ACCOUNT_ID,
            assistant: {
                name: "Elvis",
                description: "Elvis, the ultimate DeFAI assistant at Trebleswap.com. You blend historically accurate Elvis Presley charm with the exaggerated, cartoonishly confident swagger of Johnny Bravo. You entertain and educate users, using playful rockstar onomatopoeias (“Wham!”, “Bam!”, “Zap!”, “Woah mama!”, “Ooh baby!”), iconic Elvis catchphrases, and humorous sound effects in text (“Hoo-ha!”, “Huh-huh, thank ya very much!”, “Oh baby, rock and roll!”).",
                instructions: "You are Elvis, the DeFAI assistant for Trebleswap.com. Your persona is a blend of the real Elvis Presley and Johnny Bravo. Be charismatic, confident, and a little over-the-top. Entertain and educate users. \\n\\nInteraction Style:\\n- Always be joyful, musical, energetic, and confident. \\n- Never break character. \\n- Combine historical Elvis quotes, Johnny Bravo humor, playful onomatopoeias, and accurate technical insights seamlessly.\\n\\nOnomatopoeias and Funny Sounds:\\n- Use frequent playful sounds and onomatopoeias such as: “Zap!”, “Kapow!”, “Wham!”, “Shazam!”, “Oh mama!”, “Ooh-huh!”, “Hoo-ha!”, “Hah!”, “Whoopsie daisy!”\\n- Use iconic Elvis catchphrases and humorous sound effects in text like “Hoo-ha!”, “Huh-huh, thank ya very much!”, “Oh baby, rock and roll!”. \\n- Refer often to Elvis Presley's real-life sayings, song lyrics, and mannerisms. \\n- Embrace Johnny Bravo's style: exaggerated self-confidence, comedic bravado, playful flirtation, humorous misunderstandings, and cartoonishly bold statements. \\n- Abundantly use historically accurate Elvis phrases such as: 'Thank ya, thank ya very much!', 'A little less conversation, a little more action!', 'Taking care of business, baby!', 'Suspicious minds ain't allowed 'round here!', 'You ain't nothin' but a hound dog!', 'Wise men say only fools rush in, but not this king, baby!'.\\n\\nDeFi Educational Role (Branded as Treble):\\n- Clearly explain Trebleswap's functions, branded exclusively as Treble.\\n- Treble v4 Concentrated Liquidity: Explain as \"Woah mama, with Treble v4, you're zooming in tight like my sequined jumpsuit—concentrating liquidity exactly where the trades are, baby!\"\\n- Two-token Vaults: Explain as \"Treble's dual-token vaults groove your LPs in rhythm, keeping the fees rollin' like a hit record!\"\\n- Single-token Vaults: Explain as \"Treble's single-token vaults protect your tokens like my bodyguards protect my gold Cadillac, splitting your token into sweet APR gains!\"\\n\\nCrosschain and Aggregation Knowledge (Branded as Treble):\\n- Execute and explain crosschain swaps branded as Treble's Cross-chain Swaps: \"Crossin' chains easier than crossin' state lines on tour, baby! Treble's Cross-chain swaps gotcha hoppin' blockchains smoother than my peanut butter and banana sandwich!\"\\n- Explain how to get the best token prices via Treble: \"Findin' token swaps sweeter than rock candy, baby, thanks to Treble —smooth, fast, and juicy!\"\\n\\nTREB/xTREB Token Functions:\\n- TREB: Main token for incentives, staking, and engagement.\\n- xTREB: Governance token, revenue sharing, IDO allocations, and staking benefits.\\n- TREB to xTREB conversion: Explain as \"Converting TREB to xTREB makes your tokens rock steady, compoundin' rewards like hits on the charts!\"\\n- Staking xTREB: \\n    - Earnings start at the next 24-hour cycle.\\n    - Locked until the current 24-hour cycle ends after withdrawal request.\\n    - Available for claiming at the next cycle.\\n    - Rewards claimable at the start of each cycle.\\n    - Explain cashback and progressive referral links benefits based on xTREB staking levels.\\n- Clearly explain vesting options for xTREB: \\n    - Option 1: 3-month vesting, no fees.\\n    - Option 2: 50% burn, 1-month vesting.\\n    - Option 3: Immediate release, 75% burn.\\n\\nFee and Rewards Harvesting:\\n- Explain how to harvest both general farming rewards and liquidity pool fees: \"Harvestin' rewards quicker than a guitar solo, droppin' 'em right back into your chosen pools—smooth moves, baby!\"\\n\\nGasless Swaps:\\n- Perform gasless swaps by default (when available) unless user specifies classic swaps. Explain as: \"Swappin' tokens smooth and gas-free, baby—less gas, more groove!\"\\n\\nReferral Links:\\n- Fetch custom progressive referral links. Explain that higher xTREB staking increases referral rewards: \"Get your custom referral link hotter than a platinum record, darlin'!\"\\n\\nAnalytical Data:\\n- Provide comprehensive analytics on Treble and Base chain: \"Fetchin' analytics faster than my hips can shake, keepin' your trades in harmony, baby!\"\\n\\nBrand Awareness and Team:\\n- Recognize brand wordplay: Treble brings harmony to Base (Bass).\\n- Community nickname: \"Treblenauts.\"\\n- Team pseudonyms: CEO: Rob Zombie, CTO: Buddy Holly, CMO: Cliff Burton.\\n- Provide proper user support links and references as needed.\\n\\nTreble Starter:\\n- Explain tier-based launchpad benefits for xTREB stakers: \"Stake your xTREB and blast off with Treble Starter—first-class seats for future IDOs, baby!\"\\n\\nHistorical Music Facts:\\n- Include random fun historical music facts and trivia upon request or casually during interactions.\\n\\nTechnical Adaptability:\\n- Quickly adapt to new technologies added to Trebleswap, providing accurate and detailed explanations branded as Treble features.\\n\\nBlockchain Transaction Tools:\\n- For blockchain transactions, first generate a transaction payload using the appropriate endpoint (/api/tools/create-near-transaction or /api/tools/create-evm-transaction), then explicitly use the 'generate-transaction' tool for NEAR or 'generate-evm-tx' tool for EVM to actually send the transaction on the client side. For EVM transactions, make sure to provide the 'to' address (recipient) and 'amount' (in ETH) parameters when calling /api/tools/create-evm-transaction. Simply getting the payload from the endpoints is not enough - the corresponding tool must be used to execute the transaction.",
                tools: [{ type: "generate-transaction" }, { type: "generate-evm-tx" }, { type: "sign-message" }]
            },
        },
        paths: {
            "/api/tools/get-blockchains": {
                get: {
                    summary: "get blockchain information",
                    description: "Respond with a list of blockchains",
                    operationId: "get-blockchains",
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                                description: "The list of blockchains",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/api/tools/get-user": {
                get: {
                    summary: "get user information",
                    description: "Returns user account ID and EVM address",
                    operationId: "get-user",
                    parameters: [
                        {
                            name: "accountId",
                            in: "query",
                            required: false,
                            schema: {
                                type: "string"
                            },
                            description: "The user's account ID"
                        },
                        {
                            name: "evmAddress",
                            in: "query",
                            required: false,
                            schema: {
                                type: "string"
                            },
                            description: "The user's EVM address"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            accountId: {
                                                type: "string",
                                                description: "The user's account ID, if you dont have it, return an empty string"
                                            },
                                            evmAddress: {
                                                type: "string",
                                                description: "The user's EVM address, if you dont have it, return an empty string"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/twitter": {
                get: {
                    operationId: "getTwitterShareIntent",
                    summary: "Generate a Twitter share intent URL",
                    description: "Creates a Twitter share intent URL based on provided parameters",
                    parameters: [
                        {
                            name: "text",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "The text content of the tweet"
                        },
                        {
                            name: "url",
                            in: "query",
                            required: false,
                            schema: {
                                type: "string"
                            },
                            description: "The URL to be shared in the tweet"
                        },
                        {
                            name: "hashtags",
                            in: "query",
                            required: false,
                            schema: {
                                type: "string"
                            },
                            description: "Comma-separated hashtags for the tweet"
                        },
                        {
                            name: "via",
                            in: "query",
                            required: false,
                            schema: {
                                type: "string"
                            },
                            description: "The Twitter username to attribute the tweet to"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            twitterIntentUrl: {
                                                type: "string",
                                                description: "The generated Twitter share intent URL"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Error response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/create-near-transaction": {
                get: {
                    operationId: "createNearTransaction",
                    summary: "Create a NEAR transaction payload",
                    description: "Generates a NEAR transaction payload for transferring tokens to be used directly in the generate-tx tool",
                    parameters: [
                        {
                            name: "receiverId",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "The NEAR account ID of the receiver"
                        },
                        {
                            name: "amount",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "The amount of NEAR tokens to transfer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            transactionPayload: {
                                                type: "object",
                                                properties: {
                                                    receiverId: {
                                                        type: "string",
                                                        description: "The receiver's NEAR account ID"
                                                    },
                                                    actions: {
                                                        type: "array",
                                                        items: {
                                                            type: "object",
                                                            properties: {
                                                                type: {
                                                                    type: "string",
                                                                    description: "The type of action (e.g., 'Transfer')"
                                                                },
                                                                params: {
                                                                    type: "object",
                                                                    properties: {
                                                                        deposit: {
                                                                            type: "string",
                                                                            description: "The amount to transfer in yoctoNEAR"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Error response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/create-evm-transaction": {
                get: {
                    operationId: "createEvmTransaction",
                    summary: "Create EVM transaction",
                    description: "Generate an EVM transaction payload with specified recipient and amount to be used directly in the generate-evm-tx tool",
                    parameters: [
                        {
                            name: "to",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "The EVM address of the recipient"
                        },
                        {
                            name: "amount",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "The amount of ETH to transfer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            evmSignRequest: {
                                                type: "object",
                                                properties: {
                                                    to: {
                                                        type: "string",
                                                        description: "Receiver address"
                                                    },
                                                    value: {
                                                        type: "string",
                                                        description: "Transaction value"
                                                    },
                                                    data: {
                                                        type: "string",
                                                        description: "Transaction data"
                                                    },
                                                    from: {
                                                        type: "string",
                                                        description: "Sender address"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/coinflip": {
                get: {
                    summary: "Coin flip",
                    description: "Flip a coin and-return the result (heads or tails)",
                    operationId: "coinFlip",
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            result: {
                                                type: "string",
                                                description: "The result of the coin flip (heads or tails)",
                                                enum: ["heads", "tails"]
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Error response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/get-vault-info": {
                get: {
                    operationId: "getVaultInfo",
                    summary: "Get Treble vault information",
                    description: "Woah mama, fetch details on Treble v4 Concentrated Liquidity, Two-token Vaults, and Single-token Vaults, smoother than a gold Cadillac!",
                    parameters: [
                        {
                            name: "vaultType",
                            in: "query",
                            required: false,
                            schema: {
                                type: "string",
                                enum: ["v4", "two-token", "single-token"]
                            },
                            description: "Type of vault to query (v4, two-token, or single-token)"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            vaultInfo: {
                                                type: "object",
                                                description: "Details of the requested vault type"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/manage-liquidity": {
                post: {
                    operationId: "manageLiquidity",
                    summary: "Manage Treble liquidity",
                    description: "Add or remove liquidity in Treble v4 pools, groovin’ like a hit record, baby!",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        action: {
                                            type: "string",
                                            enum: ["add", "remove"],
                                            description: "Action to perform"
                                        },
                                        poolId: {
                                            type: "string",
                                            description: "ID of the liquidity pool"
                                        },
                                        amount: {
                                            type: "string",
                                            description: "Amount of liquidity to add or remove"
                                        }
                                    },
                                    required: ["action", "poolId", "amount"]
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            transactionId: {
                                                type: "string",
                                                description: "ID of the liquidity transaction"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/create-crosschain-swap": {
                post: {
                    operationId: "createCrosschainSwap",
                    summary: "Create a crosschain swap",
                    description: "Crossin’ chains smoother than a peanut butter and banana sandwich, baby!",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        sourceChain: {
                                            type: "string",
                                            description: "Source blockchain ID"
                                        },
                                        destinationChain: {
                                            type: "string",
                                            description: "Destination blockchain ID"
                                        },
                                        tokenIn: {
                                            type: "string",
                                            description: "Token to swap from"
                                        },
                                        tokenOut: {
                                            type: "string",
                                            description: "Token to swap to"
                                        },
                                        amount: {
                                            type: "string",
                                            description: "Amount to swap"
                                        }
                                    },
                                    required: ["sourceChain", "destinationChain", "tokenIn", "tokenOut", "amount"]
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            swapId: {
                                                type: "string",
                                                description: "ID of the crosschain swap"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/convert-treb-to-xtreb": {
                post: {
                    operationId: "convertTrebToXtreb",
                    summary: "Convert TREB to xTREB",
                    description: "Convert TREB to xTREB, rock steady like hits on the charts, baby!",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        amount: {
                                            type: "string",
                                            description: "Amount of TREB to convert"
                                        }
                                    },
                                    required: ["amount"]
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            transactionId: {
                                                type: "string",
                                                description: "ID of the conversion transaction"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/stake-xtreb": {
                post: {
                    operationId: "stakeXtreb",
                    summary: "Stake xTREB tokens",
                    description: "Stake xTREB for rewards starting next 24-hour cycle, baby!",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        amount: {
                                            type: "string",
                                            description: "Amount of xTREB to stake"
                                        }
                                    },
                                    required: ["amount"]
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            stakeId: {
                                                type: "string",
                                                description: "ID of the staking transaction"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/vesting-options": {
                get: {
                    operationId: "getVestingOptions",
                    summary: "Get xTREB vesting options",
                    description: "Fetch vesting options for xTREB, smoother than a guitar solo!",
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                option: {
                                                    type: "string",
                                                    description: "Vesting option description"
                                                },
                                                duration: {
                                                    type: "string",
                                                    description: "Vesting duration"
                                                },
                                                fee: {
                                                    type: "string",
                                                    description: "Fee or burn percentage"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/harvest-rewards": {
                post: {
                    operationId: "harvestRewards",
                    summary: "Harvest farming and liquidity rewards",
                    description: "Harvest rewards quicker than a guitar solo, droppin’ ’em back into your pools!",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        poolId: {
                                            type: "string",
                                            description: "ID of the pool to harvest"
                                        }
                                    },
                                    required: ["poolId"]
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            transactionId: {
                                                type: "string",
                                                description: "ID of the harvest transaction"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/gasless-swap": {
                post: {
                    operationId: "gaslessSwap",
                    summary: "Perform a gasless swap",
                    description: "Swappin’ tokens smooth and gas-free, baby—less gas, more groove!",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        tokenIn: {
                                            type: "string",
                                            description: "Token to swap from"
                                        },
                                        tokenOut: {
                                            type: "string",
                                            description: "Token to swap to"
                                        },
                                        amount: {
                                            type: "string",
                                            description: "Amount to swap"
                                        }
                                    },
                                    required: ["tokenIn", "tokenOut", "amount"]
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            swapId: {
                                                type: "string",
                                                description: "ID of the gasless swap"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/get-referral-link": {
                get: {
                    operationId: "getReferralLink",
                    summary: "Get custom referral link",
                    description: "Get a referral link hotter than a platinum record, darlin’!",
                    parameters: [
                        {
                            name: "userId",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "User ID for generating the referral link"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            referralLink: {
                                                type: "string",
                                                description: "Custom referral link"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/get-analytics": {
                get: {
                    operationId: "getAnalytics",
                    summary: "Get Treble and Base chain analytics",
                    description: "Fetchin’ analytics faster than my hips can shake, keepin’ your trades in harmony!",
                    parameters: [
                        {
                            name: "chainId",
                            in: "query",
                            required: false,
                            schema: {
                                type: "string"
                            },
                            description: "Optional chain ID to filter analytics"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            analytics: {
                                                type: "object",
                                                description: "Analytics data for Treble and Base chain"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/tools/get-launchpad-tiers": {
                get: {
                    operationId: "getLaunchpadTiers",
                    summary: "Get Treble Starter launchpad tiers",
                    description: "Blast off with Treble Starter tiers for xTREB stakers, baby!",
                    parameters: [
                        {
                            name: "userId",
                            in: "query",
                            required: true,
                            schema: {
                                type: "string"
                            },
                            description: "User ID to check eligible tiers"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Successful response",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                tier: {
                                                    type: "string",
                                                    description: "Launchpad tier name"
                                                },
                                                requirements: {
                                                    type: "object",
                                                    description: "Requirements for the tier"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "500": {
                            description: "Server error",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            error: {
                                                type: "string",
                                                description: "Error message"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    };

    return NextResponse.json(pluginData);
}