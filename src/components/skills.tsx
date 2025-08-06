import { useActionTranslate } from '../hooks/useActionTranslate';

import { motion } from 'framer-motion';
import { SectionTitle } from './sobre/sectionTitle';
import { Link } from '@tanstack/react-router';
const docsLinks = [
  {
    name: 'React.js',
    link: 'https://reactjs.org/docs/getting-started.html',
    icon: 'FaReact',
  },
  {
    name: 'Next.js',
    link: 'https://nextjs.org/docs',
    icon: 'SiNextdotjs',
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/docs/',
    icon: 'SiTypescript',
  },
  {
    name: 'JavaScript (ES6+)',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: 'SiJavascript',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/docs',
    icon: 'SiTailwindcss',
  },
  {
    name: 'SASS / SCSS',
    link: 'https://sass-lang.com/documentation/',
    icon: 'SiSass',
  },
  {
    name: 'Node.js',
    link: 'https://nodejs.org/en/docs',
    icon: 'FaNodeJs',
  },
  {
    name: 'Git / GitHub',
    link: 'https://git-scm.com/doc',
    icon: 'FaGithub',
  },
  {
    name: 'CI/CD',
    link: 'https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd',
    icon: 'SiCircleci',
  },
  {
    name: 'Automated Tests',
    link: 'https://testingjavascript.com/',
    icon: 'SiTestinglibrary',
  },
  {
    name: 'Figma',
    link: 'https://help.figma.com/hc/en-us',
    icon: 'FaFigma',
  },
  {
    name: 'REST APIs',
    link: 'https://restfulapi.net/',
    icon: 'FaNetworkWired',
  },
];
export default function Skills() {
  const { translate } = useActionTranslate();
  return (
    <section className='relative py-14 px-4 md:px-0 bg-zinc-950 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_80%)]'>
      <div className='absolute right-0 top-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(197,70,255,0.2)_0%,_transparent_70%)] transform translate-x-1/2 -translate-y-1/2 blur-2xl' />

      <div className='max-w-4xl mx-auto'>
        <SectionTitle text={translate('skillsTitle')} />

        <motion.ul
          className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-zinc-200 mt-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {docsLinks.map((tech) => (
            <Link to={tech.link} key={tech.name} target='_blank'>
              <motion.li
                className='bg-zinc-800 py-2 px-4 rounded text-center shadow-md hover:shadow-violet-950 hover:bg-zinc-800/70 hover:scale-105 transition transform'
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {tech.name}
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
