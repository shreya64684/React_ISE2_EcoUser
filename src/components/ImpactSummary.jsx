import React, { useState , useEffect} from 'react'

const ImpactSummary = ({actions = [], totalCO2,onClearActions, userGoal}) => {
  
    const treesPlanted = Math.floor(totalCO2 / 10);

    const goalAchieved = totalCO2 >= userGoal;

 
    let messageColor;
    if (totalCO2 < 0.5) {
        messageColor = "text-red-500";
    } else if (totalCO2 >= 0.5 && totalCO2 < 1) {
        messageColor = "text-orange-500";
    } else {
        messageColor = "text-green-500";
    }

  return (
    <div  className="p-4 bg-white rounded-lg shadow-md mt-6 w-full">
        <h1 className="text-xl font-semibold text-green-600 mb-4">Impact Summary</h1>
        <p className="text-lg">Weekly Goal: Save {userGoal} kg CO2</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className={`h-2 rounded-full ${goalAchieved ? "bg-green-500" : "bg-blue-500"}`}
          style={{ width: `${(totalCO2/ userGoal) * 100}%` }}
        />
      </div>



        <p className="text-lg mb-4">Total CO2 Saved: {totalCO2.toFixed(2)} kg</p>

    
        <ul>
        {actions.length > 0 ? (
          actions.map((action) => (
            <li key={action.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
              {action.name} - {action.count} x {action.co2Reduction} =  {(action.co2Reduction * action.count).toFixed(2)} kg Co2
            </li>
          ))
        ) : (
          <p className="text-gray-500">No actions tracked yet. Start adding some eco-friendly actions!</p>
        )}
        </ul>
        <button onClick={onClearActions} className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Clear All</button>

        <p className={`mt-4 text-lg font-semibold ${messageColor}`}>
        You've saved the equivalent of {treesPlanted} {treesPlanted === 1 ? 'tree' : 'trees'} planted!
      </p>
    </div>
  )
}

export default ImpactSummary