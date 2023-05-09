import React, { useState } from "react";
import Gap from "../../components/gap/Gap";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./query/product-query";
import { Card, Col, Input, Result, Row } from "antd";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { cardsData } from './constan';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { Progress } from 'antd';
import "./productPage.css";



const ProductPage = () => {
  return (
<div>
  <h1>Data Produk</h1>
  <Row gutter={16}>
              {cardsData.map((card, index) => (
                <Col span={4} key={index}>
                  <Card cover={<img alt="Card Image" className="gambar" src={card.Image} />}>
                    <Card.Meta title={card.title} description={card.price}/>
                    <p>{`Stok ${card.stok}`}</p>
                     
                  </Card>
                </Col>
              ))}
            </Row>
</div>
  );
};

export default ProductPage;
