import { useContext } from 'react';
import { AppContext } from '../Pages/appState';

function useContextGetter() {
    const context = useContext(AppContext)
    return context;
}

export default useContextGetter;