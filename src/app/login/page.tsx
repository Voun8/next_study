'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};



const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Page: React.FC = () => {
  const router = useRouter()
  
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(values),
    })
    await res.json();
    router.push('/dashboard')
  };
  return (
    <div className='container mx-auto flex justify-center items-center pt-48'>
      <Form
        className='w-96'
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ username: 'admin', password: 'admin123' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Page;