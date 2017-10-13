import globData from './globData.json';

const navsData = [];

var icons = ['coffee','apple','android-o','chrome','github','disconnect','camera-o','laptop','hdd','code-o'];

globData.forEach(function (item) {
    var reg = /(\d+)\..+\((.+)\)\.md$/;
    var match = reg.exec(item);
    navsData.push({
        url: '/article/' + match[2],
        name: item.slice((match[1].length+1),(item.length-match[2].length-5)),
        icon: icons[parseInt((Math.random() * 10), 10)],
        item:item
    })
})
export default navsData;