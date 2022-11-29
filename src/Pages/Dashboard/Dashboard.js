import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h2 className='text-3xl'>All users</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th> 
        <th>Name</th>
        <th>Gmail</th>
        <th>model name</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <th>1</th>
        <td>Rongon</td>
        <td>rongon@gmail.com</td>
        <td>iphone</td>
      </tr>
     
      <tr className="hover">
        <th>2</th>
        <td>shise</td>
        <td>shise@gmail.com</td>
        <td>Samsung</td>
      </tr>
  
      <tr>
        <th>3</th>
        <td>faisal</td>
        <td>faisl@gmail.com</td>
        <td>vivo</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
        
    );
};

export default Dashboard;