import React, { useState } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import { Picker, List, InputItem , Button} from 'antd-mobile'
import { createForm } from 'rc-form'
import {getAddresData } from './data';
import { createHashHistory } from 'history'; // 如果是hash路由

const Item = List.Item;
const history = createHashHistory();

const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px',position:'relative',borderBottom:0 }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);

function Example() {
    const [pickerValue, setPickerValue] = useState("");

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

    const { getFieldProps, getFieldError } = this.props.form;

    return (
        <div>
            <Picker
                title="选择地区"
                extra="请选择地区"
                data={antdDistrict}
                value={pickerValue}
                onChange={v => setPickerValue(v)}
                onOk={v => setPickerValue(v)}
                onClick={()=>{console.log('xx')}}
            >
                <CustomChildren></CustomChildren>
            </Picker>
            <form>
                <List
                    renderHeader={() => 'Form Validation'}
                    renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
                >
                    <InputItem
                    {...getFieldProps('account', {
                        // initialValue: 'little ant',
                        rules: [
                        { required: true, message: 'Please input account' },
                        { validator: this.validateAccount },
                        ],
                    })}
                    clear
                    error={!!getFieldError('account')}
                    onErrorClick={() => {
                        alert(getFieldError('account').join('、'));
                    }}
                    placeholder="please input account"
                    >Account</InputItem>
                    <InputItem {...getFieldProps('password')} placeholder="please input password" type="password">
                    Password
                    </InputItem>
                    
                    <Item>
                    <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
                    <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>Reset</Button>
                    </Item>
                </List>
                </form>
        </div>
   );
}

export default Example