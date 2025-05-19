import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const vaultType = searchParams.get('vaultType');

    try {
        // TODO: Implement logic to fetch vault info from Trebleswap smart contracts
        // based on vaultType (v4, two-token, single-token)

        console.log(`Fetching vault info for type: ${vaultType || 'all'}`);

        // Placeholder data
        const vaultInfo = {
            type: vaultType || 'all',
            details: `Details for ${vaultType || 'all'} vaults from Trebleswap`,
            // Example structure based on your OpenAPI spec
            // v4: { ... },
            // twoToken: { ... },
            // singleToken: { ... }
        };

        if (vaultType && !["v4", "two-token", "single-token"].includes(vaultType)) {
            return NextResponse.json({ error: "Invalid vaultType specified" }, { status: 400 });
        }

        return NextResponse.json({ vaultInfo });
    } catch (error) {
        console.error("Error fetching vault info:", error);
        return NextResponse.json({ error: "Failed to fetch vault information" }, { status: 500 });
    }
} 