import React from "react";
import { Layout, Row, Col, Space, Button } from "antd";
import { InstagramOutlined, TwitterOutlined, YoutubeOutlined, GithubOutlined, FacebookOutlined, WhatsAppOutlined } from "@ant-design/icons";


const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
Copyrights ©2023 LifeClass.
<br />
<br />
<Space wrap direction="horizontal">
        <a href="https://wa.me/+6281333144271" target="_blank" rel="noopener noreferrer">

<Button
  className="btn-link"
  shape="circle"
  icon={<WhatsAppOutlined  />}
  size="middle"
/>
</a>

<a href="https://www.instagram.com/cantikaf111/" target="_blank" rel="noopener noreferrer">

                <Button
                  className="btn-link"
                  shape="circle"
                  icon={<InstagramOutlined />}
                  size="middle"
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



              </Space>
    </Footer>
  );
};

export default FooterComponent;
