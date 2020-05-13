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
    const data = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']


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
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                ))}
                </Carousel>
            </WingBlank>
            <div class="wrapper">
                <div class="money font-color-red">￥<span class="num">99.00</span>以免除</div>
                <div>信用免押领取，包邮发货，收到机器激活开通后，订单完成，增加信用记录，且终身无需归还</div>
            </div>
            <div class='product_intro'>
                <div class='title'>产品介绍</div>
                <div></div>
            </div>
        </div>
   );
}

export default Example