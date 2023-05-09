import { Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import { MENU_ITEM } from "../constants";
import { Link } from "react-router-dom";
import { lifeclass } from "../../../assets/index.jsx";
import { SearchOutlined } from "@ant-design/icons";
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import {  Col, Space, Button } from "antd";
import "./headerComponent.css";



const HeaderComponent = () => {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);


  return (
    <Header
      style={{
        backgroundColor: "white",
        // boxShadow: '1px 1px 1px #D3D3D3',

        position: "sticky",
        top: 0,
        zIndex: 3,
        width: "100%",
      }}
    >
      {/* <Row justify="space-between">
        <Link to="/">
          <div
            style={{
              float: "left",
              width: 120,
              height: 45,
              margin: "16px 24px 16px 0",
              backgroundImage: `url(${lifeclass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",


            }}
            onClick={() => setCurrent("")}
          />
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          items={MENU_ITEM}
          disabledOverflow
          onClick={onClick}
          selectedKeys={[current]}
        />
      </Row> */}
              <Row justify="center" align="middle">
          <Col span={19}>
            <Row justify="space-between">
              <Space className="company" wrap direction="horizontal">
                <Link to="/">
                    <img className="alta-logo" src={lifeclass} alt="" srcset="" />
                </Link>
                <Search placeholder="Search product" onSearch={onSearch} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                 />
                              <Menu
                className="nav-link"
                theme="light"
                mode="horizontal"
                onClick={onClick}
                selectedKeys={[current]}
                items={MENU_ITEM}
                disabledOverflow
              />
              </Space>

              <Space className="company" wrap direction="horizontal">
              <div style={{
                }}>
                            {/* <Button type="primary"style={{ backgroundColor: '#2A2F4F', borderColor: '#2A2F4F' }}>Masuk ┃ Daftar</Button> */}
              </div>
              </Space>

            </Row>
            
          </Col>
        </Row>
    </Header>
  );
};

export default HeaderComponent;
