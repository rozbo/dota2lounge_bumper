/**
 * Created by rozbo on 2017/5/26.
 */
"use strict";
let util= require('./util');


let getBumpInfo=function(text){
    let regex=/bumpTrade\('([\d]+)','([\w]+)'\)/g;
    let data={};
    let m=null;
    while(true){
        m = regex.exec(text);
        if(m!=null){
            bump(m[1],m[2]);
            data[m[1]]=m[2];
        }else{
            console.log("当前所有已刷新")
            break;
        }
    }
    console.log(data);
}

let bump=(k,v)=>{
    util.post('https://dota2lounge.com/ajax/bumpTrade.php')
        .send({
            trade: k,
            code:v
        }).end(function(err, res){
        if (err || !res.ok) {
            console.log('Oh no! error');
        } else {
            console.log("--------",res.text);
        }
    });
}



let main=()=>{
    util.get('https://dota2lounge.com/mytrades').end(function(err, res){
            if (err || !res.ok) {
                console.log('Oh no! error');
            } else {
                getBumpInfo(res.text);
            }
        });
}

console.log("now ,go!");
main();

