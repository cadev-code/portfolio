import { Router } from '@/routes';
import { Header } from '@/components';
import { ThemeProvider } from '@/components/theme-provider';

export const App = () => {
  return (
    <ThemeProvider>
      <div className="w-full">
        <Header />
        <Router />
      </div>
    </ThemeProvider>
  );
};
