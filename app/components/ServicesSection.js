'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from '../page.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: 'Web Development',
    description: 'Building fast, scalable, and secure web applications using modern technologies like React, Next.js, and Node.js.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring your digital products look and function perfectly on every screen size, from mobile phones to large desktop monitors.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    title: 'Fullstack Development',
    description: 'End-to-end development handling both frontend interfaces and backend logic, databases, and APIs.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const cards = cardsRef.current.filter(Boolean); // Filter nulls

    gsap.set(title, { opacity: 0, y: 30 });
    gsap.set(cards, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      }
    });

    tl.to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      <h2 ref={titleRef} className={styles.sectionTitle}>SERVICES</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={styles.serviceCard}
            ref={el => cardsRef.current[index] = el}
          >
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
