import React from "react";
import { Form, Input, Button } from "antd";
import './fill.css'

function Fill() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contact__fill">
      <div className="contact__fill-container max__width">
        <div className="contact__fill-google">
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.5196579332967!2d105.80363461667176!3d20.998928362060763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca2cd3fffff%3A0xd2d82eaa29579516!2zMzUgTMOqIFbEg24gVGhpw6ptLCBUaGFuaCBYdcOibiBUcnVuZywgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1640171581846!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
        <div className="contact__fill-form">
            <p>Gửi ý tưởng hoặc đề nghị của bạn tại đây</p>
            <Form
              name="contact"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Xin hãy điền họ và tên" }]}
              >
                <Input placeholder="Họ và tên" />
              </Form.Item>

              <Form.Item
                name="phonenumber"
                rules={[
                  { required: true, message: "Xin hãy điền số điện thoại" },
                ]}
              >
                <Input placeholder="Số điện thoại" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Xin hãy điền Email",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="text"
                rules={[
                  { required: true, message: "Xin hãy điền nội dung yêu cầu" },
                ]}
              >
                <Input placeholder="Nội dung" />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
              >
                Đăng ký ngay
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Fill;
