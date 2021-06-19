import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useContextGetter from '../pages/useContext';


export default function useLoggedIn() {
    const context = useContextGetter();
    const history = useHistory();

    useEffect(() => {
        // if isUserLoggedIn is true, navigate
        // away from current page to shopping list page

        if (context.state.isUserLoggedIn) {
            history.push('/shopping-list');
        }
    }, [context.state, history]);
}