import React, { useState } from 'react';
import ReactDOM from "react-dom";
import 'antd-mobile/dist/antd-mobile.css';
import { Picker, List, InputItem , Button, Toast} from 'antd-mobile'
import { createForm } from 'rc-form'
import {getAddresData } from './data';
import { createHashHistory } from 'history'; // 如果是hash路由
import "./index.css"

const Item = List.Item;
const history = createHashHistory();

const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px',position:'relative',borderBottom:0 }}>
            <div style={{ textAlign: 'left', width: '90px', fontSize: '17px'}}>省市区</div>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '17px'}}>{props.extra}</div> 
            {/* children */}
            {/* <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div> */}
        </div>
    </div>
);

function BasicInputExample(props) {
    const [pickerValue, setPickerValue] = useState("");

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [addres, setAddres] = useState("");
    const [hasError, setHasError] = useState(false);
    const onChange = (type,value) => {
        if(type === 'name'){
            if(value != '' || value != null){
                setName(value)
            }
        }else if(type === 'number'){
            // debugger
            // if (!(value.replace(/\s/g, '').length < 11)) {
            //     setPhoneNumber(value)
            // }
            setPhoneNumber(value)
        }else if(type === 'addres'){
            if(value != '' || value != null){
                setAddres(value)
            }
        }
    }

    const onErrorClick = (value) => {
        // if (hasError) {
          Toast.info(value);
        // }
    }

    const onSubmit = () =>{
        console.log()

    }
    // window.wx.config({
    //     debug: true,
    //     // appId: dataJson.appid,
    //     // timestamp: dataJson.timestamp,
    //     // nonceStr: dataJson.nonceStr,
    //     // signature: dataJson.signature,
    //     jsApiList: ["openAddress"]
    // })

    let antdDistrict =[];
    let districtData =getAddresData();
    Object.keys(districtData).forEach((index)=>{
        let itemLevel1 ={};
        let itemLevel2 ={};
        itemLevel1.value = districtData[index].code;
        itemLevel1.label = districtData[index].name;
        itemLevel1.children = [];
        let data = districtData[index].cities;
        Object.keys(data).forEach((index)=>{
            itemLevel2.value = data[index].code;
            itemLevel2.label = data[index].name;
            itemLevel2.children = [];
            let data2 = data[index].districts;
            let itemLevel3 ={};
            itemLevel3.children = [];
            Object.keys(data2).forEach((index)=>{
                itemLevel3.value = index;
                itemLevel3.label = data2[index];
                itemLevel2.children.push(itemLevel3);
                itemLevel3 ={};
            });
            itemLevel1.children.push(itemLevel2);
            itemLevel2 ={};
        });
        antdDistrict.push(itemLevel1)
    });

    const { getFieldProps, getFieldError } = props.form;

    return (
        <div>
            
            <form>
                <List
                    renderHeader={() => '设置收货地址'}
                    renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
                >
                    <Item>
                        <Button className={"addresBottom"} type="primary" size="small" inline onClick={onSubmit}>获取微信地址</Button>
                    </Item>
                    <InputItem
                        placeholder="请输入联系人"
                        onErrorClick={()=>{onErrorClick("请输入联系人")}}
                        onChange={(e)=>{onChange("name",e)}}
                        error={(name === '')} 
                    >联系人</InputItem>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号码"
                        error={(phoneNumber.replace(/\s/g, '').length < 11 && phoneNumber.replace(/\s/g, '').length!=0)}
                        onErrorClick={()=>{onErrorClick("请输入正确的手机号")}}
                        onChange={(e)=>{onChange("number",e)}}
                        value={phoneNumber}
                    >手机号码</InputItem>
                    <Picker
                        title="选择地区"
                        extra="请选择省市区"
                        data={antdDistrict}
                        value={pickerValue}
                        onChange={v => setPickerValue(v)}
                        onOk={v => setPickerValue(v)}
                        onClick={()=>{console.log('xx')}}
                    >
                        <CustomChildren></CustomChildren>
                    </Picker>
                    <InputItem
                        placeholder="请输入详细地址"
                        error={!(addres === '')} 
                        onErrorClick={()=>{onErrorClick("请输入详细地址")}}
                        onChange={(e)=>{onChange("addres",e)}}
                        value={addres}
                    >详细地址</InputItem>


                    
                    <Item>
                        <Button className={"addresBottom"} type="primary" size="small" inline onClick={onSubmit}>免押金租借</Button>
                    </Item>
                </List>
                </form>
        </div>
   );
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);

// ReactDOM.render(<BasicInputExampleWrapper />, mountNode);

export default BasicInputExampleWrapper