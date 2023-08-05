import styles from './TablePools.module.css';

import { useContext } from 'react';

import { AppContext, Pool } from '../../contexts';

import type { ColumnsType } from 'antd/es/table';
import { Space, Table } from 'antd';

const columns: ColumnsType<Pool> = [
    {
        title: 'Player',
        dataIndex: 'key',
        key: 'title',
        rowScope: 'row',
        width: 50,
    },
    {
        title: 'Choice',
        dataIndex: 'civs',
        key: 'Choice',
        render: (text, record) => (
            <Space>
                {record.civs.map((c) => (
                    <Space key={c.id}>
                        <img src={c.icon} alt='' className={styles.poolImage} />
                        <h2>{c.title}</h2>
                    </Space>
                ))}
            </Space>
        ),
    },
];

export const TablePools: React.FC = () => {
    const { pools } = useContext(AppContext);

    const dataSource = pools.map((p) => ({ key: p.id, ...p }));

    return (
        <>
            {pools.length > 0 && (
                <div className={styles.wrapper}>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </div>
            )}
        </>
    );
};
