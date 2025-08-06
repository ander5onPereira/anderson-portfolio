import { useActionTranslate } from '../hooks/useActionTranslate';

export function ActionTranslate() {
  const { changeLanguage, language } = useActionTranslate();
  return (
    <div className='text-right px-6 pt-4'>
      <button
        onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
        className='text-violet-400 underline'
      >
        {language === 'pt' ? 'English' : 'Português'}
      </button>
    </div>
  );
}
