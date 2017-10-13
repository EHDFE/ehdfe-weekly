// import {createStyleSheet} from '';

const styleSheet =(theme)=> { 
    return ({
    root: {
        flexGrow: 1,
        marginTop: 0
    },
    header: {
        // backgroundColor: '#2196F3',
        // backgroundColor:theme.palette.primary[50],
        flexDirection:'row',
        color:'#fff'
    },
    logo:{
        flexGrow:1,
        textAlign:'center',
        lineHeight:'48px',
        fontSize:'26px',
        // fontFamily: 'STKaiti',
        whiteSpace:'nowrap'
    },
    tab:{
        flexGrow:4
    },
    backgroundImg:{
        verticalAlign:'middle',
        height:'50%'
    },
    morevert:{
        alignSelf:'flex-end',
        flexGrow:1,
        textAlign:'center',
        lineHeight:'41px',
        color:'#fff'
    }
})};

export default styleSheet;