'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import styles from '../page.module.css';
import { InstagramIcon, CloseIcon } from './Icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // PERUBAHAN DI SINI: 'text' diubah menjadi 'message'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); 
  const [formStatus, setFormStatus] = useState('Send');

  const sectionRef = useRef(null);
  const modalRef = useRef(null);
  const modalBgRef = useRef(null);

  const infoRef = useRef(null);
  const buttonRef = useRef(null);
  const socialsRef = useRef(null);
  useLayoutEffect(() => {
    const info = infoRef.current;
    const button = buttonRef.current;
    const socials = socialsRef.current;
    const elementsToAnimate = [info, button, socials];
    gsap.set(elementsToAnimate, { opacity: 0, y: 50 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      }
    });
    tl.to(elementsToAnimate, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.2,
      ease: 'power2.out' 
    });
    return () => tl.kill();
  }, []);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      gsap.timeline()
        .to(modalBgRef.current, { opacity: 1, duration: 0.3 })
        .to(modalRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }, "-=0.2");
    } else {
      gsap.timeline()
        .to(modalRef.current, { opacity: 0, y: 50, scale: 0.95, duration: 0.3, ease: 'power2.in' })
        .to(modalBgRef.current, { opacity: 0, duration: 0.3 }, "-=0.1");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const SERVICE_ID = 'service_suzfibo';
    const TEMPLATE_ID = 'template_5kofpya';
    const PUBLIC_KEY = 'jqdlxju_9vsCjh1sd';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus('Sent!');
        setFormData({ name: '', email: '', message: '' }); // PERUBAHAN DI SINI
        setTimeout(() => setFormStatus('Send'), 3000);
      }, (err) => {
        console.log('FAILED...', err);
        setFormStatus('Error!');
        setTimeout(() => setFormStatus('Send'), 3000);
      });
  };

  return (
    <>
      <footer ref={sectionRef} className={styles.footerSection}>
        <div ref={infoRef} className={styles.contactInfo}>
          <h4>CONTACT</h4>
          <p>Your questions and special requests are always welcome.</p>
          <a href="mailto:qoisrz5@gmail.com" style={{ marginTop: '20px', display: 'inline-block', color: '#888', textDecoration: 'none', fontSize: '1rem' }}>
            email saya : qoisrz5@gmail.com
          </a>
        </div>
        <button ref={buttonRef} className={styles.contactButton} onClick={handleToggleModal}>C</button>
        <div ref={socialsRef} className={styles.socials}>
          <a href="https://www.instagram.com/ekomomment?igsh=b202aWI2NjVyYnI5" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </footer>

      <div 
        ref={modalBgRef} 
        className={styles.modalBackdrop} 
        style={{ display: isModalOpen ? 'flex' : 'none' }}
        onClick={handleToggleModal}
      >
        <div 
          ref={modalRef} 
          className={styles.modalContent} 
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalHeader}>
            <h5>CONTACT US</h5>
            <button onClick={handleToggleModal} className={styles.closeButton}>
              <CloseIcon />
            </button>
          </div>
          <form className={styles.contactForm} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="text">TEXT</label>
              {/* PERUBAHAN DI SINI: 'name' diubah menjadi 'message' */}
              <textarea id="text" name="message" rows="3" value={formData.message} onChange={handleInputChange} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton} disabled={formStatus !== 'Send'}>
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

