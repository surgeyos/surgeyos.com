import React from 'react';
import { ArrowRight, Brain, Code, Book, ShoppingCart, Cpu, Monitor, Heart, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';


const LandingPage = () => {
  const projects = [
    {
      title: "Surgical Robotics",
      icon: <Cpu className="w-6 h-6" />,
      description: "Open-source robotic systems for minimally invasive surgery"
    },
    {
      title: "Medical VR Simulation",
      icon: <Monitor className="w-6 h-6" />,
      description: "Virtual reality platforms for medical training and simulation"
    },
    {
      title: "First Aid Robotics",
      icon: <Heart className="w-6 h-6" />,
      description: "Humanoid robots for first aid training and demonstrations"
    },
    {
      title: "Medical 3D Printing",
      icon: <Printer className="w-6 h-6" />,
      description: "Advanced 3D printing solutions for medical applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
          {/* Animated circles */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse" />
          <div className="absolute top-40 right-40 w-96 h-96 bg-teal-200 rounded-full opacity-20 animate-pulse delay-700" />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-500" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo />  
            <div className="flex gap-6">
              <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
              <a href="#docs" className="text-gray-600 hover:text-blue-600">Documentation</a>
              <a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a>
              <a href="#shop" className="text-gray-600 hover:text-blue-600">Shop</a>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Open Source Medical Robotics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advancing healthcare through open-source robotics, VR simulation, and AI-powered medical technologies
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white bg-opacity-50 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-75 transition-all border border-gray-200">
                View on GitHub <Code className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-10">What is SurgeyOS?</h2>
          <p className="text-xl text-gray-700 leading-relaxed bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            SurgeyOS = <span className="font-bold">Surge</span>r<span className="font-bold">y</span> <span className="font-bold">O</span>perating <span className="font-bold">S</span>ystems
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Surgeyos is an open-source initiative unifying hardware, mechanical designs, electronics,
            software, and AI for medical robotics, VR simulation, and beyond. Our mission: make
            medical technology accessible, affordable, and innovative. Join this effort of transforming healthcare one open-source
            contribution at a time.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <Book className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">Comprehensive guides for all our open-source projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p className="text-gray-600">Latest updates, tutorials, and community stories</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <ShoppingCart className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shop</h3>
              <p className="text-gray-600">Hardware kits and components for your projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="w-full" 
               dangerouslySetInnerHTML={{
                 __html: `
                   <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                   <iframe 
                     class="airtable-embed airtable-dynamic-height" 
                     src="https://airtable.com/embed/appv5pBgAOPAwjw9s/shrGOibLmE5m5XQCr" 
                     frameborder="0" 
                     onmousewheel="" 
                     width="100%" 
                     height="875" 
                     style="background: transparent; border: 1px solid #ccc;"
                   ></iframe>
                 `
               }}
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;