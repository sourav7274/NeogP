import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About'
import Blogs from './pages/Blogs';

const router = createBrowserRouter([
	{
		path:"/",
		element: <App/>
	},
	{
		path:"/about",
		element:<About/>
	},
	{
		path:"/blogs",
		element:<Blogs/>
	}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

