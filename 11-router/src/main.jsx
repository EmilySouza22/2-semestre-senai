import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import { StrictMode } from 'react';
import { GlobalContextProvider } from './contexts/GlobalContext';

createRoot(document.getElementById('root')).render(
	<GlobalContextProvider>
		<StrictMode>
			<RouterProvider router={router}>
				{/*Aqui vai ficar a pagina carregada*/}
			</RouterProvider>
		</StrictMode>
	</GlobalContextProvider>
);