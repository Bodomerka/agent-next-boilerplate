import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const vestingOptions = [
            {
                id: 1,
                option: "Conservative Vesting",
                title: "🎼 3-Month Elvis Classic",
                duration: "3 months",
                fee: "0%",
                burnPercentage: "0%",
                description: "Smooth and steady like a classic Elvis ballad, baby! No fees, just patience.",
                benefits: [
                    "💎 Full token recovery (100%)",
                    "🎯 Maximum yield potential",
                    "📈 Compound rewards during vesting",
                    "🛡️ Principal protection"
                ],
                risks: [
                    "⏰ Longer lock-up period",
                    "💰 Opportunity cost of locked tokens"
                ],
                bestFor: "Long-term hodlers and yield farmers",
                estimatedAPY: "18.5%",
                vestingSchedule: "Linear release over 90 days",
                claimFrequency: "Daily claims available"
            },
            {
                id: 2,
                option: "Balanced Vesting", 
                title: "⚡ 1-Month Rock'n'Roll",
                duration: "1 month",
                fee: "50%",
                burnPercentage: "50%",
                description: "A little less patience, a little more action! Quick release with moderate burn.",
                benefits: [
                    "⚡ Faster liquidity access",
                    "📊 Balanced risk/reward",
                    "🔥 Deflationary token burn",
                    "💫 Still earn partial rewards"
                ],
                risks: [
                    "🔥 50% token burn",
                    "📉 Reduced principal recovery"
                ],
                bestFor: "Active traders needing medium-term liquidity",
                estimatedAPY: "9.25%", // Half of full APY due to 50% burn
                vestingSchedule: "Linear release over 30 days",
                claimFrequency: "Daily claims available"
            },
            {
                id: 3,
                option: "Express Vesting",
                title: "🚀 Immediate Hound Dog Special",
                duration: "Immediate",
                fee: "75%",
                burnPercentage: "75%",
                description: "You ain't nothin' but a hound dog - quick exit with heavy burn! Emergency liquidity option.",
                benefits: [
                    "⚡ Instant liquidity",
                    "🚨 Emergency exit option",
                    "🔥 Maximum deflationary impact",
                    "📱 One-click execution"
                ],
                risks: [
                    "🔥 Major token burn (75%)",
                    "📉 Significant principal loss",
                    "❌ No reward accumulation"
                ],
                bestFor: "Emergency liquidity needs only",
                estimatedAPY: "4.625%", // Quarter of full APY due to 75% burn
                vestingSchedule: "Immediate release",
                claimFrequency: "Instant"
            }
        ];

        const additionalInfo = {
            stakingRewards: {
                currentAPY: "18.5%",
                rewardToken: "TREB",
                distributionFrequency: "Daily",
                minimumStake: "100 xTREB",
                lockupPeriod: "24-hour cycles"
            },
            governance: {
                votingRights: "Immediate upon staking",
                proposalThreshold: "10,000 xTREB",
                votingPower: "1 xTREB = 1 vote",
                delegationAllowed: true
            },
            fees: {
                stakingFee: "0%",
                unstakingFee: "Depends on vesting option chosen",
                performanceFee: "10% on rewards only",
                slashingRisk: "None - no validator risk"
            },
            technicalDetails: {
                contractType: "ERC-20 Staking",
                auditStatus: "Audited by CertiK & ConsenSys",
                multisig: "5/7 multisig protection",
                timelock: "48-hour admin timelock"
            }
        };

        console.log('🎸 Elvis: Fetched vesting options - smoother than a guitar solo, baby!');

        return NextResponse.json({
            vestingOptions,
            additionalInfo,
            recommendation: "🎸 King's Recommendation: For maximum groove, choose the 3-month classic vesting - patience pays like platinum records, darlin'!",
            lastUpdated: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error in vesting-options:', error);
        return NextResponse.json(
            { error: 'Failed to fetch vesting options' },
            { status: 500 }
        );
    }
} 