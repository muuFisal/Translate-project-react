import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import { ThemeProvider } from '@/context/ThemeContext';
import { initI18n } from '@/i18n';
import { applyThemeTokens } from '@/theme/tokens';
import './styles.css';

applyThemeTokens();
await initI18n();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
