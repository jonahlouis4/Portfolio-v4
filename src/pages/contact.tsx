import { SOCIALS } from '@/constants';
import Container from '@/components/Container';

export default function Contact() {
  return (
    <div className='pt-48'>
      <Container>
        <h1 className='text-6xl font-extrabold drop-shadow-xl'>Contact</h1>
        <div className='mt-28 flex justify-between'>
          <div>
            <h1>Email</h1>
            <button>jonah_louis@outlook.com</button>
          </div>
          <div>
            <h1>Social Medias</h1>
            {SOCIALS.map((social) => (
              <button>{social.name}</button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
