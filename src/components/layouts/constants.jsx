import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/product">Produk</Link>,
    key: "/product",
  },
  // {
  //   label: <Link to="/form-crud">Form-CRUD</Link>,
  //   key: "/form-crud",
  // },
  {
    label: <Link to="/form-crud-exp">Pegawai</Link>,
    key: "/form-crud-exp",
  },
  {
    label: <Link to="/modal">Keuangan</Link>,
    key: "/modal",
  },
  // {
  //   label: <Link to="/portfolio">Portfolio</Link>,
  //   key: "/portfolio",
  // },
  // {
  //   label: <Link to="/about-me">About Us</Link>,
  //   key: "/about-me",
  // },

  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "5",
  },
];
