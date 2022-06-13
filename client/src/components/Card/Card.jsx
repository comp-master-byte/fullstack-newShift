import React, { Fragment, useState, useRef } from 'react';
import styles from "./Card.module.scss";
import { useDrag, useDrop } from 'react-dnd';
import { useNavigate } from "react-router-dom";
import { ITEM_TYPE } from '../../data/types';

export const Card = (props) => {

    const { item, index, moveItem, status } = props;
    const navigate = useNavigate();

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { ...item, index },
        type: ITEM_TYPE,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const editCardRoute = () => navigate(`/edit/${item.id}`);

    drag(drop(ref));

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={styles.item}
                onClick={editCardRoute}
            >
                <div className={styles.colorBar} style={{ backgroundColor: status.color }} />
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemContent}>{item.content}</div>
                <div className={styles.itemFooter}>
                    <div className={styles.itemDeadline}>
                        <div>{item.taskAssignedIn}</div>
                        <div className={styles.middleBorder} />
                        <div>{item.taskFinishedIn}</div>
                    </div>
                    <div className={styles.itemStatus}>{item.icon}</div>
                </div>
            </div>
        </Fragment>
    )
}
