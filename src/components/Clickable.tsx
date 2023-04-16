import { useGlobal } from "@/store/globals";

type ClickableProps = {
    children: any;
  };
  
  export default function Clickable(props: ClickableProps) {
    const { children = true } = props;
    const setMouse = useGlobal((state) => state.setMouse)

    const onEnter = () => setMouse('hover')
    const onLeave = () => setMouse('default')
  
    return (
      <div onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {children}
      </div>
    );
  }
  