import { useMemo } from 'react';
import useStore from '@/store/uiStore';
import { getTranslation } from '@/lib/i18n';

export default function useTranslation() {
  const language = useStore((state) => state.language);

  const t = useMemo(() => {
    return (key) => getTranslation(language, key);
  }, [language]);

  return { t, language };
}
