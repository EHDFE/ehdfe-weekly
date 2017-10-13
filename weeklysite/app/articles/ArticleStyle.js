// import { createMuiTheme } from 'material-ui/styles';

const styleSheet = theme => ({
   progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    position:'fixed',
    left:'50%',
    top:'50%',
    color:'#2196F3',
    marginLeft:'-25px',
    marginTop:'-25px'
  },
});

export default styleSheet;