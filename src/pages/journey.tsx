import Container from '@/components/Container';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/constants';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import thumb_ottawa from '../assets/gallery/thumb_ottawa.jpg';
import thumb_coimbatore from '../assets/gallery/thumb_coimbatore.jpg';
import thumb_amritsar from '../assets/gallery/thumb_amritsar.jpg';
import thumb_paris from '../assets/gallery/thumb_paris.jpg';

// ========= Section Header component =========

type SectionHeaderProps = {
  title: string;
  ptLarge?: boolean;
};

const SectionHeader = ({ title, ptLarge }: SectionHeaderProps) => (
  <motion.h1
    variants={DF_PAGE_ITEM_VARIANT}
    className={
      'text-center font-extrabold text-4xl text-gray-900 dark:text-gray-300 drop-shadow-xl' +
      (ptLarge ? ' pt-56 pb-48' : ' pt-32 pb-48')
    }
  >
    {title}
  </motion.h1>
);

// ========= Experience Info component =========

type ExperienceInfoProps = {
  startDate: string;
  endDate: string;
  company: string;
  description: string;
  ptNone?: boolean;
  pbNone?: boolean;
};

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
      'grid md:grid-cols-2 items-center gap-y-4 md:gap-y-0' +
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

// ========= City Box component =========
type CityBoxProps = {
  flagIcon: string;
  country: string;
  city: string;
  image: StaticImageData;
};

const CityBox = ({ flagIcon, country, city, image }: CityBoxProps) => (
  <div className='flex flex-col md:flex-row md:justify-between gap-y-8 md:gap-y-0 items-center rounded-3xl drop-shadow-2xl border-2 border-gray-200 dark:border-zinc-700 bg-gradient-to-bl from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800'>
    <div className='w-full text-center row-span-1 pb-8 md:pb-0 order-2 md:order-1'>
      <span
        className={`fi fi-${flagIcon} w-12 h-12 bg-cover rounded-3xl drop-shadow-2xl`}
      ></span>
      <h1 className='text-5xl font-extrabold dark:text-gray-300 mt-4'>
        <span className='block'>{city}, </span>
        <span>{country}</span>
      </h1>
    </div>

    <button className='group relative md:w-[100em] md:h-[26em] 3xl:h-[32em] order-1 md:order-2'>
      <div className='bg-black/50 rounded-tl-3xl rounded-tr-3xl md:rounded-tl-none md:rounded-br-3xl opacity-0 group-hover:opacity-100 absolute z-40 top-0 bottom-0 right-0 left-0 flex justify-center items-center transition duration-300'>
        <div className='w-32 h-32 p-4 border-2 border-gray-100 rounded-full scale-0 group-hover:scale-105 flex items-center justify-center transition duration-300'>
          <span className='text-3xl font-extrabold text-gray-100 '>View</span>
        </div>
      </div>
      <Image
        src={image}
        alt='canada-ottawa-thumbnail'
        className='bg-cover w-full h-full rounded-tl-3xl rounded-tr-3xl md:rounded-tl-none md:rounded-br-3xl'
      />
    </button>
  </div>
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
          <SectionHeader title="What I've been up to lately 👋" />

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
          <SectionHeader title='Some of my adventures captured  🌏' ptLarge />

          <div className='flex flex-col gap-y-64'>
            {/* City #1 */}
            <CityBox
              flagIcon='ca'
              city='Ottawa'
              country='Canada'
              image={thumb_ottawa}
            />
            {/* City #2 */}
            <CityBox
              flagIcon='in'
              city='Coimbatore'
              country='India'
              image={thumb_coimbatore}
            />
            {/* City #3 */}
            <CityBox
              flagIcon='in'
              city='Amritsar'
              country='India'
              image={thumb_amritsar}
            />
            {/* City #3 */}
            <CityBox
              flagIcon='fr'
              city='Paris'
              country='France'
              image={thumb_paris}
            />
          </div>
        </>
      </Container>
    </motion.div>
  );
}
