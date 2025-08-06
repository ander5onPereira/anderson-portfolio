import { Link } from '@tanstack/react-router';
import { useActionTranslate } from '../hooks/useActionTranslate';
import { SectionTitle } from './sobre/sectionTitle';
import { motion } from 'framer-motion';
const projectList = [
  {
    title: 'Auto-Car Reparos Automotivos',
    descKey: 'autoCarDesc',
    href:'https://autocarreparos.com.br/'
  },
  {
    title: 'NLW Unite',
    descKey: 'nlw_unite',
    href:'https://ander5onpereira.github.io/nlw_unite/'
  },
  {
    title: 'NLW Expert',
    descKey: 'nlw_expert',
    href:'https://ander5onpereira.github.io/nlw-expert/'
  },
  {
    title: 'Arp Seo (NPM)',
    descKey: 'arp_seo',
    href:'https://www.npmjs.com/package/arp-seo'
  },
  {
    title: 'List-tire',
    descKey: 'list_tire',
    href:'https://github.com/ander5onPereira/list-tire'
  },
];
export default function Projetos() {
  const { translate } = useActionTranslate();
  return (
    <section className='max-w-4xl mx-auto px-6 py-16'>
      <SectionTitle text={translate('projectsTitle')} />

      <motion.div
        className='grid sm:grid-cols-2 gap-6 text-zinc-200 mt-8'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {projectList.map((project) => (
          <Link key={project.title} to={project.href} target='_blank'>
          <motion.div
            
            className='bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 border border-zinc-800'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className='text-xl font-bold mb-2 text-white'>
              {project.title}
            </h3>
            <p className='text-sm text-zinc-300'>
              {translate(project.descKey)}
            </p>
          </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className='mt-8 text-right'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          href='https://github.com/ander5onPereira'
          target='_blank'
          className='text-violet-400 underline'
        >
          {translate('seeMore')}
        </a>
      </motion.div>
    </section>
  );
}
