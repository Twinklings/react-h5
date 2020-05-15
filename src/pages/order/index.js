import React, { useState } from 'react';
import {Flex,WhiteSpace} from 'antd-mobile'
import "./index.css";
import right from '../../assets/image/right.svg'
import { createHashHistory } from 'history'; // 如果是hash路由
const history = createHashHistory();

function Example() {

    // window.wx.config({
    //     debug: true,
    //     // appId: dataJson.appid,
    //     // timestamp: dataJson.timestamp,
    //     // nonceStr: dataJson.nonceStr,
    //     // signature: dataJson.signature,
    //     jsApiList: ["openAddress"]
    // })

    const setAddres = () => {
        history.push('/addres');
    }

    return (
        <div>
            <div>
                <div className={"item"}  onClick={setAddres}>
                    <div className={'setAddr'}>
                        <span style={{paddingRight: '10px'}}>设置收货地址</span>
                        <span></span>
                        <img style={{float: 'right'}} src={right} />
                    </div>
                </div>
                <WhiteSpace/>
                <div className={"item"} style={{borderBottom: '1px solid #dedede'}}>
                    <div>共1件商品</div>
                </div>
                <div className={"item"}>
                    <img className={"goodImg"} style={{float: 'left'}} src={'http://yshop.mekedoo.com/uploads/attach/2020/04/20200417/3c7615403bd9892aa49f750ef08c3728.png'} />
                
                    <div className={"goodD"}>信用免押领取，包邮发货，收到机器激活开通后，订单完成，增加信用记录，且终身无需归还</div>
                </div>
                <WhiteSpace/>
                <div className={"item"}>
                    <div>备注信息</div>
                    <textarea className={"textarea"} placeholder={"请添加备注"} ></textarea>
                </div>
                <WhiteSpace/>
                <div className={"item"}>
                    <div>支付方式</div>
                    <div className={"tips"}>
                        <span className={"green"} style={{padding: '0 .3rem 0 .1rem'}}>免押金租借</span>
                        <span>微信支付分550分以上可免费领取</span>
                    </div>
                </div>
                <WhiteSpace/>
                <div className={"item"}>
                    <Flex>
                        <Flex.Item><div>商品总价</div></Flex.Item>
                        <Flex.Item><div className={"text"}>99.00</div></Flex.Item>
                        <Flex.Item><div style={{textAlign: 'right'}}>已免除</div></Flex.Item>
                    </Flex>
                </div>
                <WhiteSpace/>
                <div className={"item"} style={{lineHeight: '18px'}}>温馨提示：微信支付分达到550及以上，免押金领取机器，租借期间不收取租金，您需在收货后30日内激活使用，不激活使用将通过微信支付分扣取机器押金99元</div>
            </div>
            <div class="footer">
                <div class="bnt">
                    <div class="lease">
                        <span>免押金租借</span>
                        <div class="tip">(微信支付分550分以上可免费领取)</div>
                    </div>
                </div>
            </div>
        </div>
   );
}

export default Example