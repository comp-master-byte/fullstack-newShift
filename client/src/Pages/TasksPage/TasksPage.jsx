import React, { useState } from 'react'
import styles from "./TasksPage.module.scss"
import { Card } from "../../components/Card/Card.jsx"
import { Board } from "../../components/Board/Board.jsx"
import { DropWrapper } from "../../components/DropWrapper/DropWrapper.jsx"
import { statuses, data } from '../../data/index.js'

export const TasksPage = () => {

    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [...newItems];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    return (
        <div className={styles.row}>
            {statuses.map(s => {
                return (
                    <div key={s.status} className={styles.colWrapper}>
                        <h2 className={styles.colHeader}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Board>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Card key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Board>
                        </DropWrapper>
                    </div>
                );
            })}
        </div>
    )
}
