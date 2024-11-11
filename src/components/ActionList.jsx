import React from 'react'



const ActionList = ({ecoActions, onAdd}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full">
        <h1 className="text-xl font-semibold text-green-600 mb-4">Eco Friendly Actions</h1>
        <ul  className="space-y-2">
        {ecoActions.map((action) => (
            <li key={action.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                {action.name} - {action.co2Reduction} kg CO2
                <button onClick={() => {onAdd(action)}}  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Add</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default ActionList