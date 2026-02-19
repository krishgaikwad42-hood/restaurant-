import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WelcomeAnimation } from "../ui/WelcomeAnimation";

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <WelcomeAnimation />
            <Navbar />
            <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
                {children}
            </main>
            <Footer />
        </div>
    );
};
