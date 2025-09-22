'use client';

import { useState, useEffect, useLayoutEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import AnimatedShape from './components/AnimatedShape';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  };
  return <span>{formatTime(time)}</span>;
}

export default function Home() {
  const mainRef = useRef(null);
  const heroH4Ref = useRef(null);
  const heroH1Ref = useRef(null);
  const heroPRef = useRef(null);

  const aboutSectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const aboutContentRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);

  useLayoutEffect(() => {
    const heroTexts = [heroH4Ref.current, heroH1Ref.current, heroPRef.current];
    gsap.set(heroTexts, { opacity: 0, y: 50 });
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      }
    });
    heroTl.to(heroTexts, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    const aboutSection = aboutSectionRef.current;
    const imageContainer = imageContainerRef.current;
    const aboutContent = aboutContentRef.current; // Corrected this line, was aboutContent.current
    const textLeft = textLeftRef.current;
    const textRight = textRightRef.current;
    gsap.set([textLeft, textRight], { opacity: 0 });
    gsap.set(imageContainer, { width: '100%', height: '100%', borderRadius: '0px' });
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse',
      },
    });
    aboutTl.to(imageContainer, {
      width: '350px',
      height: '450px',
      borderRadius: '20px',
      ease: 'power2.inOut',
      duration: 1.2,
    }, 0);
    aboutTl.to(textLeft, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, "-=0.5");
    aboutTl.to(textRight, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, "<");

    return () => {
      heroTl.kill();
      aboutTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <main ref={mainRef} className={styles.main}>
        <div className={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <pointLight position={[-10, -10, 5]} intensity={1} color="#C77DFF" />
              <AnimatedShape position={[-4.5, 0, 0]} scale={1.5} rotationSpeed={0.3} />
              <AnimatedShape position={[4, -2.5, 0]} scale={1.2} rotationSpeed={0.5} />
            </Suspense>
          </Canvas>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <span>TORONTO, CANADA</span>
            <Clock />
          </div>
          <div className={styles.hero}>
            <h4 ref={heroH4Ref}>HI, I&apos;M JESS!</h4>
            <h1 ref={heroH1Ref}>
              CREATING INTUITIVE<br />AND ENGAGING<br />DIGITAL PRODUCTS
            </h1>
            <p ref={heroPRef}>
              I&apos;m an UI/UX designer on a mission to make digital<br />experiences more delightful.
            </p>
          </div>
        </div>
      </main>

      <section ref={aboutSectionRef} className={styles.aboutSection}>
        <div ref={aboutContentRef} className={styles.aboutContent}>
          <div ref={textLeftRef} className={styles.aboutTextLeft}>
            <span>ABOUT ME</span>
            <h2>I DELIVER EXCEPTIONAL USER EXPERIENCES ACROSS VARIOUS PLATFORMS.</h2>
          </div>
          <div ref={imageContainerRef} className={styles.imageContainer}>
            <Image
              src="/qois.jpg"
              alt="Foto profil Qois"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div ref={textRightRef} className={styles.aboutTextRight}>
            <h3>JESSICA SCOTT</h3>
            <p>As a UI/UX designer with four years of experience, I&apos;ve consistently pour my heart and soul into creating products that not only look great but feel amazing to use. Currently, I work as a Senior designer at Dreamies Studio.</p>
            <button className={styles.learnMoreBtn}>LEARN MORE</button>
          </div>
        </div>
      </section>
      
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}