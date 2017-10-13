// import {createStyleSheet} from 'material-ui/styles';

const styleSheet = {
    list: {
        width: 250,
        flex: 'initial'
    },
    listFull: {
        width: 'auto',
        flex: 'initial'
    },
    content: {
        padding: '25px 20px 0px',
        backgroundColor: '#ECECEC'
    },
    article: {
        backgroundColor: '#fff',
        padding: '24px 16px'
    },
    button: {
        backgroundColor: '#2196F3',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#1976d2'
        }
    },
    sideButton:{
        paddingLeft:'20px',
        cursor:'pointer'
    },
    sideBar:{
        position:'fixed'
    },
    footer: {
        textAlign: 'center',
        padding: '24px 50px',
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: '15px',
        backgroundColor: '#ECECEC'

    }
};

export default styleSheet;