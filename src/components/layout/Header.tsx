import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Heading Image */}
      <div className="header__top">
        <div className="header__left">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/swphoathanhly.appspot.com/o/Icon%2FHeading%2FHoa%20(2).png?alt=media&token=c5cd5b8b-f5c2-4734-b917-7425bc3fb17b"
            alt="Logo"
            className="header__logo"
            width={100}
          />
        </div>

        <div className="header__center">
          <img
            src="/assets/images/banner.png"  // Heading image
            alt="Heading Banner"
            className="header__banner"
          />
        </div>

        <div className="header__right">
          <div className="header__buttons">
            <button className="header__login" onClick={() => navigate("/login")}>
              <UserOutlined /> Đăng nhập
            </button>
            <button className="header__register">
              <UserAddOutlined /> Đăng ký
            </button>
          </div>
        </div>
      </div>

      <div className="line-separator"></div>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar__menu">
          <li>Trang chủ</li>
          <li>Tất cả sản phẩm</li>
          <li>Hoa theo sự kiện</li>
          <li>Hoa theo lô</li>
          <li>Blog</li>
          <li>Liên hệ</li>
          <li>
            <div className="header__search">
              <input type="text" placeholder="Tìm hoa..." />
              <button className="header__search-btn">🔍</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
