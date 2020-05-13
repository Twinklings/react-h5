import React, { useState } from 'react';
import { Carousel, WingBlank} from 'antd-mobile';
// import {wx} from 'https://res.wx.qq.com/open/js/jweixin-1.5.0.js';
// import {axios} from '../../services/api'
import "./index.css";
function Example() {

    // const [count, setCount] = useState(0);

    // axios("/index/test",{signUrl: ""}).then(response=>{
        
    // })

    // 

    // 轮播图
    const data = ['http://yshop.mekedoo.com/uploads/attach/2020/04/20200417/3c7615403bd9892aa49f750ef08c3728.png']

    return (
        <div>
            <WingBlank>
                <Carousel
                autoplay={true}
                infinite
                >
                {data.map((val,index) => (
                    <img
                        key={index}
                        src={`${val}`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top'}}
                    />
                ))}
                </Carousel>
            </WingBlank>
            <div class="wrapper">
                <div class="share money font-color-red">￥<span class="num">99.00</span>以免除</div>
                <div class="introduce">信用免押领取，包邮发货，收到机器激活开通后，订单完成，增加信用记录，且终身无需归还</div>
                <div class="label"><div>库存:1098件</div><div style={{float:"right"}}>销量:3358件</div></div>
            </div>
            <div class='product_intro'>
                <div class='title'>产品介绍</div>
                <div class="conter">
                    <img src="http://yshop.mekedoo.com/uploads/attach/2020/04/20200417/877d7ca3e68621a198cac33d0619f81e.png" />
                </div>
            </div>

            <div class="footer acea-row row-between-wrapper">
                <div class="bnt acea-row">
                    <div class="buy">立即领取</div>
                </div>
            </div>
        </div>
   );
}

export default Example