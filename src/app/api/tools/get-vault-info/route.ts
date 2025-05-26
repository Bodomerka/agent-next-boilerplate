import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const vaultType = searchParams.get('vaultType');

        const vaultData = {
            'v4': {
                name: "Treble v4 Concentrated Liquidity",
                description: "Woah mama, with Treble v4, you're zooming in tight like my sequined jumpsuit—concentrating liquidity exactly where the trades are, baby!",
                features: [
                    "🎯 Concentrated liquidity positions",
                    "📈 Higher capital efficiency",
                    "💎 Custom price ranges",
                    "🔥 Maximum fee collection"
                ],
                apy: "15-45%",
                riskLevel: "Medium-High",
                minDeposit: "50 USDC",
                supportedPairs: ["ETH/USDC", "TREB/ETH", "WBTC/ETH"],
                mechanics: {
                    feeStructure: "0.3% trading fees shared among LPs",
                    rebalancing: "Manual position management required",
                    impermanentLoss: "Higher risk due to concentrated ranges"
                }
            },
            'two-token': {
                name: "Treble Dual-Token Vaults",
                description: "Treble's dual-token vaults groove your LPs in rhythm, keeping the fees rollin' like a hit record!",
                features: [
                    "🎪 Automated rebalancing",
                    "💰 Dual-token rewards",
                    "🔄 Auto-compounding",
                    "🛡️ Lower impermanent loss"
                ],
                apy: "8-25%",
                riskLevel: "Medium",
                minDeposit: "100 USDC equivalent",
                supportedPairs: ["TREB/xTREB", "ETH/USDC", "USDC/USDT"],
                mechanics: {
                    feeStructure: "0.25% management fee + performance fees",
                    rebalancing: "Automated every 24 hours",
                    impermanentLoss: "Reduced through active management"
                }
            },
            'single-token': {
                name: "Treble Single-Token Vaults",
                description: "Treble's single-token vaults protect your tokens like my bodyguards protect my gold Cadillac, splitting your token into sweet APR gains!",
                features: [
                    "🏦 Single asset deposit",
                    "🔒 Principal protection",
                    "📊 Stable yields",
                    "💫 No impermanent loss"
                ],
                apy: "5-15%",
                riskLevel: "Low-Medium",
                minDeposit: "10 tokens",
                supportedTokens: ["TREB", "xTREB", "ETH", "USDC", "WBTC"],
                mechanics: {
                    feeStructure: "0.15% management fee",
                    strategies: "Lending, staking, yield farming",
                    impermanentLoss: "None - single asset exposure"
                }
            }
        };

        if (vaultType && vaultData[vaultType as keyof typeof vaultData]) {
            return NextResponse.json({
                vaultInfo: vaultData[vaultType as keyof typeof vaultData]
            });
        }

        // Return all vault types if no specific type requested
        return NextResponse.json({
            vaultInfo: {
                summary: "🎸 All Treble Vault Types - Rock steady returns, baby!",
                vaults: vaultData,
                totalTVL: "$24.5M",
                activeUsers: "2,847 Treblenauts",
                lastUpdated: new Date().toISOString()
            }
        });
        
    } catch (error) {
        console.error('Error in get-vault-info:', error);
        return NextResponse.json(
            { error: 'Failed to fetch vault information' },
            { status: 500 }
        );
    }
} 