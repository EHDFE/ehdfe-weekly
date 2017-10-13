import globData from './globData.json';

import LanguageIcon from 'material-ui-icons/Language';
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline';
import StarIcon from 'material-ui-icons/Star';
import PermDataSettingIcon from 'material-ui-icons/PermDataSetting';
import MailIcon from 'material-ui-icons/Mail';
import ComputerIcon from 'material-ui-icons/Computer';
import DirectionsBikeIcon from 'material-ui-icons/DirectionsBike';
import NearMeIcon from 'material-ui-icons/NearMe';
import FlightIcon from 'material-ui-icons/Flight';
import LocalCafeIcon from 'material-ui-icons/LocalCafe';
 
const navsData = [];

var icons = [LanguageIcon,LightbulbOutlineIcon,StarIcon,PermDataSettingIcon,MailIcon,ComputerIcon,DirectionsBikeIcon,NearMeIcon,FlightIcon,LocalCafeIcon];

globData.forEach(function (item,index) {
    var reg = /(\d+)\..+\((.+)\)\.md$/;
    var match = reg.exec(item);
    navsData.push({
        url: '/article/' + match[2],
        name: item.slice((match[1].length+1),(item.length-match[2].length-5)),
        icon: ()=>{
            const Component = icons[(index%10)]; 
             return  <Component/>
            },
        item:item
    })
})
export default navsData;