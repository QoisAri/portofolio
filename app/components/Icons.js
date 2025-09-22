'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// ... (Komponen StarIcon dan GithubIcon tetap sama)
export function StarIcon({ isOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      rotation: isOpen ? 45 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [isOpen]);

  return (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: 'pointer', color: '#fff' }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}


// --- IKON SKILL BARU DITAMBAHKAN DI BAWAH ---

export const ReactIcon = () => (
  <svg width="48" height="48" viewBox="-11.5 -10.23 23 20.46" fill="#61DAFB">
    <circle r="2.05" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextjsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 128 128" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM41.8385 41.5161H51.526V86.0323H41.8385V41.5161ZM86.8385 41.5161L58.1128 73.129L58.1065 41.5161H51.526V86.4839H57.7291L86.8385 54.2097V86.4839H93.1615V41.5161H86.8385Z" fill="#fff"/>
  </svg>
);

export const JavaScriptIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#F7DF1E">
    <path d="M0 0h24v24H0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.28 15.21c-.39.27-.85.4-1.35.4-.55 0-1.03-.17-1.42-.5-.39-.33-.58-.79-.58-1.39 0-.58.23-1.07.68-1.46.45-.39.99-.58 1.62-.58.4 0 .76.08 1.09.24l.32-.88c-.46-.22-1.02-.33-1.68-.33-.8 0-1.48.24-2.04.73s-.84 1.12-.84 1.88c0 .87.32 1.59.97 2.15.65.56 1.48.84 2.5.84.58 0 1.12-.1 1.62-.3l-.31-.87zm4.4-1.15c-.18.12-.4.22-.65.28-.25.06-.52.09-.81.09-.61 0-1.1-.14-1.48-.42-.38-.28-.57-.66-.57-1.14 0-.42.16-.77.48-1.05.32-.28.72-.42 1.2-.42.41 0 .76.09 1.05.27l.29-.82c-.39-.2-.86-.3-1.4-.3-.72 0-1.32.22-1.8.66-.48.44-.72 1.01-.72 1.7 0 .58.19 1.07.57 1.48.38.41.87.61 1.47.61.43 0 .84-.08 1.21-.24l-.3-.85z"/>
  </svg>
);

export const NodejsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="#339933">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.72 13.62c-.11.23-.3.41-.54.54-.24.13-.5.2-.78.2-.55 0-1.02-.18-1.41-.54-.39-.36-.58-.82-.58-1.39 0-.57.2-1.04.59-1.42.39-.38.88-.57 1.46-.57.59 0 1.08.19 1.47.57.39.38.59.85.59 1.42 0 .28-.07.54-.2.78zm-3.51-1.29c-.11-.22-.3-.39-.54-.52s-.5-.2-.78-.2c-.55 0-1.01.18-1.4.54-.39.36-.58.82-.58 1.39 0 .57.2 1.04.59 1.42s.88.57 1.46.57c.59 0 1.08-.19 1.47-.57.39-.38.59-.85.59-1.42 0-.28-.06-.54-.19-.78z"/>
  </svg>
);

export const GSAPIcon = () => (
    <svg width="48" height="48" viewBox="0 0 100 100" fill="#88CE02">
        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm25.1 63c-3.1 8.8-12 15.1-22.2 15.1-13.4 0-24.3-10.9-24.3-24.3s10.9-24.3 24.3-24.3c5.8 0 11.1 2 15.4 5.5l-6.9 6.9c-2.3-2-5.3-3.2-8.5-3.2-7.5 0-13.6 6.1-13.6 13.6s6.1 13.6 13.6 13.6c4.6 0 8.6-2.3 11.1-5.7l7 7.1z"/>
    </svg>
);

export const FigmaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path fill="#F24E1E" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4h2v4zm2-6h-2v2h2v-2zm2 2h-2v2h2v-2zm0-4h-2v2h2V8zm-2 0H9V6h4v2z"/>
  </svg>
);

