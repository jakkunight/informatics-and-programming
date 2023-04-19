import React from "react";
// Routes:
import Index from "./routes/Index";
import TCL1 from "./routes/the-console-logs/1";
import A1 from "./routes/algoritmia/1";
import A2 from "./routes/algoritmia/2";
// React Router:
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// Base URL for GH-Pages:
const baseURL = "/#";//"/informatics-and-programming";

// Router config:
const router = createHashRouter([
	{
		path: baseURL + "/",
		element: <Index />
	},
	{
		path: baseURL + "/the-console-logs/1",
		element: <TCL1 />
	},
	{
		path: baseURL + "/algoritmia/1",
		element: <A1 />
	},
	{
		path: baseURL + "/algoritmia/2",
		element: <A2 />
	}
]);

// App component:
const App = () => {

	return <RouterProvider router={router} />;
};

export default App;
