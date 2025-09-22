'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from '../page.module.css';
import { 
  ReactIcon, NextjsIcon, JavaScriptIcon, NodejsIcon, GSAPIcon, FigmaIcon, ThreejsIcon,
  PythonIcon, PHPIcon, CSSIcon, HTMLIcon, JavaIcon, CodeIgniterIcon, CIcon, TypeScriptIcon
} from './Icons'; // Impor semua ikon baru
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Data untuk skill-set Anda. Ganti dengan data Anda sendiri.
const skillsData = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextjsIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Node.js', icon: <NodejsIcon /> },
  { name: 'Python', icon: <PythonIcon /> }, // Diperbarui
  { name: 'PHP', icon: <PHPIcon /> }, // Diperbarui
  { name: 'Three.js', icon: <ThreejsIcon /> },
  { name: 'CSS', icon: <CSSIcon /> }, // Diperbarui
  { name: 'HTML', icon: <HTMLIcon /> }, // Diperbarui
  { name: 'Java', icon: <JavaIcon /> }, // Diperbarui
  { name: 'Code Igniter', icon: <CodeIgniterIcon /> }, // Diperbarui
  { name: 'C', icon: <CIcon /> }, // Diperbarui
  { name: 'TypeScript', icon: <TypeScriptIcon /> }, // Diperbarui
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const marquee = marqueeRef.current;
    
    gsap.set([title, marquee], { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse',
      }
    });

    tl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to(marquee, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, "-=0.5");

    return () => {
      tl.kill();
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.skillsSection}>
      <h2 ref={titleRef} className={styles.skillsTitle}>MY SKILLS</h2>
      <div ref={marqueeRef} className={styles.skillsMarquee}>
        <div className={styles.skillsTrack}>
          {/* Duplikasi array untuk efek seamless loop */}
          {[...skillsData, ...skillsData].map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

