import React, { useState } from "react";
import "./contact.css";
import { Modal, Button, Form, Input } from "antd";
import contact from "../../assets/images/Contact.png";

function Contact() {
  const [modalVisibile, setModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h247__navbar-links_cta-btn">
      <Button block={true} type="primary" onClick={() => setModalVisible(true)}>
        Liên hệ
      </Button>
      <Modal
        centered
        closable={false}
        visible={modalVisibile}
        width={960}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
        bodyStyle={{ padding: "1.875rem" }}
      >
        <div className="h247__navbar-links_cta-modal">
          <div className="h247__navbar-links_cta-modal_image">
            <img src={contact} alt="contact" />
          </div>
          <div className="h247__navbar-links_cta-modal_form-wrapper">
            <p>Gửi yêu cầu liên hệ</p>
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
                onClick={() => setModalVisible(false)}
              >
                Gửi thông tin
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Contact;
