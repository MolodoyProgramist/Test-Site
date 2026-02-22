import React, { useState } from 'react';

// Данные выносим наверх, чтобы не искать их в коде
const DATA = {
  courses: [
    { id: '01', title: 'Basics of photography', desc: 'Familiarize yourself with different types of cameras and learn the basics of composition.' },
    { id: '02', title: 'Landscape photography', desc: 'Learn how to choose the right angles and create depth in your images.' },
    { id: '03', title: 'Portrait photography', desc: 'Learn to choose the right lighting and reproduce expressions on faces.' }
  ],
  mentors: [
    { name: 'Emilia Smith', exp: '15 years', img: 'img/girl 1.jpg' },
    { name: 'Alex Lebedev', exp: '15 years', img: 'img/boy 1.jpg' },
    { name: 'Mia Dubrovska', exp: '20 years', img: 'img/girl 2.jpg' },
    { name: 'Eliot Kovalev', exp: '10 years', img: 'img/boy 2.jpg' }
  ]
};

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex justify-between items-center">
        <nav className="flex items-center gap-4 lg:gap-12 border border-zinc-800 rounded-full px-5 lg:px-8 py-3 bg-[#111]">
          <h2 className="text-lg md:text-xl font-bold tracking-tight">Focus.Frame</h2>
          <ul className="hidden md:flex gap-4 lg:gap-8 text-[10px] lg:text-xs uppercase tracking-widest text-zinc-400">
            {['About us', 'Our courses', 'Our mentors', 'Reviews', 'Contacts'].map(item => (
              <li key={item} className="hover:text-white cursor-pointer transition">{item}</li>
            ))}
          </ul>
        </nav>
        <button className="bg-white text-black px-6 lg:px-10 py-3 rounded-xl font-bold uppercase text-[10px] lg:text-xs hover:bg-zinc-200 transition">
          Sign up
        </button>
      </header>

      <main className="container mx-auto px-4 md:px-6">
        {/* HERO SECTION */}
        <section className="relative bg-[#1a1a1a] rounded-[30px] md:rounded-[40px] p-8 md:p-16 lg:p-20 overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col justify-center">
          <div className="max-w-xl lg:max-w-2xl z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] mb-6 md:mb-8">
              Discover the magic of <span className="text-[#b5a48b] italic">photography</span> in our school
            </h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed mb-8 md:mb-12">
              Our photography school offers an unforgettable journey, where you can learn the basics of composition and master technical skills.
            </p>
            <div className="flex flex-wrap items-center gap-8 lg:gap-12 mt-auto">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#1a1a1a] object-cover" src="img/girl 1 (1).jpg" alt="" />
                  <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#1a1a1a] object-cover" src="img/boy.jpg" alt="" />
                  <img className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#1a1a1a] object-cover" src="img/girl.jpg" alt="" />
                </div>
                <div className="text-[10px] uppercase tracking-tighter">
                  <p className="font-bold">Our happy</p>
                  <p className="text-zinc-500">students <span>→</span></p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b5a48b] flex items-center justify-center text-black">
                  <span className="text-lg">★</span>
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase">Reviews</p>
                  <p className="text-lg md:text-xl font-medium">+1500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full flex justify-end items-end pointer-events-none opacity-40 md:opacity-100">
            <img src="img/Rectangle 5.png" alt="Men" className="h-[80%] md:h-[90%] w-auto object-contain object-bottom pr-4 md:pr-10" />
          </div>
        </section>

        {/* COURSES SECTION */}
        <section className="py-12 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-medium">Our <span className="text-[#b5a48b] italic">Courses</span></h2>
            <p className="text-zinc-400 text-sm max-w-[500px]">At our photography school, we offer a variety of courses that cover all aspects of this fascinating art.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.courses.map(course => (
              <article key={course.id} className="bg-[#1a1a1a] p-8 md:p-10 rounded-[32px] min-h-[380px] md:min-h-[420px] flex flex-col justify-between border border-transparent hover:border-zinc-700 transition">
                <div className="flex justify-between items-start">
                  <span className="text-zinc-500 font-mono text-sm">{course.id}</span>
                  <button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition">↗</button>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">{course.title}</h3>
                  <p className="text-zinc-500 text-sm">{course.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* MENTORS SECTION */}
        <section className="py-12 md:py-24">
          <h2 className="text-4xl md:text-5xl font-medium mb-12 md:mb-20">Our <span className="text-[#b5a48b] italic">Mentors</span></h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {DATA.mentors.map((mentor, index) => (
              <article key={index} className="group text-center">
                <div className="w-full aspect-square mb-6 overflow-hidden rounded-full bg-zinc-800">
                  <img src={mentor.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt={mentor.name} />
                </div>
                <h3 className="text-lg md:text-xl font-medium">{mentor.name}</h3>
                <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-wider">{mentor.exp} exp</p>
              </article>
            ))}
          </div>
        </section>

        {/* SIGN UP FORM */}
        <section className="py-12 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 max-w-[500px]">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Sign <span className="text-[#b5a48b] italic">Up</span></h2>
              <form className="space-y-4">
                <input type="text" placeholder="Enter your name" className="w-full bg-transparent border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-[#b5a48b] outline-none transition" />
                <input type="email" placeholder="Enter your email" className="w-full bg-transparent border border-zinc-800 rounded-2xl px-6 py-4 text-sm focus:border-[#b5a48b] outline-none transition" />
                <textarea placeholder="Message" rows="4" className="w-full bg-transparent border border-zinc-800 rounded-3xl px-6 py-4 text-sm focus:border-[#b5a48b] outline-none transition resize-none"></textarea>
                <button className="w-full bg-white text-black font-bold py-5 rounded-2xl hover:bg-zinc-200 transition tracking-widest text-xs uppercase">Send</button>
              </form>
            </div>
            <aside className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative h-[400px] md:h-[500px]">
              <div className="absolute left-0 md:left-10 lg:left-0 bottom-10 w-[150px] md:w-[200px] h-[250px] md:h-[300px] rounded-full overflow-hidden border-[8px] md:border-[12px] border-[#0d0d0d] z-20 bg-[#b5a48b]">
                <img src="img/isabella-mendes-lRgkUlxJCkA-unsplash 1.png" className="w-full h-full object-cover" alt="" />
              </div>
              <div className="w-[280px] md:w-[400px] lg:w-[450px] aspect-[4/5] rounded-[150px] md:rounded-[200px] overflow-hidden bg-zinc-900 border border-zinc-800">
                <img src="img/video-entry-product 1.png" className="w-full h-full object-cover" alt="" />
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0d0d0d] text-white pt-20 pb-10 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-bold mb-6">Focus.Frame</h3>
              <p className="text-zinc-400 text-sm italic">+38 066 543 8912</p>
            </div>
            <div className="lg:col-span-8 flex justify-between">
              {/* Тут можно добавить ссылки из твоего шаблона аналогично */}
            </div>
          </div>
          <p className="text-center text-zinc-500 text-[10px] uppercase tracking-widest">
            2024 Focus Frame © All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}