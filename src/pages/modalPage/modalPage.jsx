import React, { useState } from 'react';
import { Table, Button, Modal, Form, InputNumber } from 'antd';

const { Column } = Table;

const ModalPage = () => {
  const [visible, setVisible] = useState(false);
  const [records, setRecords] = useState([]);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
      setRecords(prevRecords => [
        ...prevRecords,
        {
          key: prevRecords.length,
          type: values.type,
          amount: values.amount,
          date: new Date().toLocaleString(),
        },
      ]);
      setVisible(false);
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add Record
      </Button>
      <Table dataSource={records}>
        <Column title="Jumlah" dataIndex="type" key="type" />
        <Column title="Harga" dataIndex="amount" key="amount" />
        <Column title="Tanggal" dataIndex="date" key="date" />
      </Table>
      <Modal
        visible={visible}
        title="Add Record"
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form form={form}>
          <Form.Item
            name="type"
            label="Jumlah"
            rules={[{ required: true, message: 'Tolong isi jumlahnya!' }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="amount"
            label="Harga"
            rules={[{ required: true, message: 'Tolong isi harganya!' }]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalPage;
