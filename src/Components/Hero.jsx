import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-green-100 py-20 text-center">
      <h1 className="text-5xl font-bold text-green-800">
        Real-Time Chat Made Easy
      </h1>
      <p className="mt-4">Create rooms and chat instantly</p>

      <Link to="/login" className="bg-green-600 text-white px-6 py-2 mt-6 inline-block">
        Get Started
      </Link>
    </section>
  );
};

export default Hero;