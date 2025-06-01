
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, TrendingUp } from 'lucide-react';
import { Bet } from '@/pages/Index';

interface SportsGridProps {
  onAddToBetSlip: (bet: Omit<Bet, 'stake'>) => void;
}

export const SportsGrid = ({ onAddToBetSlip }: SportsGridProps) => {
  const matches = [
    {
      id: '1',
      sport: 'Football',
      home: 'Manchester United',
      away: 'Liverpool FC',
      time: '15:30',
      date: 'Today',
      homeOdds: 2.45,
      drawOdds: 3.20,
      awayOdds: 2.80,
      viewers: '45.2K',
      trending: true
    },
    {
      id: '2',
      sport: 'Basketball',
      home: 'Lakers',
      away: 'Warriors',
      time: '21:00',
      date: 'Today',
      homeOdds: 1.95,
      drawOdds: null,
      awayOdds: 1.85,
      viewers: '32.1K',
      trending: false
    },
    {
      id: '3',
      sport: 'Tennis',
      home: 'Novak Djokovic',
      away: 'Rafael Nadal',
      time: '14:00',
      date: 'Tomorrow',
      homeOdds: 1.75,
      drawOdds: null,
      awayOdds: 2.10,
      viewers: '28.5K',
      trending: true
    },
    {
      id: '4',
      sport: 'Football',
      home: 'Real Madrid',
      away: 'Barcelona',
      time: '20:45',
      date: 'Tomorrow',
      homeOdds: 2.20,
      drawOdds: 3.40,
      awayOdds: 3.10,
      viewers: '67.8K',
      trending: true
    }
  ];

  const handleBetClick = (matchId: string, selection: string, odds: number, match: string, sport: string) => {
    onAddToBetSlip({
      id: `${matchId}-${selection}`,
      match,
      selection,
      odds,
      sport
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Live Markets</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">All Sports</Button>
          <Button variant="ghost" size="sm">Football</Button>
          <Button variant="ghost" size="sm">Basketball</Button>
          <Button variant="ghost" size="sm">Tennis</Button>
        </div>
      </div>

      <div className="grid gap-4">
        {matches.map((match) => (
          <Card key={match.id} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="text-xs">
                    {match.sport}
                  </Badge>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {match.date} • {match.time}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {match.viewers}
                  </div>
                  {match.trending && (
                    <Badge variant="destructive" className="text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="text-white font-medium">{match.home}</div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleBetClick(
                      match.id, 
                      match.home, 
                      match.homeOdds, 
                      `${match.home} vs ${match.away}`,
                      match.sport
                    )}
                  >
                    {match.homeOdds}
                  </Button>
                </div>
                
                {match.drawOdds && (
                  <div className="space-y-2">
                    <div className="text-white font-medium">Draw</div>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleBetClick(
                        match.id, 
                        'Draw', 
                        match.drawOdds!, 
                        `${match.home} vs ${match.away}`,
                        match.sport
                      )}
                    >
                      {match.drawOdds}
                    </Button>
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="text-white font-medium">{match.away}</div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleBetClick(
                      match.id, 
                      match.away, 
                      match.awayOdds, 
                      `${match.home} vs ${match.away}`,
                      match.sport
                    )}
                  >
                    {match.awayOdds}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
