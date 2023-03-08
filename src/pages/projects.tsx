import Container from '@/components/Container';

export default function Projects() {
  const myProjects = [
    { name: 'StudyBuddy' },
    { name: 'COVID-19 Tracker' },
    { name: 'Royal Drip Check' },
    { name: 'CreativeFloww' },
    { name: 'iContribute' },
  ];

  return (
    <div className='pt-48'>
      <Container>
        <h1 className='text-6xl font-extrabold drop-shadow-xl'>Projects</h1>
        <div className='mt-14 flex gap-14'>
          {myProjects.map((project) => (
            <div>{project.name}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}
