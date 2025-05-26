import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json(
                { error: 'userId is required for generating referral link' },
                { status: 400 }
            );
        }

        // Mock user xTREB staking data to determine tier
        const userStakingData = {
            userId,
            xTrebStaked: Math.floor(Math.random() * 50000) + 1000, // Random between 1000-51000
            stakingDuration: Math.floor(Math.random() * 365) + 30, // Days staked
            totalRewardsEarned: Math.floor(Math.random() * 10000) + 100
        };

        // Determine referral tier based on xTREB staked
        let tier = 'Bronze';
        let bonusPercentage = '0.05%';
        let maxRewards = '$100';
        
        if (userStakingData.xTrebStaked >= 50000) {
            tier = 'Platinum';
            bonusPercentage = '0.25%';
            maxRewards = '$2,500';
        } else if (userStakingData.xTrebStaked >= 25000) {
            tier = 'Gold';
            bonusPercentage = '0.20%';
            maxRewards = '$1,500';
        } else if (userStakingData.xTrebStaked >= 10000) {
            tier = 'Silver';
            bonusPercentage = '0.15%';
            maxRewards = '$750';
        } else if (userStakingData.xTrebStaked >= 5000) {
            tier = 'Bronze';
            bonusPercentage = '0.10%';
            maxRewards = '$300';
        }

        // Generate unique referral code
        const referralCode = `ELVIS_${userId.slice(0, 6).toUpperCase()}_${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
        
        // Create referral link
        const baseUrl = 'https://trebleswap.com';
        const referralLink = `${baseUrl}?ref=${referralCode}&utm_source=${userId}&utm_medium=referral&utm_campaign=elvis_defi`;

        const referralData = {
            referralLink,
            referralCode,
            user: {
                id: userId,
                tier,
                xTrebStaked: userStakingData.xTrebStaked,
                stakingDuration: userStakingData.stakingDuration
            },
            rewards: {
                bonusPercentage,
                maxMonthlyRewards: maxRewards,
                totalEarned: '$0.00',
                successfulReferrals: 0,
                avgReferralValue: '$0.00'
            },
            benefits: {
                referrer: [
                    `💰 ${bonusPercentage} bonus on referred trading volume`,
                    `📈 Progressive tier upgrades available`,
                    `🎯 Maximum ${maxRewards}/month earnings`,
                    `🔥 Extra TREB rewards for active referrers`
                ],
                referee: [
                    '🎸 20% discount on trading fees (first month)',
                    '💎 Welcome bonus: 100 TREB tokens',
                    '🚀 Early access to new features',
                    '📚 Exclusive Elvis DeFi tutorials'
                ]
            },
            tierRequirements: {
                'Bronze': '1,000+ xTREB staked',
                'Silver': '5,000+ xTREB staked', 
                'Gold': '10,000+ xTREB staked',
                'Platinum': '25,000+ xTREB staked',
                'Diamond': '50,000+ xTREB staked'
            },
            sharing: {
                twitter: `🎸 Join me on @Trebleswap - the grooviest DeFi platform with Elvis as your guide! Get 20% off trading fees: ${referralLink} #TrebleSwap #DeFi #Elvis`,
                discord: `Hey Treblenauts! 🎤 Ready to rock your DeFi game? Join Trebleswap with my referral link and get exclusive bonuses! ${referralLink}`,
                telegram: `🎵 Thank ya, thank ya very much! Join the king of DeFi on Trebleswap: ${referralLink}`
            },
            analytics: {
                trackingEnabled: true,
                conversionTracking: true,
                detailedReports: tier !== 'Bronze',
                realTimeUpdates: true
            },
            expiry: 'Never (permanent link)',
            created: new Date().toISOString()
        };

        console.log(`🎸 Elvis: Generated referral link for ${userId} (${tier} tier) - hotter than a platinum record, darlin'!`);

        return NextResponse.json({
            referralLink,
            success: true,
            message: `🎸 Your custom referral link is hotter than a platinum record, darlin'! You're ${tier} tier with ${bonusPercentage} bonus rewards!`,
            details: referralData
        });

    } catch (error) {
        console.error('Error in get-referral-link:', error);
        return NextResponse.json(
            { error: 'Failed to generate referral link' },
            { status: 500 }
        );
    }
} 