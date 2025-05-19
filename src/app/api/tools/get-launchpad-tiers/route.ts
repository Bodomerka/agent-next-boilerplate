import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json({ error: 'Missing required query parameter: userId' }, { status: 400 });
    }

    try {
        // TODO: Implement logic to fetch launchpad tiers for the given userId,
        // likely based on their xTREB staking amount and duration.

        console.log(`Fetching launchpad tiers for user ${userId}`);

        // Placeholder data based on your OpenAPI spec
        const launchpadTiers = [
            {
                tier: "Bronze",
                requirements: { stakedXTREB: ">=1000", duration: ">=30 days" }
            },
            {
                tier: "Silver",
                requirements: { stakedXTREB: ">=5000", duration: ">=60 days" }
            },
            {
                tier: "Gold",
                requirements: { stakedXTREB: ">=10000", duration: ">=90 days" }
            }
            // Add more tiers as needed
        ];

        // This is a placeholder, actual logic would filter tiers based on userId
        const userEligibleTiers = launchpadTiers; 

        return NextResponse.json(userEligibleTiers);
    } catch (error) {
        console.error("Error fetching launchpad tiers:", error);
        return NextResponse.json({ error: "Failed to fetch launchpad tiers" }, { status: 500 });
    }
} 