import React from 'react';
import './table.css';
import { Table } from 'antd'
import { columns } from './dummyData';


export default function index({profiles}) {
    return (
        <div>
            <Table
                dataSource={profiles}
                columns={columns}
                pagination={
                    { pageSize: 20 }
                }
            />;
        </div>
    )
}
