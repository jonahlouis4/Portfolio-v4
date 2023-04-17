import { useGlobal } from "@/store/globals";

type ClickableProps = {
    children: any;
    className?: any
  };
  
  export default function Clickable(props: ClickableProps) {
    const { children } = props;
    const setMouse = useGlobal((state) => state.setMouse)

    const onEnter = () => setMouse('hover')
    const onLeave = () => setMouse('default')
  
    return (
      <span onMouseEnter={onEnter} onMouseLeave={onLeave} {...props}>
        {children}
      </span>
    );
  }
  