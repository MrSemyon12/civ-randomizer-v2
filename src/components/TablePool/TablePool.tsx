import styles from './TablePool.module.css';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import type { Pool, Civ } from '../../contexts';

export const TablePool: React.FC<Pool> = ({ id, civs }) => {
    const columns: ColumnsType<Civ> = [
        {
            title: `Player ${id}`,
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (
                <div className={styles.wrapper}>
                    <img
                        src={record.icon}
                        alt=''
                        className={styles.poolImage}
                    />
                    <span>{text}</span>
                </div>
            ),
        },
    ];

    const dataSource = civs.map((c) => ({ key: c.id, ...c }));

    return (
        <Table columns={columns} dataSource={dataSource} pagination={false} />
    );
};
