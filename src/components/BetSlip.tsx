
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { X, Calculator, DollarSign } from 'lucide-react';
import { Bet } from '@/pages/Index';

interface BetSlipProps {
  bets: Bet[];
  onRemoveBet: (betId: string) => void;
  onUpdateStake: (betId: string, stake: number) => void;
  onClose: () => void;
}

export const BetSlip = ({ bets, onRemoveBet, onUpdateStake, onClose }: BetSlipProps) => {
  const totalStake = bets.reduce((sum, bet) => sum + bet.stake, 0);
  const totalReturn = bets.reduce((sum, bet) => sum + (bet.stake * bet.odds), 0);
  const totalProfit = totalReturn - totalStake;

  const placeBets = () => {
    // This will be connected to backend later
    console.log('Placing bets:', bets);
    alert('Bets placed successfully! (This will be connected to backend)');
    bets.forEach(bet => onRemoveBet(bet.id));
  };

  return (
    <Card className="bg-slate-800 border-slate-700 sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          Bet Slip ({bets.length})
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {bets.length === 0 ? (
          <div className="text-center text-slate-400 py-8">
            <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Your bet slip is empty</p>
            <p className="text-sm">Add selections to get started</p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {bets.map((bet) => (
                <div key={bet.id} className="bg-slate-700 p-3 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-1">
                        {bet.sport}
                      </Badge>
                      <div className="text-sm text-white font-medium">
                        {bet.match}
                      </div>
                      <div className="text-xs text-slate-300">
                        {bet.selection} @ {bet.odds}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onRemoveBet(bet.id)}
                      className="text-slate-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    <Input
                      type="number"
                      value={bet.stake}
                      onChange={(e) => onUpdateStake(bet.id, Number(e.target.value))}
                      className="bg-slate-600 border-slate-500 text-white"
                      min="1"
                    />
                  </div>
                  
                  <div className="mt-2 text-right">
                    <span className="text-sm text-slate-300">
                      Potential return: 
                    </span>
                    <span className="text-sm text-green-400 font-medium ml-1">
                      ${(bet.stake * bet.odds).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-600 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Total Stake:</span>
                <span className="text-white font-medium">${totalStake.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Total Return:</span>
                <span className="text-green-400 font-medium">${totalReturn.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Total Profit:</span>
                <span className="text-green-500 font-bold">${totalProfit.toFixed(2)}</span>
              </div>
            </div>

            <Button 
              className="w-full bg-green-600 hover:bg-green-700 font-medium"
              onClick={placeBets}
              disabled={bets.length === 0 || totalStake === 0}
            >
              Place Bet${totalStake > 0 ? ` - $${totalStake.toFixed(2)}` : ''}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};
