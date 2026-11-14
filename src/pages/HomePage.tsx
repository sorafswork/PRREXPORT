import React from 'react';
import { HeroVideo } from '../components/HeroVideo';

interface HomePageProps {
  onNavigate: (page: 'home' | 'about' | 'product' | 'contact') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* CINEMATIC AI BACKGROUND VIDEO HERO SECTION */}
      <HeroVideo
        onExploreProducts={() => onNavigate('product')}
        onContactUs={() => onNavigate('contact')}
        onScrollDown={() => onNavigate('about')}
      />
    </div>
  );
};
