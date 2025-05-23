import React, { useEffect, useState } from "react";
import { Col, DatePicker, List, Radio, Row, Space, Tabs } from 'antd';
import { Button, Card, Checkbox, Empty, Tag, Transfer, Typography, TabsProps } from "antd";
import dayjs from "dayjs";
import { BarcodeOutlined, BugOutlined, CalendarOutlined, CiOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import Input from "antd/es/input/Input";
 
import Her from "./../../../Components/HybridEmbeddedRouter/Her";





  const onChangUnit = (unit) => {

  }

const HomePage = (props) => {
    const [userData, setUserData] = useState(null);

    const [selectedFullDate, setSelectedFullDate] = useState(dayjs());

    useEffect(()=>{
        setUserData(props.user_data)
        console.log(props);
    },[props.user_data]);


    const changeFullDate = (date) => {
        setSelectedFullDate(date);
    }

    const changeTabAction = (ev)=>{
        console.log(ev);
    };

    console.log(userData);
    
    return (
        <div style={{background: "#ededed", padding: '12px', marginTop: '22px', minHeight: "calc(100vh - 80px)"}}>
    
    <Row gutter={16}>

        
    {userData && userData.acls && userData.acls.includes(2) ? (
    <Col span={8}>
        <a href="/skud" >
      <Card variant="borderless" className="home-card">
        <div className="sk-flex">
            <div className="hc-icon">
                <CalendarOutlined/>

            </div>
            <div className="hc-content">
                <div className="hc-title">
                    SKUD
                </div>
                <div>
                    Учёт рабочего времени и посещений
                </div>
                <div>
                    Версия 0.0.9 от 24.03.2025
                </div>
            </div>
        </div>
      </Card>
      </a>
    </Col>
    ): ""}

    {userData && userData.acls && userData.acls.includes(51) ? (
            <Col span={8}>
                <a href="/newsales" >
            <Card variant="borderless" className="home-card">
                <div className="sk-flex">
                    <div className="hc-icon">
                        <BarcodeOutlined/>

                    </div>
                    <div className="hc-content">
                        <div className="hc-title">
                            Отдел продаж
                        </div>
                        <div>
                            База отдела продаж
                        </div>
                        <div>
                            Версия 0.2.9 от 26.03.2025
                        </div>
                    </div>
                </div>
            </Card>
            </a>
            </Col>
        ): ""}

{userData && userData.acls && userData.acls.includes(2) ? (
        <Col span={8}>
            <Her href='mtrack'>

            <Card variant="borderless" className="home-card">
                <div className="sk-flex">
                    <div className="hc-icon">
                        <BugOutlined />

                    </div>
                    <div className="hc-content">
                        <div className="hc-title">
                            MTrack
                        </div>
                        <div>
                            Заявки, релизы и обновления
                        </div>
                        <div>
                            2205
                        </div>
                    </div>
                </div>
            </Card>
            </Her>
        </Col>
  ): ""}
    {/* <Col span={8}>
      <Card title="Сообщить об ошибке" variant="borderless">
        <Input ></Input>
      </Card>
    </Col> */}
  </Row>

  <Row>
    {/* <Col span={16}>
        <List
        itemLayout="horizontal"
        >
            <List.Item>
                <List.Item.Meta
                icon={<CiOutlined />}
                title='Главная страница'
                description='Версия 0.0.1 от 24.03.2025' />
            </List.Item>
            <List.Item>
                <List.Item.Meta
                icon={<CiOutlined />}
                title='Отдел продаж'
                description='Версия 0.0.1 от 24.03.2025' />
            </List.Item>
            <List.Item>
                <List.Item.Meta
                icon={<CiOutlined />}
                title='СКУД'
                description='Версия 0.0.1 от 24.03.2025' />
            </List.Item>
        </List>
    </Col> */}
        ...
    </Row>      

    </div>
    )
};

export default HomePage;