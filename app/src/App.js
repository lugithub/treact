//https://facebook.github.io/react/docs/jsx-in-depth.html#choosing-the-type-at-runtime

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PhotoStory = () => <div>ppp</div>;
const VideoStory = () => <div>vvv</div>;

//this doesn't work
//react Component has to return a JSX expression
//const Story = ({storyType}) => storyType === 'p' ? PhotoStory : VideoStory;

//ok
//better than the way below
//const Story = ({storyType}) => storyType === 'p' ? <PhotoStory /> : <VideoStory />;

const Story = ({storyType}) => {
  const X = storyType === 'p' ? PhotoStory : VideoStory;
  return <X />;
} ;

export default Story;
