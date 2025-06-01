
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Wallet, Menu, Bell, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  betCount: number;
  onBetSlipToggle: () => void;
}

export const Header = ({ betCount, onBetSlipToggle }: HeaderProps) => {
  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h1 className="text-2xl font-bold text-white">BetBase</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Sports
              </Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Live
              </Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Casino
              </Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                Promotions
              </Button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Wallet className="w-4 h-4 mr-2" />
              $1,250.00
            </Button>
            
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onBetSlipToggle}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Bet Slip
              {betCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {betCount}
                </Badge>
              )}
            </Button>

            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
