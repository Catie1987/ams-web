import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5680484691657!2d105.88622837486321!3d21.04996268060475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9f45a974beb%3A0x4e9e2ac617901366!2sAMS%20Vietnam%20CO.%2CLtd!5e0!3m2!1sen!2s!4v1735263477013!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
