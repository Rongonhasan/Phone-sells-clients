import React from 'react';
import '../../App.css'


const Carusel = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1529346720291-0c190cc4c804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1614&q=80")` }}>
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
            <p className="mb-5">The thrill of purchasing a second-hand phone might not compare to the delight of opening a new mobile device with advanced technology and enticing features packaged in a sleek box.</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Carusel;