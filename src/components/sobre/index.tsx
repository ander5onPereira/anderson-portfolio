import { useActionTranslate } from '../../hooks/useActionTranslate';
import { motion } from 'framer-motion';
import { SectionTitle } from './sectionTitle';
import { fadeUp } from '../../motion/motionVariants';
export default function Sobre() {
  const { translate } = useActionTranslate();
  return (
    <section className='max-w-4xl mx-auto px-6 py-16'>
      <SectionTitle text={translate('aboutTitle')} />

      <motion.p
        className='text-zinc-300 text-lg text-justify leading-relaxed space-y-4'
        variants={fadeUp(0.3)}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <span>
          Sou Desenvolvedor <strong>Front-End</strong> apaixonado por tecnologia
          e design de interfaces, com formação em{' '}
          <strong>Engenharia de Computação</strong> e com
          <strong> MBA em Gestão de Projeto de TI</strong>.{' '}
        </span>
        <span>
          Com mais de seis anos de experiência, já atuei em projetos nacionais e
          internacionais, sempre buscando soluções elegantes, eficientes e
          centradas no usuário.
        </span>

        <span>
          Tenho domínio de <strong>React.js</strong>, <strong>Next.js</strong>,{' '}
          <strong>JavaScrip</strong>,<strong> TypeScript</strong>, familharidade
          com <strong>Back-End</strong> em
          <strong> Node.Js</strong>, <strong>banco de dados</strong> e uma forte
          base em boas práticas como
          <strong> Clean Code</strong>, <strong>testes automatizados</strong> e{' '}
          <strong>CI/CD</strong>, atuação com{' '}
          <strong>metodologias ágeis Scrum e Kanban</strong>.
        </span>

        <span>
          Atualmente, lidero a <strong>ARPDev Desenvolvimento</strong>, onde
          ajudo empresas e startups a transformarem ideias em produtos digitais
          de impacto.
        </span>
      </motion.p>
    </section>
  );
}
