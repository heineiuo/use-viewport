import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import useViewport from 'use-viewport'

export default function App(){
  const size = useViewport()
  return (
    <div>
      viewport: {JSON.stringify(size)}
    </div>
  )
}
