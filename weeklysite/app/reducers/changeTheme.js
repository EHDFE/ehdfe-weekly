import { CHANGETHEME } from '../constants';

const initState = {
    theme:'green'
}

export default function changeTheme( state = initState,action) {
    switch ( action.type ) {
        case CHANGETHEME:
            return action.theme;
        default:
            return state;
    }
} 