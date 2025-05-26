import { NextResponse } from 'next/server';
import type { MetaTransaction } from "near-safe";
import { signRequestFor } from '@bitte-ai/agent-sdk';
import { parseEther } from 'viem';


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const to = searchParams.get('to');
    const amount = searchParams.get('amount');
    const chainId = searchParams.get('chainId');

    if (!to || !amount) {
      console.log(`to: ${to}\namount: ${amount}`);
      return NextResponse.json({ error: '"to" and "amount" are required parameters' }, { status: 400 });
    }

    // Default to Base network (8453) since we're focused on TREB/Trebleswap
    const networkChainId = chainId ? parseInt(chainId) : 8453;
    
    console.log(`🎸 Elvis: Creating EVM transaction on chain ${networkChainId} (${networkChainId === 8453 ? 'Base' : networkChainId === 1 ? 'Ethereum' : 'Other'})`);

    // Create EVM transaction object
    const transaction: MetaTransaction = {
      to: to,
      value: parseEther(amount.toString()).toString(), // remove decimals
      data: '0x',
    };
    
    const signRequestTransaction = signRequestFor({
      chainId: networkChainId,
      metaTransactions: [transaction]
    });

    return NextResponse.json({ 
      evmSignRequest: signRequestTransaction,
      chainInfo: {
        chainId: networkChainId,
        network: networkChainId === 8453 ? 'Base' : networkChainId === 1 ? 'Ethereum' : 'Other',
        isCorrectForTREB: networkChainId === 8453
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Error generating EVM transaction:', error);
    return NextResponse.json({ error: 'Failed to generate EVM transaction' }, { status: 500 });
  }
}
