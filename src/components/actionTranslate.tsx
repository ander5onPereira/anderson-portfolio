import { useActionTranslate } from '../hooks/useActionTranslate';

export function ActionTranslate() {
  const { changeLanguage, language } = useActionTranslate();
  const size = {
    pt: {
      width: 42,
      height: 24,
    },
    en: {
      width: 56,
      height: 28,
    },
  } as const;
  return (
    <div className='fixed top-0 z-30 right-0'>
      <div className='text-right px-6 pt-4'>
        <button
          onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
          className='text-violet-400 underline cursor-pointer hover:text-violet-500'
        >
          <img
            src={language === 'pt' ? '/flags/gb.svg' : '/flags/br.svg'}
            alt={language === 'pt' ? 'English' : 'Português'}
            style={size[language]}
          />
        </button>
      </div>
    </div>
  );
}
