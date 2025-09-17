import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface LanguageSelectionProps {
  onLanguageSelect: (language: string) => void;
}

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' }
];

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ onLanguageSelect }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    onLanguageSelect(language);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-vibrant p-4">
      <Card className="w-full max-w-md mx-auto animate-scale-in shadow-lg">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                {t('languageSelection.title')}
              </h2>
              <p className="text-muted-foreground font-body">
                {t('languageSelection.subtitle')}
              </p>
            </div>
            
            <div className="space-y-3">
              {languages.map((language) => (
                <Button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  variant="outline"
                  size="lg"
                  className="w-full h-16 text-lg font-body hover:bg-vibrant-turquoise hover:text-white hover:border-vibrant-turquoise transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-semibold">{language.name}</span>
                    <span className="text-sm font-display">{language.native}</span>
                  </div>
                </Button>
              ))}
            </div>
            
            <p className="text-xs text-muted-foreground font-body">
              {t('languageSelection.note')}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelection;