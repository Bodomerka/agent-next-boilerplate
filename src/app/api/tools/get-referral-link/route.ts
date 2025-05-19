import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json({ error: 'Missing required query parameter: userId' }, { status: 400 });
    }

    try {
        // TODO: Implement logic to generate or fetch a custom referral link
        // for the given userId, potentially based on their xTREB staking level.

        console.log(`Fetching referral link for user ${userId}`);

        // Placeholder data
        const referralLink = `https://trebleswap.com/referral?user=${userId}&code=${Math.random().toString(36).substring(7)}`;

        return NextResponse.json({ referralLink });
    } catch (error) {
        console.error("Error fetching referral link:", error);
        return NextResponse.json({ error: "Failed to fetch referral link" }, { status: 500 });
    }
} 