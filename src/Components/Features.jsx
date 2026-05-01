const Features = () => {
  return (
    <section id="features" className="py-16 px-8 text-center bg-white">
      <h2 className="text-3xl font-semibold mb-8">Why ChatZoom?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Fast & Secure</h3>
          <p>Token-based login with end-to-end Socket communication.</p>
        </div>

        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Real-Time Chat</h3>
          <p>Send, receive & type instantly. No refresh needed.</p>
        </div>

        <div className="p-6 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Room Support</h3>
          <p>Create or join chat rooms with one-click invites.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;