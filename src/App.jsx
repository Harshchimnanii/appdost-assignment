import React from "react";
import "animate.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
          AppDost
        </h1>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Features</li>
          <li className="hover:text-blue-600 cursor-pointer transition">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
        </ul>
        <button className="md:hidden bg-blue-600 text-white px-3 py-2 rounded shadow">
          ☰
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white px-6 animate__animated animate__fadeIn">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-md">
          Build Smarter. Grow Faster. 🚀
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
          Empowering your business with fast, beautiful, and scalable digital
          solutions. Experience innovation and creativity with AppDost.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 md:px-16 bg-gray-50 text-center animate__animated animate__fadeInUp">
        <h3 className="text-4xl font-bold mb-12 text-gray-800">
          Why Choose <span className="text-blue-600">AppDost?</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "⚡",
              title: "Fast Development",
              desc: "We use the latest tech to deliver efficient, scalable, and high-performing apps in record time.",
            },
            {
              icon: "🎨",
              title: "Creative Design",
              desc: "Every app we craft blends aesthetics with usability, creating stunning user experiences.",
            },
            {
              icon: "💡",
              title: "Reliable Support",
              desc: "We’re your long-term tech partners — always available to improve, upgrade, and support your ideas.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-8 md:px-16 text-center animate__animated animate__fadeIn">
        <h3 className="text-4xl font-bold mb-12 text-gray-800">
          What Our <span className="text-blue-600">Clients</span> Say 💬
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Aarav Mehta",
              feedback:
                "AppDost built our app faster than expected with excellent design quality. Their work exceeded our expectations!",
            },
            {
              name: "Priya Sharma",
              feedback:
                "I love the creativity and passion the AppDost team brings to every project. Highly professional and talented!",
            },
            {
              name: "Rahul Verma",
              feedback:
                "The team understands your business deeply and delivers exactly what you imagine — and even better!",
            },
          ].map((client, i) => (
            <div
              key={i}
              className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="italic text-gray-700 mb-4">“{client.feedback}”</p>
              <h4 className="font-bold text-blue-700">{client.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 text-center px-6 animate__animated animate__fadeInUp">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h3>
        <p className="text-lg mb-8 opacity-90">
          Let’s bring your idea to life. Partner with AppDost today.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-lg shadow hover:scale-105 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
        <p>© {new Date().getFullYear()} AppDost | Built with ❤️ by Harsh Chimnani</p>
      </footer>
    </div>
  );
};

export default App;
