import Signin from './UI/SignIn';
import Upload from './UI/Upload';

export const routes = [
    {
        path: '/',
        element: <Signin/>
    },
    {
        path: '/upload',
        element: <Upload/>
    },
]