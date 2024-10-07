// src/Home.tsx
import Navbar from "../navbar/Navbar"; // Ensure the path is correct

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-4 mx-auto max-w-screen-xl px-4">
        <h1 className="text-2xl font-bold">Home</h1>
        {/* Add more content here as needed */}
      </main>
    </div>
  );
};

export default Home;
