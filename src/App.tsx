import AppRoutes from "./AppRoutes";
import Navbar from "./components/layouts/Navbar";

function App() {
  const links = [
    { label: "Arts", path: "/arts" },
    { label: "Writing", path: "/writing" },
    { label: "Contact me", path: "/contact-me" },
  ];

  return (
    <div>
      <Navbar links={links} />
      <AppRoutes />
    </div>
  );
}

export default App;
