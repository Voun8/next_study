'use client'
import React from 'react'
import { Avatar, List } from 'antd'
import { data } from '@/data'

export default function BlogList() {
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          className='!items-center'
          avatar={<Avatar src={item.avatar} />}
          title={<a href={'/blog/'+ item.id}>{item.name}</a>}
        />
      </List.Item>
    )}
  />
  )
}
