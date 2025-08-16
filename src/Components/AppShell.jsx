import Navbar from "./Navbar";
import LeftBar from "./LeftBar";

function AppShell({ children }) {
    return (
        <>
          <Navbar />
          <LeftBar />
            <main className="mt-16 ml-16 p-4">
                {children}
            </main>
        </>
      );
}

export default AppShell;