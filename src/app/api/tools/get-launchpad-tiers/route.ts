import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
            return NextResponse.json(
                { error: 'userId is required to check eligible launchpad tiers' },
                { status: 400 }
            );
    }

        // Mock user data
        const userStakingData = {
            userId,
            xTrebStaked: Math.floor(Math.random() * 100000) + 500, // Random between 500-100500
            stakingDuration: Math.floor(Math.random() * 365) + 7, // Days staked
            totalTradingVolume: Math.floor(Math.random() * 1000000) + 10000,
            referralsCompleted: Math.floor(Math.random() * 50),
            governanceParticipation: Math.random() > 0.5
        };

        // Define all launchpad tiers
        const allTiers = [
            {
                tier: "🥉 Cadet",
                minxTREBRequired: 500,
                allocation: "$50-$200",
                poolAccess: "Public pools only",
                guaranteedAllocation: false,
                requirements: {
                    xTREBStaked: 500,
                    stakingDuration: "7+ days",
                    tradingVolume: "$1,000+",
                    additionalRequirements: []
                },
                benefits: [
                    "🎸 Access to public IDO pools",
                    "📊 Basic project analytics",
                    "💫 Elvis welcome bonus"
                ],
                cooldown: "24 hours between applications",
                feeDiscount: "5%"
            },
            {
                tier: "🥈 Scout",
                minxTREBRequired: 2500,
                allocation: "$200-$750",
                poolAccess: "Public + Scout exclusive pools",
                guaranteedAllocation: true,
                requirements: {
                    xTREBStaked: 2500,
                    stakingDuration: "30+ days",
                    tradingVolume: "$10,000+",
                    additionalRequirements: ["Complete 2+ referrals"]
                },
                benefits: [
                    "🎯 Guaranteed minimum allocation",
                    "🚀 Early bird pricing (-10%)",
                    "📈 Advanced project analytics",
                    "🎤 Elvis priority support"
                ],
                cooldown: "12 hours between applications",
                feeDiscount: "10%"
            },
            {
                tier: "🏅 Sergeant",
                minxTREBRequired: 10000,
                allocation: "$750-$2,500",
                poolAccess: "All public pools + Sergeant tier",
                guaranteedAllocation: true,
                requirements: {
                    xTREBStaked: 10000,
                    stakingDuration: "60+ days",
                    tradingVolume: "$50,000+",
                    additionalRequirements: ["Governance participation", "5+ referrals"]
                },
                benefits: [
                    "💎 Higher allocation guarantees",
                    "⚡ Priority queue access",
                    "🔥 Exclusive pre-sale rounds",
                    "📊 Real-time project insights",
                    "🎸 Elvis VIP channel access"
                ],
                cooldown: "6 hours between applications",
                feeDiscount: "15%"
            },
            {
                tier: "⭐ Captain",
                minxTREBRequired: 25000,
                allocation: "$2,500-$10,000",
                poolAccess: "All pools + Captain exclusive",
                guaranteedAllocation: true,
                requirements: {
                    xTREBStaked: 25000,
                    stakingDuration: "90+ days",
                    tradingVolume: "$150,000+",
                    additionalRequirements: ["Active governance", "10+ referrals", "Community contributions"]
                },
                benefits: [
                    "🚀 Maximum allocation access",
                    "🎯 Private pre-sale rounds",
                    "💰 Token vesting bonuses",
                    "🔮 Project due diligence reports",
                    "👑 Elvis private consultation"
                ],
                cooldown: "Instant access",
                feeDiscount: "20%"
            },
            {
                tier: "👑 Colonel",
                minxTREBRequired: 50000,
                allocation: "$10,000-$50,000",
                poolAccess: "All pools + Colonel ultra-exclusive",
                guaranteedAllocation: true,
                requirements: {
                    xTREBStaked: 50000,
                    stakingDuration: "180+ days",
                    tradingVolume: "$500,000+",
                    additionalRequirements: ["DAO member", "25+ referrals", "Thought leadership"]
                },
                benefits: [
                    "💎 Whale-tier allocations",
                    "🎪 Project advisory opportunities",
                    "🔥 Token launch partnerships",
                    "📈 Custom investment strategies",
                    "🎸 Elvis personal guidance",
                    "🏆 Annual Treble conference VIP access"
                ],
                cooldown: "Instant access + priority",
                feeDiscount: "25%"
            }
        ];

        // Determine user's eligible tiers
        const eligibleTiers = allTiers.filter(tier => {
            const meetsStaking = userStakingData.xTrebStaked >= tier.minxTREBRequired;
            const meetsDuration = userStakingData.stakingDuration >= parseInt(tier.requirements.stakingDuration);
            const meetsVolume = userStakingData.totalTradingVolume >= parseInt(tier.requirements.tradingVolume.replace(/[$,]/g, ''));
            
            // Check additional requirements
            let meetsAdditional = true;
            if (tier.requirements.additionalRequirements.includes("Governance participation") && !userStakingData.governanceParticipation) {
                meetsAdditional = false;
            }
            if (tier.requirements.additionalRequirements.some(req => req.includes("referrals"))) {
                const requiredReferrals = parseInt(tier.requirements.additionalRequirements.find(req => req.includes("referrals"))?.match(/\d+/)?.[0] || '0');
                if (userStakingData.referralsCompleted < requiredReferrals) {
                    meetsAdditional = false;
                }
            }
            
            return meetsStaking && meetsDuration && meetsVolume && meetsAdditional;
        });

        // Get user's current highest tier
        const currentTier = eligibleTiers.length > 0 ? eligibleTiers[eligibleTiers.length - 1] : null;

        // Get next tier to unlock
        const nextTier = allTiers.find(tier => !eligibleTiers.includes(tier));

        const launchpadData = {
            userId,
            currentStatus: {
                tier: currentTier ? currentTier.tier : "No tier unlocked",
                maxAllocation: currentTier ? currentTier.allocation : "$0",
                poolAccess: currentTier ? currentTier.poolAccess : "None",
                feeDiscount: currentTier ? currentTier.feeDiscount : "0%"
            },
            userStats: userStakingData,
            eligibleTiers,
            nextTierToUnlock: nextTier ? {
                ...nextTier,
                progressToUnlock: {
                    xTREBNeeded: Math.max(0, nextTier.minxTREBRequired - userStakingData.xTrebStaked),
                    daysNeeded: Math.max(0, parseInt(nextTier.requirements.stakingDuration) - userStakingData.stakingDuration),
                    volumeNeeded: Math.max(0, parseInt(nextTier.requirements.tradingVolume.replace(/[$,]/g, '')) - userStakingData.totalTradingVolume),
                    missingRequirements: nextTier.requirements.additionalRequirements.filter(req => {
                        if (req.includes("Governance") && !userStakingData.governanceParticipation) return true;
                        if (req.includes("referrals")) {
                            const requiredReferrals = parseInt(req.match(/\d+/)?.[0] || '0');
                            return userStakingData.referralsCompleted < requiredReferrals;
                        }
                        return false;
                    })
                }
            } : null,
            allTiers,
            activeIDOs: [
                {
                    project: "🚀 RocketDeFi",
                    description: "Next-gen yield farming protocol",
                    totalRaise: "$2.5M",
                    price: "$0.15",
                    startDate: "2025-01-20T10:00:00Z",
                    eligibleTiers: ["🥈 Scout", "🏅 Sergeant", "⭐ Captain", "👑 Colonel"]
                },
                {
                    project: "🌟 StarVault",
                    description: "Cross-chain asset management",
                    totalRaise: "$5.0M", 
                    price: "$0.08",
                    startDate: "2025-01-25T14:00:00Z",
                    eligibleTiers: ["🏅 Sergeant", "⭐ Captain", "👑 Colonel"]
                }
            ],
            tips: [
                "🎸 Stake more xTREB to unlock higher tiers, baby!",
                "🎯 Participate in governance to meet requirements",
                "💰 Refer friends to boost your tier status",
                "📈 Increase trading volume for better allocations",
                "🚀 Higher tiers get better pricing and guarantees"
            ]
        };

        console.log(`🎸 Elvis: Fetched launchpad tiers for ${userId} - Current tier: ${currentTier?.tier || 'None'} - Blast off, baby!`);

        return NextResponse.json({
            launchpadTiers: eligibleTiers,
            success: true,
            message: `🎸 Blast off with Treble Starter! You're eligible for ${eligibleTiers.length} tier(s) - ${currentTier ? `Current: ${currentTier.tier}` : 'Stake more xTREB to unlock tiers'}, baby!`,
            details: launchpadData
        });

    } catch (error) {
        console.error('Error in get-launchpad-tiers:', error);
        return NextResponse.json(
            { error: 'Failed to fetch launchpad tiers' },
            { status: 500 }
        );
    }
} 