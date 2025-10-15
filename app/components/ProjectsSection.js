'use client';

import { useState, useRef, useEffect, useLayoutEffect } from 'react'; // Tambahkan useLayoutEffect
import styles from '../page.module.css';
import { StarIcon, GithubIcon } from './Icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin

// ... (Komponen ProjectItem tetap sama)
const projectsData = [
  {
    title: 'Portfolio Website v1',
    description: 'My first personal portfolio website built with Next.js, featuring 3D animations with Three.js and scroll-triggered interactions using GSAP for a dynamic user experience.',
    githubUrl: 'https://github.com/QoisAri/portofolio',
  },
  {
    title: 'Maintenance Fleet',
    description: 'Membuat aplikasi untuk mainetnance kesehatan mobil .',
    githubUrl: 'https://github.com/QoisAri/CiptaNiagaGas',
  },
  {
    title: 'Weather Dashboard App',
    description: 'A clean and simple weather dashboard that fetches real-time data from a third-party API. Built with React and styled with Tailwind CSS for a responsive design.',
    githubUrl: 'https://github.com/your-username/your-repo-3',
  },
];

function ProjectItem({ project, index, isOpen, onClick }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.inOut', padding: '30px 0' });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.inOut', padding: '0' });
    }
  }, [isOpen]);

  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectHeader} onClick={onClick}>
        <div className={styles.projectTitleContainer}>
          <span className={styles.projectNumber}>{projectNumber}</span>
          <span className={styles.projectTitleText}>{project.title}</span>
        </div>
        <StarIcon isOpen={isOpen} />
      </div>
      <div ref={contentRef} className={styles.projectContentWrapper}>
        <div className={styles.projectContent}>
          <p>{project.description}</p>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            <GithubIcon />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}


// Komponen utama untuk section proyek
export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // Tambahkan ref untuk elemen yang akan dianimasikan
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);

  // Hook untuk animasi masuk
  useLayoutEffect(() => {
    const title = titleRef.current;
    const list = listRef.current;
    
    // Sembunyikan elemen pada awalnya
    gsap.set([title, list], { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%', // Animasi dimulai saat section 70% terlihat
        toggleActions: 'play reverse play reverse', // Logika putar ulang
      }
    });

    tl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(list, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.5"); // List muncul setelah title

    return () => {
      tl.kill(); // Cleanup
    }
  }, []);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className={styles.projectsSection}>
      <h2 ref={titleRef} className={styles.projectsTitle}>MY PROJECTS</h2>
      <div ref={listRef} className={styles.projectsList}>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            index={index}
            project={project}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