export const ThreejsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 100 100" fill="#fff">
        <path d="M50 0L0 25v50l50 25 50-25V25L50 0zm0 87.5L12.5 68.8V31.2L50 12.5v18.8l-25 12.5v12.5l25-12.5v18.8L25 75v0l25-12.5v18.8L50 87.5zm0-37.5L75 31.2v37.5L50 87.5V68.8l25-12.5V43.8L50 56.2V50z"/>
    </svg>
);
export const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
export function PythonIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.9999C12.5 21.9999 15.25 21.9999 15.25 19.9999C15.25 17.9999 13 17.9999 12 17.9999C11 17.9999 8.75 17.9999 8.75 19.9999C8.75 21.9999 11.5 21.9999 12 21.9999Z" fill="#FFD43B"/>
      <path d="M12 11.9999C12.5 11.9999 15.25 11.9999 15.25 9.9999C15.25 7.9999 13 7.9999 12 7.9999C11 7.9999 8.75 7.9999 8.75 9.9999C8.75 11.9999 11.5 11.9999 12 11.9999Z" fill="#FFD43B"/>
      <path d="M12 2C11.5 2 8.75 2 8.75 4C8.75 6 11 6 12 6V12H10C7.79086 12 6 10.2091 6 8V2H4V8C4 11.3137 6.68629 14 10 14H12V18H14C16.2091 18 18 16.2091 18 14V2H16V14C16 15.1046 15.1046 16 14 16H12V2Z" fill="#306998"/>
    </svg>
  );
}

export function PHPIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="12" rx="10" ry="7" fill="#8892BF"/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">PHP</text>
    </svg>
  );
}

export function CSSIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3L5.76 20.22L12 22L18.24 20.22L20 3H4ZM16.28 17.45L12 18.57L7.72 17.45L7.4 14.22H9.86L10.02 15.81L12 16.33L13.98 15.81L14.16 13.84H7.29L6.84 8.61H17.16L16.71 13.84H14.16L14.52 10.1H9.48L9.24 7.18H14.76L15.21 12.42H16.89L17.58 5.76H6.42L5.97 10.99H18.03L16.28 17.45Z" fill="#264DE4"/>
    </svg>
  );
}

export function HTMLIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3L5.5 20.25L12 22L18.5 20.25L20 3H4ZM16.25 8.5H12.5V10.5H15.75L15.25 16.25L12 17.13V15.1L12.01 15.1L14.25 14.5H9.25L8.75 9.5H16.75L16.25 8.5Z" fill="#E34F26"/>
    </svg>
  );
}

export function JavaIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 18C8.79 18 7 16.21 7 14C7 11.79 8.79 10 11 10C13.21 10 15 11.79 15 14C15 16.21 13.21 18 11 18ZM17 18C14.79 18 13 16.21 13 14C13 11.79 14.79 10 17 10C19.21 10 21 11.79 21 14C21 16.21 19.21 18 17 18Z" fill="#f89820"/>
            <path d="M11 14.5C11 15.33 10.33 16 9.5 16C8.67 16 8 15.33 8 14.5C8 13.67 8.67 13 9.5 13C10.33 13 11 13.67 11 14.5Z" fill="#5382a1"/>
            <path d="M17 14.5C17 15.33 16.33 16 15.5 16C14.67 16 14 15.33 14 14.5C14 13.67 14.67 13 15.5 13C16.33 13 17 13.67 17 14.5Z" fill="#5382a1"/>
        </svg>
    )
}

export function CodeIgniterIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.29 17.29L12 14L8.71 17.29L7.29 15.88L10.59 12.59L7.29 9.29L8.71 7.88L12 11.17L15.29 7.88L16.71 9.29L13.41 12.59L16.71 15.88L15.29 17.29Z" fill="#DD4814"/>
        </svg>
    )
}

export function CIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14 16H10V14H14V16ZM14 12H10V10H14V12ZM14 8H10V6H14V8Z" fill="#A8B9CC"/>
        </svg>
    )
}

export function TypeScriptIcon() {
    return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3V21H22V3H2ZM13 17H11V11H8V9H16V11H13V17Z" fill="#3178C6"/>
        </svg>
    )
}
