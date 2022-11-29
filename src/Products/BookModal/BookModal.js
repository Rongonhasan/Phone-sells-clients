import React from 'react';

const BookModal = () => {
    return (
        <div>
             <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Buy your phone</h3>
                  <form className='grid grid-cols-1 gap-3 mt-10'>
                  <input type="text" placeholder="Gmail" className="input w-full  input-bordered" />
                  <input type="text" placeholder="Model" className="input w-full  input-bordered" />
                  <input type="text" placeholder="Name" className="input w-full  input-bordered" />
                  <input type="text" placeholder="Location" className="input w-full  input-bordered" />
                  <input type="text" placeholder="Price" className="input w-full  input-bordered" /> <br />
                  <input className='btn btn-accent w-full' type="submit" value="Book now" />
                  </form>
                </div>
                
            </div> 
           
        </div>
    );
    
};

export default BookModal;