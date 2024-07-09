import React, { useEffect } from 'react';
import { PreLoader , Copyright} from '../child.component';
import Hero from './elements/hero';
import Form from './elements/formbooking';
import Banner from './elements/serviceBanner';
const BookingPage=()=>{  
    useEffect(() => {
        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script ${src}`));
            document.body.appendChild(script);
          });
        };
    
        const loadScripts = async () => {
          try {
            await loadScript('https://code.jquery.com/jquery-3.4.1.min.js');
            await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js');
            await loadScript('/assets/lib/wow/wow.min.js');
            await loadScript('/assets/lib/easing/easing.min.js');
            await loadScript('/assets/lib/waypoints/waypoints.min.js');
            await loadScript('/assets/lib/counterup/counterup.min.js');
            await loadScript('/assets/lib/owlcarousel/owl.carousel.min.js');
            await loadScript('/assets/lib/tempusdominus/js/moment.min.js');
            await loadScript('/assets/lib/tempusdominus/js/moment-timezone.min.js');
            await loadScript('/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js');
            await loadScript('/assets/js/main.js');
          } catch (error) {
            console.error('Failed to load scripts', error);
          }
        };
    
        loadScripts();
      }, []);
      return (
        <>
    <PreLoader/>
          <Hero/>
          <Form/>
            <Banner/>
          <Copyright/>
        </>
      )
}
export default BookingPage;