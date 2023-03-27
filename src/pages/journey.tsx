import Container from '@/components/Container';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/constants';
import { motion } from 'framer-motion';

// ========= Section Header component =========

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <motion.h1
    variants={DF_PAGE_ITEM_VARIANT}
    className='py-32 text-center font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-xl'
  >
    {title}
  </motion.h1>
);

type ExperienceInfoProps = {
  startDate: string;
  endDate: string;
  company: string;
  description: string;
  ptNone?: boolean;
  pbNone?: boolean;
};

// ========= Experience Info component =========

const ExperienceInfo = ({
  startDate,
  endDate,
  company,
  description,
  ptNone,
  pbNone,
}: ExperienceInfoProps) => (
  <motion.div
    variants={DF_PAGE_ITEM_VARIANT}
    className={
      'grid grid-cols-2 items-center' +
      (ptNone ? ' pt-0' : ' pt-32') +
      (pbNone ? ' pb-0' : ' pb-32')
    }
  >
    <div>
      <motion.h2
        variants={DF_PAGE_ITEM_VARIANT}
        className='text-md font-bold uppercase dark:text-gray-400'
      >
        {startDate} - {endDate}
      </motion.h2>
      <h1 className='text-4xl font-extrabold dark:text-gray-200'>{company}</h1>
    </div>
    <div>
      <motion.p
        variants={DF_PAGE_ITEM_VARIANT}
        className='text-2xl dark:text-gray-300'
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

// ========= Journey page =========

export default function Journey() {
  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 pb-16 dark:bg-main-dark bg-main-light'
    >
      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl dark:text-gray-200 text-gray-900 font-extrabold drop-shadow-xl'
        >
          Journey
        </motion.h1>
        <motion.div
          variants={DF_PAGE_ITEM_VARIANT}
          className='w-full border-2 border-gray-200 mt-8'
        />

        <>
          <SectionHeader title="What I've been up to lately." />

          {/* Experience 1 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='Present'
            company='isha Foundation'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!'
            ptNone
          />
          {/* Experience 2 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='June 2022'
            company='NetFore Systems'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!'
          />
          {/* Experience 3 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='June 2022'
            company='iContribute'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!'
            pbNone
          />
        </>
        <>
          <SectionHeader title="Some of my captured adventures." />
        </>
      </Container>
    </motion.div>
  );
}
