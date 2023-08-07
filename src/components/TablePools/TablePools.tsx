import styles from './TablePools.module.css';

import { useContext } from 'react';

import { AppContext, Civ, Pool } from '../../contexts';

import type { ColumnsType } from 'antd/es/table';
import { ConfigProvider, Space, Table, ThemeConfig } from 'antd';

const TablePool: React.FC<Pool> = ({ id, civs }) => {
    const columns: ColumnsType<Civ> = [
        {
            title: `Player ${id}`,
            dataIndex: 'title',
            key: id,
            width: 180,
            render: (title, record) => (
                <Space>
                    <img
                        src={record.icon}
                        alt=''
                        className={styles.poolImage}
                    />
                    <h2>{title}</h2>
                </Space>
            ),
        },
    ];

    const dataSource = civs.map((c) => ({
        key: c.id,
        ...c,
    }));

    return (
        <Table columns={columns} dataSource={dataSource} pagination={false} />
    );
};

const theme: ThemeConfig = {
    token: {
        paddingContentVerticalLG: 5,
    },
};

export const TablePools: React.FC = () => {
    const { pools } = useContext(AppContext);

    return (
        <ConfigProvider theme={theme}>
            {pools.length > 0 && (
                <div className={styles.wrapper}>
                    <Space>
                        {pools.map((p) => (
                            <TablePool key={p.id} {...p} />
                        ))}
                    </Space>
                </div>
            )}
        </ConfigProvider>
    );
};
