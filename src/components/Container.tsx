type ContainerProps = {
  children: any;
  narrow?: boolean;
};

export default function Container(props: ContainerProps) {
  const { children, narrow = true } = props;

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' >
      <div className={'mx-auto max-w-5xl 3xl:max-w-6xl' + (
        narrow ? ' max-w-5xl 3xl:max-w-6xl' : ' max-w-6xl 3xl:max-w-screen-2xl'
      )}>{children}</div>
    </div>
  );
}
