import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pb-12">{children}</main>
    </>
  );
};

export default Layout;
