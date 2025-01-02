import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute z-10 text-center"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Surgeyos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Open-source innovations for surgery robotics, medical simulation &amp; VR, AI, and more!
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
              View Projects
            </Link>
            <Link href="/docs" className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition">
              Documentation
            </Link>
          </div>
        </motion.div>
        {/* Background decorative shapes/animations can go here */}
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">What is Surgeyos?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Surgeyos is an open-source initiative unifying hardware, mechanical designs, electronics,
            software, and AI for medical robotics, VR simulation, and beyond. Our mission: make
            medical technology accessible, affordable, and innovative. Join a vibrant community
            of engineers, doctors, and tinkerers transforming healthcare one open-source
            contribution at a time.
          </p>
        </motion.div>
      </section>

      {/* Projects Highlights Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Medical Robotic Arm</h3>
              <p className="text-gray-700 mb-4">
                Open-source designs for a precise, affordable robotic arm for surgical assistance.
              </p>
              <Link href="/projects/robotic-arm" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">First Aid Humanoid</h3>
              <p className="text-gray-700 mb-4">
                A humanoid-based robot built on a skeleton model to help practice and perform first-aid.
              </p>
              <Link href="/projects/humanoid" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">VR Medical Simulation</h3>
              <p className="text-gray-700 mb-4">
                Dive into immersive training simulations for surgeries and complex procedures.
              </p>
              <Link href="/projects/vr-simulation" className="text-blue-600 font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
              See All Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Latest News &amp; Insights</h2>
          <p className="text-lg text-gray-700 mb-8">
            Stay up to date with the latest breakthroughs, community highlights, and educational resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Building a Surgical Robot in Your Garage</h3>
              <p className="text-gray-700 mb-4">
                A deep dive into the mechanical and electrical design of a prototype surgical robot.
              </p>
              <Link href="/blog/build-surgical-robot" className="text-blue-600 font-medium hover:underline">
                Read more →
              </Link>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">3D Printing for Medical Parts</h3>
              <p className="text-gray-700 mb-4">
                Learn about the newest materials and open-source designs for printing medical devices.
              </p>
              <Link href="/blog/3d-printing" className="text-blue-600 font-medium hover:underline">
                Read more →
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
              Visit the Blog
            </Link>
          </div>
        </motion.div>
      </section>

      {/* E-Shop CTA */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Surgeyos E-Shop</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover open-source hardware, essential components, and official Surgeyos merchandise.
          </p>
          <Link href="/shop" className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
            Explore the Store
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-100 py-8 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Surgeyos. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/docs" className="hover:underline">
            Documentation
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/shop" className="hover:underline">
            E-Shop
          </Link>
        </div>
      </footer>
    </div>
  );
}