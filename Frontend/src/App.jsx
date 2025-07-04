import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './App.css'

function App() {

  return (
    <header>
      <SignedIn>
        <h1>Welcome, you're signed in</h1>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
}

export default App
