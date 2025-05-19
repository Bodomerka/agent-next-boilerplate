import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount } = body;

        if (!amount) {
            return NextResponse.json({ error: 'Missing required field: amount' }, { status: 400 });
        }

        // TODO: Implement logic to interact with Trebleswap smart contracts
        // to stake xTREB.

        console.log(`Staking ${amount} xTREB`);

        // Placeholder data
        const stakeId = `stake_${Date.now()}`;

        return NextResponse.json({ stakeId });
    } catch (error) {
        console.error("Error staking xTREB:", error);
        if (error instanceof SyntaxError) {
            return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
        }
        return NextResponse.json({ error: "Failed to stake xTREB" }, { status: 500 });
    }
} 