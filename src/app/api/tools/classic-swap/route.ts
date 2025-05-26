import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Log the raw request for debugging
        const url = request.url;
        const method = request.method;
        console.log(`🎸 Elvis Debug Classic Swap: ${method} ${url}`);
        
        let body;
        try {
            body = await request.json();
            console.log(`🎸 Elvis Debug Classic Swap: Request body:`, JSON.stringify(body));
        } catch (parseError) {
            console.error('🎸 Elvis Error: Failed to parse JSON body:', parseError);
            return NextResponse.json(
                { error: 'Invalid JSON in request body. Make sure to send valid JSON with tokenIn, tokenOut, and amount.' },
                { status: 400 }
            );
        }

        const { tokenIn, tokenOut, amount } = body;

        console.log(`🎸 Elvis Debug Classic Swap: tokenIn=${tokenIn}, tokenOut=${tokenOut}, amount=${amount}`);

        if (!tokenIn || !tokenOut || !amount) {
            console.log(`🎸 Elvis Error: Missing required parameters`);
            return NextResponse.json(
                { 
                    error: 'tokenIn, tokenOut, and amount are required for classic swap',
                    received: { tokenIn, tokenOut, amount },
                    example: {
                        tokenIn: "USDC",
                        tokenOut: "TREB", 
                        amount: "5.88"
                    }
                },
                { status: 400 }
            );
        }

        const amountNum = parseFloat(amount);
        if (isNaN(amountNum) || amountNum <= 0) {
            console.log(`🎸 Elvis Error: Invalid amount: ${amount}`);
            return NextResponse.json(
                { 
                    error: 'Invalid amount - must be a positive number',
                    received: amount,
                    parsed: amountNum
                },
                { status: 400 }
            );
        }

        // Mock supported tokens and their prices
        const tokenPrices: Record<string, number> = {
            'ETH': 3250.75,
            'USDC': 1.00,
            'TREB': 0.85,
            'xTREB': 1.15,
            'WBTC': 65420.30,
            'USDT': 0.999
        };

        if (!tokenPrices[tokenIn] || !tokenPrices[tokenOut]) {
            console.log(`🎸 Elvis Error: Unsupported token pair: ${tokenIn} → ${tokenOut}`);
            return NextResponse.json(
                { 
                    error: `Unsupported token pair. Supported tokens: ${Object.keys(tokenPrices).join(', ')}`,
                    received: { tokenIn, tokenOut },
                    supported: Object.keys(tokenPrices)
                },
                { status: 400 }
            );
        }

        // Calculate swap output (simulate slippage and fees)
        const priceIn = tokenPrices[tokenIn];
        const priceOut = tokenPrices[tokenOut];
        const valueUSD = amountNum * priceIn;
        const baseAmountOut = valueUSD / priceOut;
        
        // Apply slippage (0.1-0.5%) and fees (0.25%) + gas costs
        const slippage = 0.003; // 0.3%
        const feePercentage = 0.0025; // 0.25%
        const amountOut = baseAmountOut * (1 - slippage - feePercentage);
        const fees = baseAmountOut * feePercentage;
        const gasCost = Math.random() * 15 + 5; // $5-$20 gas cost
        
        // Generate mock swap ID
        const swapId = `classic_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const swapDetails = {
            swapId,
            type: 'classic',
            tokenIn,
            tokenOut,
            amountIn: amountNum,
            amountOut: amountOut.toFixed(6),
            gasCost: `$${gasCost.toFixed(2)}`,
            exchangeRate: `1 ${tokenIn} = ${(amountOut / amountNum).toFixed(6)} ${tokenOut}`,
            priceImpact: '0.08%',
            slippage: '0.30%',
            fees: fees.toFixed(6),
            feePercentage: '0.25%',
            route: `${tokenIn} → Treble v4 Pool → ${tokenOut}`,
            status: 'completed',
            timestamp: new Date().toISOString(),
            txHash: `0x${Math.random().toString(16).substr(2, 64)}`,
            blockNumber: Math.floor(Math.random() * 1000000) + 18000000,
            estimatedConfirmationTime: '15-30 seconds',
            gasDetails: {
                gasPrice: '12 gwei',
                gasUsed: '150,000',
                gasCostUSD: `$${gasCost.toFixed(2)}`
            },
            rewards: {
                trebPoints: Math.floor(amountNum * 0.05), // Less points for classic
                cashbackEligible: valueUSD > 100,
                referralBonus: '0.05%'
            }
        };

        console.log(`🎸 Elvis: Classic swap ${amount} ${tokenIn} → ${amountOut.toFixed(6)} ${tokenOut} - Traditional groove with gas, baby!`);

        return NextResponse.json({
            swapId,
            success: true,
            message: `🎸 Classic swap completed, baby! ${amount} ${tokenIn} → ${amountOut.toFixed(6)} ${tokenOut} - traditional rock'n'roll with ${gasCost.toFixed(2)} gas!`,
            details: swapDetails
        });

    } catch (error) {
        console.error('Error in classic-swap:', error);
        return NextResponse.json(
            { error: 'Failed to execute classic swap' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: "🎸 Classic Swap Endpoint - Traditional swaps with gas, baby!",
        method: "POST",
        example: {
            tokenIn: "USDC",
            tokenOut: "TREB",
            amount: "5.88"
        },
        supportedTokens: ["ETH", "USDC", "TREB", "xTREB", "WBTC", "USDT"],
        differences: {
            classic: "Pays gas fees but more reliable",
            gasless: "No gas fees but experimental"
        },
        status: "operational"
    });
} 