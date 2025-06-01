
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, TrendingUp, TrendingDown } from 'lucide-react';

export const LiveOdds = () => {
  const liveMatches = [
    {
      id: '1',
      sport: 'Football',
      match: 'Chelsea vs Arsenal',
      time: '67\'',
      score: '2-1',
      odds: {
        home: { current: 1.85, previous: 1.92, trend: 'down' },
        draw: { current: 3.60, previous: 3.40, trend: 'up' },
        away: { current: 4.20, previous: 3.95, trend: 'up' }
      }
    },
    {
      id: '2',
      sport: 'Basketball',
      match: 'Celtics vs Heat',
      time: 'Q3 8:45',
      score: '78-82',
      odds: {
        home: { current: 2.10, previous: 1.95, trend: 'up' },
        away: { current: 1.75, previous: 1.85, trend: 'down' }
      }
    },
    {
      id: '3',
      sport: 'Tennis',
      match: 'Federer vs Murray',
      time: 'Set 2',
      score: '6-4, 3-2',
      odds: {
        home: { current: 1.45, previous: 1.40, trend: 'up' },
        away: { current: 2.75, previous: 2.85, trend: 'down' }
      }
    }
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-3 h-3 text-green-400" />;
    if (trend === 'down') return <TrendingDown className="w-3 h-3 text-red-400" />;
    return null;
  };

  const getTrendColor = (trend: string) => {
    if (trend === 'up') return 'text-green-400';
    if (trend === 'down') return 'text-red-400';
    return 'text-white';
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-green-400" />
          Live Odds
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {liveMatches.map((match) => (
          <div key={match.id} className="bg-slate-700 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="destructive" className="text-xs animate-pulse">
                LIVE
              </Badge>
              <Badge variant="outline" className="text-xs">
                {match.sport}
              </Badge>
            </div>
            
            <div className="text-sm text-white font-medium mb-1">
              {match.match}
            </div>
            
            <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
              <span>{match.time}</span>
              <span className="font-mono">{match.score}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(match.odds).map(([key, odds]) => (
                <div key={key} className="text-center">
                  <div className="text-xs text-slate-400 capitalize mb-1">
                    {key === 'home' ? match.match.split(' vs ')[0].split(' ').slice(-1)[0] : 
                     key === 'away' ? match.match.split(' vs ')[1].split(' ')[0] : key}
                  </div>
                  <div className={`text-sm font-medium flex items-center justify-center ${getTrendColor(odds.trend)}`}>
                    {odds.current}
                    {getTrendIcon(odds.trend)}
                  </div>
                  <div className="text-xs text-slate-500">
                    was {odds.previous}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center">
          <span className="text-xs text-slate-400">Updates every 2-3 seconds</span>
        </div>
      </CardContent>
    </Card>
  );
};
