import { SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import { Routes, Route, Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Home from "./Components/Home";

import './App.css'

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <SignedIn>
            <Home />
          </SignedIn>
        }
      />

      <Route
        path="/sign-in"
        element={
          <SignedOut>
            <SignIn routing="path" path="/sign-in" />
          </SignedOut>
        }
      />

      <Route
        path="/sign-up"
        element={
          <SignedOut>
            <SignUp routing="path" path="/sign-up" />
          </SignedOut>
        }
      />

      <Route
        path="*"
        element={
          <>
            <SignedIn>
              <Navigate to="/home" replace />
            </SignedIn>
            <SignedOut>
              <Navigate to="/sign-in" replace />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}

export default App;