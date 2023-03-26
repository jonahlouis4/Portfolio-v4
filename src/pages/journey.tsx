import Container from '@/components/Container';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/constants';
import { motion } from 'framer-motion';

export default function Journey() {
  type ExperienceInfoProps = {
    startDate: string;
    endDate: string;
    company: string;
    description: string;
  };

  const ExperienceInfo = ({
    startDate,
    endDate,
    company,
    description,
  }: ExperienceInfoProps) => (
    <div className='grid grid-cols-2 items-center py-48'>
      <div>
        <h2 className='text-md font-bold uppercase'>
          {startDate} - {endDate}
        </h2>
        <h1 className='text-4xl font-extrabold '>{company}</h1>
      </div>
      <div>
        <p className='text-2xl'>{description}</p>
      </div>
    </div>
  );

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
          <h1 className='pt-48 text-center font-extrabold text-3xl'>
            What I've been up to lately.
          </h1>

          {/* Experience 1 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='June 2022'
            company='NetFore Systems'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!'
          />
          {/* Experience 2 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='June 2022'
            company='iContribute'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!'
          />
          {/* Experience 3 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='Present'
            company='isha Foundation'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas unde quibusdam vitae dolor nobis quo ut ex atque harum,
                ullam voluptatibus ipsum saepe dolorum? Consequatur voluptate
                doloremque accusamus deleniti molestiae!'
          />
        </>
      </Container>
    </motion.div>
  );
}
