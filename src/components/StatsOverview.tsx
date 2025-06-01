
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Trophy, Target } from 'lucide-react';

export const StatsOverview = () => {
  const stats = [
    {
      title: 'Total Winnings',
      value: '$2,847.50',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Win Rate',
      value: '68.4%',
      change: '+3.2%',
      trend: 'up',
      icon: Target,
      color: 'text-blue-400'
    },
    {
      title: 'Active Bets',
      value: '7',
      change: '+2',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-400'
    },
    {
      title: 'Achievements',
      value: '23',
      change: '+1',
      trend: 'up',
      icon: Trophy,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className={`text-sm ${stat.color}`}>
                  {stat.change} from last week
                </p>
              </div>
              <div className={`p-3 rounded-full bg-slate-700 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
