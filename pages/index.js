import React from 'react';
import { ArrowRight, Brain, Code, Book, ShoppingCart, Cpu, Monitor, Heart, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import { Image } from 'next/image';


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
    // {
    //   title: "Medical 3D Printing",
    //   icon: <Printer className="w-6 h-6" />,
    //   description: "Advanced 3D printing solutions for medical applications"
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50">
          <div className="hero-aurora absolute -inset-24 opacity-60" />
          <motion.div
            className="absolute -top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-cyan-300/45 blur-3xl"
            animate={{
              x: [0, 90, -30, 0],
              y: [0, 60, 110, 0],
              scale: [1, 1.18, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-40 top-12 h-[34rem] w-[34rem] rounded-full bg-blue-300/40 blur-3xl"
            animate={{
              x: [0, -120, -10, 0],
              y: [0, 90, 20, 0],
              scale: [1, 0.9, 1.12, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-44 left-1/3 h-[24rem] w-[24rem] rounded-full bg-teal-300/45 blur-3xl"
            animate={{
              x: [0, -70, 45, 0],
              y: [0, -90, -20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-y-0 -left-1/3 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-2xl"
            animate={{ x: ["0%", "240%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <div
            className="hero-grid absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)",
              backgroundSize: "38px 38px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/15 to-white/60" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo />  
            <div className="flex gap-6">
              <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
              <a href="https://surgeyos.github.io/surgeyos-ros2-ws/#/" className="text-gray-600 hover:text-blue-600">Documentation</a>
              {/* <a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a>
              <a href="#shop" className="text-gray-600 hover:text-blue-600">Shop</a> */}
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
          <div className="text-center w-full py-16 sm:py-20">
            <h1 className="text-9xl font-bold text-gray-700 mb-6">
              SurgeyOS
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advancing healthcare through open-source robotics, VR simulation, and AI-powered medical technologies
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl" onClick={() => window.location.href = 'https://surgeyos.github.io/surgeyos-ros2-ws/#/'}>
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white bg-opacity-50 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-75 transition-all border border-gray-200" onClick={() => window.open('https://github.com/surgeyos/surgeyos-ros2-ws', '_blank')}> 
                View on GitHub <Code className="w-4 h-4"/>
              </button>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .hero-aurora {
          background: conic-gradient(
            from 0deg,
            rgba(56, 189, 248, 0.35),
            rgba(45, 212, 191, 0.28),
            rgba(59, 130, 246, 0.32),
            rgba(16, 185, 129, 0.3),
            rgba(56, 189, 248, 0.35)
          );
          filter: blur(80px);
          animation: auroraSpin 18s linear infinite;
        }

        .hero-grid {
          animation: gridShift 10s linear infinite;
        }

        @keyframes auroraSpin {
          from {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.08);
          }
          to {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes gridShift {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 38px 38px;
          }
        }
      `}</style>

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
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            SurgeyOS aims to be a more accessible and inexpensive tool to researchers, medical students and doctors. Typically, Surgery Robots are very expensive and there are many institutions that can’t afford them. SurgeyOS is an open source platform and thus any university can afford to build one and conduct research and help in understanding, improving and learning more about Surgery Robotics. 
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <a href="https://surgeyos.github.io/surgeyos-ros2-ws/#/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <Book className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SurgeyOS ROS2 Workspace</h3>
              <p className="text-gray-600">Comprehensive guides for all our open-source projects</p>
            </a>
            {/* <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blog</h3>
              <p className="text-gray-600">Latest updates, tutorials, and community stories</p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="surgeyos-platform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">SurgeyOS Platform v3</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/images/v3-simple-gantry.png"
                alt="v3-simple-gantry"
                className="w-full rounded-xl shadow-md"
              />
              <img
                src="/images/mounting-detection.png"
                alt="v3-simple-gantry"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">SurgeyOS Platform v3 with Double Gantry</h2>
            <img
              src="/images/v3-double-gantry.png"
              alt="v3-double-gantry"
              className="mx-auto mb-6 rounded-xl" 
              width={"50%"}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">Microrobotic capsule prototype</h2>
            <img 
              src="/images/micro-robotic-capsule.png" 
              alt="micro-robotic-capsule" 
              className="mx-auto mb-6 rounded-xl" 
              width={"50%"}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">Custom medical robotic arm of 7 degrees of freedom</h2>
            <img 
              src="/images/custom-7dof-medical-robotic-arm.png" 
              alt="custom-7dof-medical-robotic-arm" 
              className="mx-auto mb-6 rounded-xl" 
              width={"50%"}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">Head immobilizers</h2>
            <img 
              src="/images/head-immobilizers.png" 
              alt="head-immobilizers" 
              className="mx-auto mb-6 rounded-xl" 
              width={"50%"}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">Laparoscopic tools testbed mounting-dock</h2>
            <img 
              src="/images/laparoscopic-tools-testbe-mounting-dock.png" 
              alt="laparoscopic-tools-testbe-mounting-dock" 
              className="mx-auto mb-6 rounded-xl" 
              width={"50%"}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">Capstan drive prototype</h2>
            <img 
              src="/images/capstan-drive-prototype.png" 
              alt="capstan-drive-prototype" 
              className="mx-auto mb-6 rounded-xl" 
              width={"50%"}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">Surgeyos prototype</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <img
                src="/images/IMG_2678.jpeg"
                alt="surgoys-prototype-1"
                className="w-full rounded-xl shadow-md"
              />
              <img
                src="/images/IMG_2680.jpeg"
                alt="surgoys-prototype-2"
                className="w-full rounded-xl shadow-md"
              />
            </div>
            <img
              src="/images/IMG_2681.jpeg"
              alt="surgoys-prototype-3"
              className="mx-auto w-full md:w-1/2 rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-center mb-10">SurgeyOS Virtual Reality</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <img
                src="/images/33e416f83a0b417d8ddcfbadafddf971.JPG"
                alt="surgoys-vr-1"
                className="w-full rounded-xl shadow-md"
              />
              <img
                src="/images/bed73d54cb9046c5b248498cf026eab7.JPG"
                alt="surgoys-vr-2"
                className="w-full rounded-xl shadow-md"
              />
            </div>
            <img
              src="/images/d6a932d2cbcd4d05b9ee05457997abdc.JPG"
              alt="surgoys-vr-3"
              className="mx-auto w-full md:w-1/2 rounded-xl shadow-md"
            />
          </motion.div>
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
