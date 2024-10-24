
const Sidebar = ({recipequeue,handelRemove,preparedRecipe}) =>{
    return(
        <div className="w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100 ">
             {/* want tp cook table */}
             <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-600">Want To Cook:{recipequeue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Clorise</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      {recipequeue.map((reacipe, index)=>(
        <tr key={index}>
        <th>{index+1}</th>
        <td>{reacipe.recipe_name}</td>
        <td>{reacipe.preparation_time}</td>
        <td>{reacipe.calories}</td>
        <td><button onClick={()=>handelRemove(reacipe.recipe_id) }className="bnt bg-green-400 rounded-full w-24 h-10 mt-4 text-gray-600 border-2 text-sm font-semibold">Priparing</button></td>

      </tr>
      ))}
      
      
    </tbody>
  </table>
</div>
             {/* Currently Ckooking Table */}
             
             <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-600 mt-10">Want To Cook:{preparedRecipe.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Clorise</th>
       
      </tr>
    </thead>
    <tbody>
     
      {preparedRecipe.map((reacipe, index)=>(
        <tr key={index}>
        <th>{index+1}</th>
        <td>{reacipe.recipe_name}</td>
        <td>{reacipe.preparation_time}</td>
        <td>{reacipe.calories}</td>
        

      </tr>
      ))}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};
export default Sidebar;