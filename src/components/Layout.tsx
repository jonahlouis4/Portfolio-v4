import Navbar from "./Navbar"

export default function Layout({children}: any) {
    return (
      <div className="h-full">
        <Navbar />
        <div>{children}</div>
      </div>
    );
  }
  