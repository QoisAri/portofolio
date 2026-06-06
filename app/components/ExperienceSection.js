'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from '../page.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    year: '2024 - 2025',
    role: 'Project Manager',
    company: 'Tech Solutions Inc.',
    description: 'Managed multiple software development projects, ensuring timely delivery and effective communication between stakeholders and development teams.'
  },
  {
    year: '2024 - 2026',
    role: 'Front-End Developer',
    company: 'Creative Agency',
    description: 'Developed responsive and accessible web applications using React and Next.js. Collaborated closely with designers to ensure pixel-perfect implementation.'
  },
  {
    year: '2024 - 2026',
    role: 'Web Designer',
    company: 'Freelance',
    description: 'Designed and developed custom websites for various clients, focusing on modern aesthetics and smooth user experiences.'
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef([]);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const items = listRef.current.filter(Boolean); // Filter nulls

    gsap.set(title, { opacity: 0, y: 30 });
    gsap.set(items, { opacity: 0, x: -30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      }
    });

    tl.to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to(items, { opacity: 1, x: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out' }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.experienceSection}>
      <h2 ref={titleRef} className={styles.sectionTitle}>EXPERIENCE</h2>
      <div className={styles.timeline}>
        {experienceData.map((item, index) => (
          <div 
            key={index} 
            className={styles.timelineItem}
            ref={el => listRef.current[index] = el}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineYear}>{item.year}</span>
              <h3 className={styles.timelineRole}>{item.role}</h3>
              <span className={styles.timelineCompany}>{item.company}</span>
              <p className={styles.timelineDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
