const About = () => {
  return (
    <>
      <section id="about" className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">About ChatZoom</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          ChatZoom is a simple, powerful chat platform built on modern tech like MongoDB,
          Express, Node.js, and Socket.IO.
        </p>
      </section>

      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Built with Developers in Mind
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          MERN-based chat application with JWT, Socket.IO, TailwindCSS.
        </p>
      </section>
    </>
  );
};

export default About;