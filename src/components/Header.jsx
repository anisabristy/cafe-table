import React from 'react';
const Header = () =>{
    return(
         <div className='flex justify-evenly'>
          <div>  <h1>Recipe Calories</h1></div>
          <div>
            <ul className=''>
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>
                
            </ul></div>
            <div>
                <button><i class="fa-solid fa-magnifying-glass"></i>Search</button>
            </div>
            <div><i class="fa-regular fa-face-smile"></i></div>
         </div>
    );
};
export default Header;