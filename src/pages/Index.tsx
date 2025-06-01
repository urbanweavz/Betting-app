
import { useState } from 'react';
import { Header } from '@/components/Header';
import { SportsGrid } from '@/components/SportsGrid';
import { BetSlip } from '@/components/BetSlip';
import { LiveOdds } from '@/components/LiveOdds';
import { StatsOverview } from '@/components/StatsOverview';

export interface Bet {
  id: string;
  match: string;
  selection: string;
  odds: number;
  stake: number;
  sport: string;
}

const Index = () => {
  const [selectedBets, setSelectedBets] = useState<Bet[]>([]);
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(false);

  const addToBetSlip = (bet: Omit<Bet, 'stake'>) => {
    const newBet: Bet = { ...bet, stake: 10 };
    setSelectedBets(prev => {
      const existing = prev.find(b => b.id === bet.id);
      if (existing) {
        return prev;
      }
      return [...prev, newBet];
    });
    setIsBetSlipOpen(true);
  };

  const removeBet = (betId: string) => {
    setSelectedBets(prev => prev.filter(bet => bet.id !== betId));
  };

  const updateStake = (betId: string, stake: number) => {
    setSelectedBets(prev =>
      prev.map(bet => bet.id === betId ? { ...bet, stake } : bet)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header 
        betCount={selectedBets.length}
        onBetSlipToggle={() => setIsBetSlipOpen(!isBetSlipOpen)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <StatsOverview />
            <SportsGrid onAddToBetSlip={addToBetSlip} />
          </div>
          
          <div className="space-y-6">
            <LiveOdds />
            {isBetSlipOpen && (
              <BetSlip
                bets={selectedBets}
                onRemoveBet={removeBet}
                onUpdateStake={updateStake}
                onClose={() => setIsBetSlipOpen(false)}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
