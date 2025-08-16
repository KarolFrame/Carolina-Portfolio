import Navbar from "./Navbar";
import LeftBar from "./LeftBar";

function AppShell({ children }) {
    return (
        <>
          <Navbar />
          <LeftBar />
            <main className="mt-16 ml-16 p-4 flex flex-col justify-center h-[calc(100vh-4rem)] grid-background">
                {children}
            </main>
        </>
      );
}

export default AppShell;