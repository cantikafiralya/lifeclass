import React from "react";
import reactLogo from "../../assets/images/react.svg";
import { Button, Space } from "antd";
import { CancelButton } from "../../components/buttonComponent/ButtonComponent";
import "./homePage.css";
import Gap from "../../components/gap/Gap";
import { lifeclass } from "../../assets/index.jsx";
import { InstagramOutlined, TwitterOutlined, YoutubeOutlined, GithubOutlined, FacebookOutlined,WhatsAppOutlined } from "@ant-design/icons";





const HomePage = () => {


  return (
    <div className="homepe">

<br />
        <img src={lifeclass} className="logol" alt="logol" />
        <br />
        <h1>Database yang berisi informasi mengenai Toko 
        Lifeclass, 
        sebuah toko yang biasanya menjual berbagai macam peralatan tulis dan perangkat portofocopyan. </h1>
        {/* <Space wrap direction="horizaontal">
        <a href="https://wa.me/<number>" target="_blank" rel="noopener noreferrer">

<Button
  className="btn-link"
  shape="circle"
  icon={<WhatsAppOutlined  />}
  size="big"
/>
    </a>
<a href="https://www.instagram.com/cantikaf111/" target="_blank" rel="noopener noreferrer">

                <Button
                  className="btn-link"
                  shape="circle"
                  icon={<InstagramOutlined />}
                  size="big"
                />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">

                <Button
                  className="btn-link"
                  shape="circle"
                  icon={<TwitterOutlined />}
                  size="middle"
                />
                                    </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">

                <Button
                  className="btn-link"
                  shape="circle"
                  icon={<YoutubeOutlined />}
                  size="middle"
                />
                                    </a>

                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">

                <Button
                  className="btn-link"
                  shape="circle"
                  icon={<FacebookOutlined />}
                  size="middle"
                />                    </a>



              </Space> */}
              
    </div>
  );
};

export default HomePage;
