
import React, { useState } from 'react';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';

const ecoActions = [
  { id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
  { id: 2, name: "Take public transport", co2Reduction: 2.6 },
  { id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
  { id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
  { id: 5, name: "Recycle paper", co2Reduction: 0.2 },
];

function App() {

 const [trackedActions, setTrackedActions] = useState([]);

 const addAction = (action) => {
  setTrackedActions((prevActions) => {
    console.log(trackedActions);
    const existingAction = prevActions.find((a) => a.id === action.id);
    if (existingAction) {
      return prevActions.map((a) =>
        a.id === action.id ? { ...a, count: a.count + 1 } : a
      );
    } else {
      return [...prevActions, { ...action, count: 1 }];
    }
    
  });
};

const clearActions = () => {
  setTrackedActions([]);
};

const totalCo2 = trackedActions.reduce(
  (total, action) => total + action.co2Reduction * action.count,
  0
);

  return (
     <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Eco-Tracker</h1>
      <div className="w-full  flex flex-row items-center gap-4">
        <ActionList ecoActions={ecoActions} onAdd={addAction}/>
        <ImpactSummary  
          actions={trackedActions}
          totalCO2 ={totalCo2}
          onClearActions={clearActions}
          userGoal = {5}
        />
      </div>
      </div>
  );
}

export default App;
