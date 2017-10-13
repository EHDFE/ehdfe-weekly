import React from 'react';
import navsData from './navsData';
import  './Article.css';
import { Spin} from 'antd';


class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article:'',
            loading:false
        }
    }
    
    dealData(url){
        var _this = this;
        this.setState({loading:true})
        if(!url){
            import('../../../weekly/'+navsData[0].item).then(function(data){
                _this.setState({article:data,loading:false})
            }) 
        }
        navsData.forEach(function(item){
            if(item.url===('/article/'+url)){
                import('../../../weekly/'+item.item).then(function(data){
                    _this.setState({article:data,loading:false})
                })

            }
        })
    }

    componentDidMount() {
        this.dealData(this.props.match.params.url);

    }
    
    componentWillReceiveProps(nextProps){
        if(this.props.match.params.url!==nextProps.match.params.url){
            this.dealData(nextProps.match.params.url);
        }
    }
    render() {

        return (
           <div className="article-content" >
               <Spin size="large" spinning={this.state.loading} tip="加载中">
               <div dangerouslySetInnerHTML={{ __html:this.state.article }}></div>
               </Spin>
           </div>
        );
    }
}

export default Article;