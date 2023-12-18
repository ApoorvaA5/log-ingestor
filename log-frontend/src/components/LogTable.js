import React, { useState, useEffect } from 'react';
import { Table, Space, Input, Button, DatePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { RangePicker } = DatePicker;

const LogTable = () => {
  const [logs, setLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [resourceIdFilter, setResourceIdFilter] = useState('');
  const [timestampRange, setTimestampRange] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/logs');
      setLogs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filteredLogs = logs.filter(
      (log) =>
        log.level.includes(levelFilter) &&
        log.message.includes(searchTerm) &&
        log.resourceId.includes(resourceIdFilter) &&
        moment(log.timestamp).isBetween(timestampRange[0], timestampRange[1])
    );

    setLogs(filteredLogs);
  };

  const columns = [
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
      sorter: (a, b) => a.level.localeCompare(b.level),
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      sorter: (a, b) => a.message.localeCompare(b.message),
    },
    {
      title: 'Resource ID',
      dataIndex: 'resourceId',
      key: 'resourceId',
      sorter: (a, b) => a.resourceId.localeCompare(b.resourceId),
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
      sorter: (a, b) => moment(a.timestamp).unix() - moment(b.timestamp).unix(),
      render: (text) => moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: 'Trace ID',
      dataIndex: 'traceId',
      key: 'traceId',
      sorter: (a, b) => a.traceId.localeCompare(b.traceId),
    },
    {
      title: 'Span ID',
      dataIndex: 'spanId',
      key: 'spanId',
      sorter: (a, b) => a.spanId.localeCompare(b.spanId),
    },
    {
      title: 'Commit',
      dataIndex: 'commit',
      key: 'commit',
      sorter: (a, b) => a.commit.localeCompare(b.commit),
    },
    {
      title: 'Parent Resource ID',
      dataIndex: 'metadata.parentResourceId',
      key: 'parentResourceId',
      sorter: (a, b) => a.metadata.parentResourceId.localeCompare(b.metadata.parentResourceId),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div>
      <Space>
        <Input
          placeholder="Search by message"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Input
          placeholder="Filter by level"
          onChange={(e) => setLevelFilter(e.target.value)}
        />
        <Input
          placeholder="Filter by resource ID"
          onChange={(e) => setResourceIdFilter(e.target.value)}
        />
        <RangePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          onChange={(dates) => setTimestampRange(dates)}
        />
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Space>

      <Table columns={columns} dataSource={logs} rowKey={(record) => record._id} />
    </div>
  );
};

export default LogTable;
