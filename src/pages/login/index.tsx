import { GoogleCircleFilled } from "@ant-design/icons";
import "./Login.scss"; // Đổi từ .css sang .scss
import { useGoogleLogin } from "@react-oauth/google";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";
import { AnyObject } from "antd/es/_util/type";

interface LoginFormValues {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      navigate("/home");
    },
  });

  const onFinish = (values: LoginFormValues) => {
    console.log("Success:", values);
    navigate("/home");
  };

  const onFinishFailed = (errorInfo: AnyObject) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <div className="login_form">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <FormItem>
            <h1>Đăng nhập</h1>
            <p>Đăng nhập tại đây để có thể xem được các sản phẩm</p>
          </FormItem>

          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input
              placeholder="Email address"
              className="login-input"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}
          >
            <Input.Password
              placeholder="Password"
              className="login-input"
            />
          </Form.Item>

          <a href="#" className="forgot-password">
            Quên mật khẩu?
          </a>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="divider">
            <span>OR</span>
          </div>

          <Form.Item>
            <Button
              onClick={() => login()}
              className="google-button"
            >
              <GoogleCircleFilled />
              Tiếp tục với Google
            </Button>
          </Form.Item>

          <div className="register">
            Bạn chưa có tài khoản?{" "}
            <a href="#">Đăng ký tại đây</a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
