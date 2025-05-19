import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // TODO: Implement logic to fetch vesting options from Trebleswap smart contracts
        // or a configuration file.

        console.log("Fetching vesting options");

        // Placeholder data based on your OpenAPI spec
        const vestingOptions = [
            {
                option: "3-month vesting, no fees",
                duration: "3 months",
                fee: "0%"
            },
            {
                option: "1-month vesting, 50% burn",
                duration: "1 month",
                fee: "50% burn"
            },
            {
                option: "Immediate release, 75% burn",
                duration: "0 months",
                fee: "75% burn"
            }
        ];

        return NextResponse.json(vestingOptions);
    } catch (error) {
        console.error("Error fetching vesting options:", error);
        return NextResponse.json({ error: "Failed to fetch vesting options" }, { status: 500 });
    }
} 