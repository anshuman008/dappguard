import { NextRequest, NextResponse } from 'next/server';

// Define a type for the dApp object
type Dapp = {
  dappId: number;
  name: string;
  description: string;
  fullDescription: string;
  logo: string;
  link: string;
  website: string;
  chains: string[];
  categories: string[];
  socialLinks: {
    title: string;
    url: string;
    type: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  metrics: {
    transactions: number;
    transactionsPercentageChange: number;
    uaw: number;
    uawPercentageChange: number;
    volume: number;
    volumePercentageChange: number;
    balance: number;
    balancePercentageChange: number;
  };
};

export async function POST(request: NextRequest) {
  
  const { search } = await request.json();

  console.log(process.env.API_KEY);
  try {
    const response = await fetch(process.env.REQUEST_URL as string, {
      method: 'POST',
      headers: {
        'x-api-key': process.env.API_KEY as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ search }),
    });

    const data = await response.json();
    // console.log(data.result.result.results, 'this is the data');

    // Filter the dApps that are on Solana chain
    const solanaDapps = data.result.result.results.filter((dapp: Dapp) =>
      dapp.chains.includes('solana')
    );

    // console.log(solanaDapps, 'this is the data');

    return NextResponse.json({
      success: true,
      result: {
        ...data.result,
        results: solanaDapps, // Return only Solana dApps
      },
    });
  } catch (err) {
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
