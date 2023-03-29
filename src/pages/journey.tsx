import Container from '@/components/Container';
import ImageSlideModal from '@/components/ImageSlideModal';
import { DF_PAGE_ITEM_VARIANT, DF_WRAPPER_VARIANT } from '@/data/variantData';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { ReactElement, useState } from 'react';
import thumb_amritsar from '../assets/gallery/thumb_amritsar.jpg';
import thumb_coimbatore from '../assets/gallery/thumb_coimbatore.jpg';
import thumb_ottawa from '../assets/gallery/thumb_ottawa.jpg';
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

// ========= Description Link component =========

type DescLink = {
  href: string;
  text: string;
};

const DescLink = ({ href, text }: DescLink) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    className='underline hover:text-gray-700 dark:hover:text-gray-400 transition-color duration-300'
  >
    {text}
  </a>
);

// ========= Experience Info component =========

type ExperienceInfoProps = {
  startDate: string;
  endDate: string;
  company: string;
  link: string;
  description: ReactElement<any, any>;
  ptNone?: boolean;
  pbNone?: boolean;
};

const ExperienceInfo = ({
  startDate,
  endDate,
  company,
  link,
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
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='text-4xl font-extrabold text-gray-900 dark:text-gray-200 hover:underline hover:text-gray-700 dark:hover:text-gray-400 transition duration-300'
      >
        {company}
      </a>
    </div>
    <motion.div
      variants={DF_PAGE_ITEM_VARIANT}
      className='text-2xl text-gray-900 dark:text-gray-300'
    >
      {description}
    </motion.div>
  </motion.div>
);

// ========= City Box component =========
type CityBoxProps = {
  flagIcon: string;
  country: string;
  city: string;
  image: StaticImageData;
  setSelectedCity: (city: string) => void;
};

const CityBox = ({
  flagIcon,
  country,
  city,
  image,
  setSelectedCity,
}: CityBoxProps) => (
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

    <button
      className='group relative md:w-[100em] md:h-[26em] 3xl:h-[32em] order-1 md:order-2'
      onClick={() => setSelectedCity(city.toLocaleLowerCase())}
    >
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
  const [selectedCity, setSelectedCity] = useState<string | null>('');

  return (
    <motion.div
      variants={DF_WRAPPER_VARIANT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='pt-48 pb-16'
    >
      <Container>
        <motion.h1
          variants={DF_PAGE_ITEM_VARIANT}
          className='text-6xl dark:text-gray-200 text-gray-900 font-extrabold text-center sm:text-left drop-shadow-xl'
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
            link='https://isha.sadhguru.org/us/en'
            description={
              <p>
                A non-profit organization with over 10 million volunteers who
                offer classical yoga to the World. I have worked on multiple
                projects, such as developing a gift card system for their{' '}
                <DescLink
                  href='https://www.ishalife.com/ca/'
                  text='isha life store'
                />
                , an admin portal to host live{' '}
                <DescLink
                  href='https://isha.sadhguru.org/yoga/yoga-programs/'
                  text='yoga programs'
                />
                , and maintaining the main{' '}
                <DescLink
                  href='https://arpanam.sadhguru.org/'
                  text='Linga Bhairavi website'
                />
                . Currently, I am maintaining the{' '}
                <DescLink
                  href='https://isha.sadhguru.org/us/en/center/isha-institute-inner-sciences-usa'
                  text='Isha Institute of Inner-Sciences'
                />{' '}
                and the{' '}
                <DescLink
                  href='https://isha.sadhguru.org/us/en/center/consecrated-spaces/adiyogi-abode-of-yoga#:~:text=The%20Abode%20of%20Yoga%20is,knowledge%2C%20philosophy%2C%20or%20technique.'
                  text='Adiyogi Abode of Yoga'
                />{' '}
                websites.
              </p>
            }
            ptNone
          />
          {/* Experience 2 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='June 2022'
            company='NetFore Systems'
            link='https://netfore.com/'
            description={
              <p>
                A full-service custom software development firm. I developed and
                maintained multiple IVA's (intelligent virtual assistant) using{' '}
                <DescLink
                  href='https://www.five9.com/products/capabilities/intelligent-virtual-agent'
                  text='Inference Solutions'
                />{' '}
                and{' '}
                <DescLink
                  href='https://cloud.google.com/dialogflow'
                  text='Google Dialogflow'
                />
                . I was primarly in charge of the IVA for{' '}
                <DescLink
                  href='https://www.arkansasbluecross.com/'
                  text='Arkansas BlueCross BlueShield'
                />{' '}
                and{' '}
                <DescLink
                  href='https://www.enterprisebanking.com/'
                  text='Enterprise Bank'
                />
                .
              </p>
            }
          />
          {/* Experience 3 */}
          <ExperienceInfo
            startDate='June 2021'
            endDate='June 2022'
            company='iContribute'
            link='https://icontribute.community/#/'
            description={
              <p>
                A non-profit organization who help connect volunteer
                opportunities for both students and organizations. During my
                time at iContribute, I lead a team of developers to rehaul the
                look and feel of the mobile application. These changes are now
                available on both{' '}
                <DescLink
                  href='https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4'
                  text='IOS'
                />{' '}
                and{' '}
                <DescLink
                  href='https://play.google.com/store/apps/details?id=com.icontribute'
                  text='Android'
                />
                .
              </p>
            }
            pbNone
          />
        </>
        <>
          <SectionHeader
            title='Glimpses of my wonderful adventures 🌏'
            ptLarge
          />

          <AnimatePresence>
            {selectedCity && (
              <ImageSlideModal
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
              />
            )}
          </AnimatePresence>
          <div className='flex flex-col gap-y-64'>
            {/* City #1 */}
            <CityBox
              flagIcon='ca'
              city='Ottawa'
              country='Canada'
              image={thumb_ottawa}
              setSelectedCity={setSelectedCity}
            />
            {/* City #2 */}
            <CityBox
              flagIcon='in'
              city='Coimbatore'
              country='India'
              image={thumb_coimbatore}
              setSelectedCity={setSelectedCity}
            />
            {/* City #3 */}
            <CityBox
              flagIcon='in'
              city='Amritsar'
              country='India'
              image={thumb_amritsar}
              setSelectedCity={setSelectedCity}
            />
            {/* City #3 */}
            <CityBox
              flagIcon='fr'
              city='Paris'
              country='France'
              image={thumb_paris}
              setSelectedCity={setSelectedCity}
            />
          </div>
        </>
      </Container>
    </motion.div>
  );
}
