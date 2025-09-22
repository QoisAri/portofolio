'use client'; 

import { useState, useEffect, useLayoutEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Canvas } from '@react-three/fiber';
import AnimatedShape from './components/AnimatedShape';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ... (Kode untuk komponen Clock tetap sama)
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
  // ... (Semua 'ref' dan 'useLayoutEffect' tetap sama)
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
    const heroElements = [heroH4Ref.current, heroH1Ref.current, heroPRef.current];
    gsap.set(heroElements, { opacity: 0, y: 30 });

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      }
    });

    heroTl.to(heroH4Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
          .to(heroH1Ref.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, "-=0.4")
          .to(heroPRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, "-=0.4");

    const aboutSection = aboutSectionRef.current;
    const imageContainer = imageContainerRef.current;
    const aboutContent = aboutContentRef.current;
    const textLeft = textLeftRef.current;
    const textRight = textRightRef.current;

    gsap.set(aboutContent, { opacity: 1 });
    gsap.set([textLeft, textRight], { opacity: 0 });

    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 60%',
        toggleActions: 'play reverse play reverse', 
      },
    });

    aboutTl.to(imageContainer, {
      width: '350px',
      height: '450px',
      borderRadius: '20px',
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      ease: 'power2.inOut',
      duration: 1.2,
    });

    aboutTl.to([textLeft, textRight], {
        opacity: 1,
        duration: 0.8,
    }, "-=1.0");

    const imageWidth = 350;
    const gap = 80;
    const moveDistance = (imageWidth / 2) + (gap / 2);

    aboutTl.to(textLeft, {
        x: -moveDistance,
        ease: 'power2.inOut',
        duration: 1,
    }, "-=0.8");

    aboutTl.to(textRight, {
        x: moveDistance,
        ease: 'power2.inOut',
        duration: 1,
    }, "<");


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
              <pointLight position={[-10, -10, 5]} intensity={1} color="#00dd99" />
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
            <h4 ref={heroH4Ref}>HI, I'M JESS!</h4>
            <h1 ref={heroH1Ref}>
              CREATING INTUITIVE<br />AND ENGAGING<br />DIGITAL PRODUCTS
            </h1>
            <p ref={heroPRef}>
              I'm an UI/UX designer on a mission to make digital<br />experiences more delightful.
            </p>
          </div>
        </div>
      </main>

      <section ref={aboutSectionRef} className={styles.aboutSection}>
        <div ref={imageContainerRef} className={styles.imageContainer}>
          <Image 
            src="/qois.jpg"
            alt="Foto profil Qois"
            fill
            objectFit="cover"
            priority
          />
        </div>
        <div ref={aboutContentRef} className={styles.aboutContent}>
          <div ref={textLeftRef} className={styles.aboutTextLeft}>
            <span>ABOUT ME</span>
            <h2>I DELIVER EXCEPTIONAL USER EXPERIENCES ACROSS VARIOUS PLATFORMS.</h2>
          </div>
          <div ref={textRightRef} className={styles.aboutTextRight}>
            <h3>JESSICA SCOTT</h3>
            <p>As a UI/UX designer with four years of experience, I’ve consistently pour my heart and soul into creating products that not only look great but feel amazing to use. Currently, I work as a Senior designer at Dreamies Studio.</p>
            <button className={styles.learnMoreBtn}>LEARN MORE</button>
          </div>
        </div>
      </section>

      <ProjectsSection />
      
      {/* SECTION BARU DITAMBAHKAN DI SINI */}
      <SkillsSection />
      <ContactSection />
    </>
  );
}

