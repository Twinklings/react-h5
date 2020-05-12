import React, { useState } from 'react';
import { Button } from 'antd-mobile';
// import {wx} from 'https://res.wx.qq.com/open/js/jweixin-1.5.0.js';
import {axios} from '../../services/api'
// import ''
// window.wx.config({
//     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//     appId: data.appId, // 必填，公众号的唯一标识
//     timestamp: data.timeStamp, // 必填，生成签名的时间戳
//     nonceStr: data.nonceStr, // 必填，生成签名的随机串
//     signature: data.paySign,// 必填，签名
//     jsApiList: ["chooseWXPay"] // 必填，需要使用的JS接口列表chooseWXPay为支付js接口
// });
var appidG = "";
var timestampG = "";
var nonceStrG = "";
var signatureG = "";
var param = "";
function Example() {
    const [count, setCount] = useState(0);
    axios("/index/test",{signUrl: ""}).then(response=>{
        console.log("data:" + response);
            // alert("data:" + data);
            var dataJson = JSON.parse(response);
            // console.log("dataJson.appid:"+dataJson.appid);
            // console.log("wx.config() ---> 接收后台返回的参数");
            // alert("wx.config() ---> 接收后台返回的参数");
            // var signUrls = window.location.href.split('#')[0];
            // alert("当前系统url:"+signUrls);
            appidG = dataJson.appid;
            timestampG = dataJson.timestamp;
            nonceStrG = dataJson.nonceStr;
            signatureG = dataJson.signature;
            window.wx.config({
                debug: true,
                appId: dataJson.appid,
                timestamp: dataJson.timestamp,
                nonceStr: dataJson.nonceStr,
                signature: dataJson.signature,
                jsApiList: ["getNetworkType","openLocation","getLocation","openBusinessView","openAddress"]
            })
    })


    const goToWXScore = () => {
        // console.log("appidG:" + appidG);
        // console.log("timestampG:" + timestampG);
        // console.log("nonceStrG:" + nonceStrG);
        // console.log("signatureG:" + signatureG);

        // alert("appidG:" + appidG);
        // alert("timestampG:" + timestampG);
        // alert("nonceStrG:" + nonceStrG);
        // alert("signatureG:" + signatureG);

        axios("/index/generateSignature",{timestamp: timestampG,nonce_str:nonceStrG}).then(response=>{
            alert("微信支付分调用参数:"+response);
            window.wx.ready(function () {
                window.wx.checkJsApi({
                    jsApiList: ['openBusinessView'], // 需要检测的JS接口列表
                    success: function (res) {
                        alert("支付分回调success弹窗openBusinessView状态:"+res.checkResult.openBusinessView);
                        // 以键值对的形式返回，可用的api值true，不可用为false
                        // 如：{"checkResult":{"openBusinessView":true},"errMsg":"checkJsApi:ok"}
                        if (res.checkResult.openBusinessView) {
                            window.wx.invoke(
                                'openBusinessView', {
                                    businessType: 'wxpayScoreUse',
                                    queryString: response
                                },
                                function (res) {
                                    alert("微信回调err_code状态码:"+parseInt(res.err_code));//回调状态 NaN
                                    alert("微信回调err_msg结果:"+res.err_msg);//回调状态 NaN
                                    // 从支付分返回时会执行这个回调函数
                                    if (parseInt(res.err_code) === 0) {
                                        // 返回失败
                                        alert("返回成功");
                                        // 返回成功
                                    } else {
                                        // 返回失败
                                        alert("返回失败");
                                        // 返回失败
                                    }
                                });
                        }
                    }
                });
            });
        })

    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button>Start</Button>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button id="pay" onclick={goToWXScore()} value="跳转支付分">跳转支付分</button>
        </div>
   );
}

export default Example