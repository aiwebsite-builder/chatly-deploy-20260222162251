import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-[#0A0A0A] text-neutral-200 min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        {/* Add more sections here as your landing page grows */}
      </main>
      <Footer />
    </div>
  );
}