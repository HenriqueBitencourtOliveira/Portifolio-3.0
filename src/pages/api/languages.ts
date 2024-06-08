// pages/api/languages.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Request received at /api/languages');
  try {
    const response = await fetch('https://wakatime.com/share/@HenriqueBitencourt/9d54586a-32f1-4e1b-8a37-1c44e5845c24.json');
    const data = await response.json();
    const fiveLanguages = data.data.slice(0, 5);
    res.status(200).json(fiveLanguages);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
