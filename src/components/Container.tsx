type funcProps = {
  children: any;
};

export default function Container(props: funcProps) {
  const { children } = props;

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' >
      <div className='mx-auto max-w-5xl 3xl:max-w-6xl'>{children}</div>
    </div>
  );
}
