import './style';

import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './components/header';
import Home from './routes/home';
import Blog from './routes/blog';

export default () => (
	<div id="app">		
		<Header />
		<Router>
			<Home path="/" />		
			<Blog path="/blog" />
			<Blog path="/blog/:id" />
		</Router>		
	</div>
);
