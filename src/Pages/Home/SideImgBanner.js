import React from 'react';
import { Link } from 'react-router-dom';


const SideImgBanner = () => {
    return (
        <div>
        <div className="hero min-h-screen  rounded-xl px-4 my-10">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Best Android Collection <br />
                For 2022</h1>
              <p className="py-6">
              There are new phones arriving all the time, especially when it comes to the world of Android. Apple's iPhones will always be popular but handsets running Google's mobile OS provide you with a wealth of choice - and usually much better specs for the same price.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <input
                  className="input my-2 input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="Name"
                />
                <div className="flex gap-2">
                  <input
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="textarea input-bordered input-accent w-full max-w-xs"
                  name=""
                  placeholder="Message"
                  id=""
                  cols="10"
                  rows="10"
                ></textarea>
              </div>
              <Link className="w-[50%] mx-auto" to="/">
                <button className="btn btn-success my-5 ">Connect Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SideImgBanner;