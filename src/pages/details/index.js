import React, { useState } from 'react';
import { Carousel, WingBlank} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { createHashHistory } from 'history'; // 如果是hash路由
import {axios} from '../../services/api'
import "./index.css";
const history = createHashHistory();
function Example() {

    // const [count, setCount] = useState(0);

    axios({
        url:"/wechat/test",
        params:{signUrl: ""},
        methodType:'get'
    }).then(response=>{
        
    })

    // 详情数据

    const detailsData = {
        imgList:['http://yshop.mekedoo.com/uploads/attach/2020/04/20200417/3c7615403bd9892aa49f750ef08c3728.png'],
        detailsImg:"http://yshop.mekedoo.com/uploads/attach/2020/04/20200417/877d7ca3e68621a198cac33d0619f81e.png",
        stock:"1098",
        salesVolume:"3358",
        describe:"信用免押领取，包邮发货，收到机器激活开通后，订单完成，增加信用记录，且终身无需归还",
        money:"99.00"
    }

    const getItNow = () => {
        history.push('/order');
    }

    return (
        <div>
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    style={{height:'auto'}}
                >
                    {detailsData.imgList.map((val,index) => (
                        <img
                            key={index}
                            src={`${val}`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top'}}
                        />
                    ))}
                </Carousel>
            </WingBlank>
            <div className={"wrapper"}>
                <div className={"share money font-color-red"}>￥<span className={"num"}>{detailsData.money}</span>以免除</div>
                <div className={"introduce"}>{detailsData.describe}</div>
                <div className={"label"}><div>库存:{detailsData.stock}件</div><div style={{float:"right"}}>销量:{detailsData.salesVolume}件</div></div>
            </div>
            <div className={'product_intro'}>
                <div className={'title'}>产品介绍</div>
                <div className={"conter"}>
                    <img src={detailsData.detailsImg} />
                </div>
            </div>
            <div className={"footer acea-row row-between-wrapper"}>
                <div className={"bnt acea-row"}>
                    <div className={"buy"} onClick={getItNow}>立即领取</div>
                </div>
            </div>
        </div>
   );
}

export default withRouter(Example)