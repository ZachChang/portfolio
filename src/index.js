import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';

ReactDOM.render(
	<BrowserRouter>
		 <ScrollToTop>
			<App />
	 	</ScrollToTop>
	</BrowserRouter>
	, document.getElementById('root'));
	registerServiceWorker();
