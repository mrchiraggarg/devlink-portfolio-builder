import React from 'react';
import { PortfolioData, ThemeType } from '../types';
import { CardTheme } from './themes/CardTheme';
import { TerminalTheme } from './themes/TerminalTheme';
import { MinimalTheme } from './themes/MinimalTheme';

interface PortfolioPreviewProps {
  data: PortfolioData;
  theme: ThemeType;
}

export const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ data, theme }) => {
  const renderTheme = () => {
    switch (theme) {
      case 'card':
        return <CardTheme data={data} />;
      case 'terminal':
        return <TerminalTheme data={data} />;
      case 'minimal':
        return <MinimalTheme data={data} />;
      default:
        return <CardTheme data={data} />;
    }
  };

  return (
    <div className="w-full">
      {renderTheme()}
    </div>
  );
};