import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Hompage';
import FoodCollectingDetails from './pages/FoodCollectingDetails';
import AddFoodCollectingDetails from './pages/AddFoodCollectingDetails';
import UpdateFoodCollectingDetails from './pages/UpdateFoodCollectingDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/foodCollectingDetails"
            element={<FoodCollectingDetails />}
          />
          <Route
            path="/addFoodCollectingDetails"
            element={<AddFoodCollectingDetails />}
          />
          <Route
            path="/updateFoodCollectingDetails/:delivery_id"
            element={<UpdateFoodCollectingDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
