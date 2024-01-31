import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import {routes} from "./routes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {createSafeRoot} from './utils';
const root = createSafeRoot('root')
const router = createBrowserRouter(routes)
const queryClient=new QueryClient()
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
)
