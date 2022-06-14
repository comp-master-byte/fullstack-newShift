import React, { Fragment, useRef } from 'react';
import styles from "./Card.module.scss";
import cn from "classnames";
import { useDrag, useDrop } from 'react-dnd';
import { useNavigate } from "react-router-dom";
import { ITEM_TYPE } from '../../data/types';
import moment from "moment";
import { useEffect } from 'react';

const CURRENT_DATE = moment().format("DD.MM.YYYY");
const MAX_CONTENT_LENGTH = 140;

export const Card = (props) => {

    const { item, index, moveItem, status } = props;

    let slicedContent = item.content.split(" ").slice(0, MAX_CONTENT_LENGTH).join(" ");
    let ifEquilToMax = slicedContent.split(" ").length === 140 ? slicedContent + "..." : slicedContent;

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
        }),
        canDrag: item.status === "done" ? false : true
    });

    const editCardRoute = () => navigate(`/edit/${item.id}`);

    drag(drop(ref));

    useEffect(() => {

    }, [])

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={cn(styles.item, {
                    [styles.overDeadline]: CURRENT_DATE >= item.taskAssignedIn
                })}
                onClick={editCardRoute}
            >
                <div className={styles.colorBar} style={{ backgroundColor: status.color }} />
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemContent}>{ifEquilToMax}</div>
                <div className={styles.itemFooter}>
                    <div className={styles.itemDeadline}>{item.taskAssignedIn}</div>
                    <div className={styles.itemStatus}>{item.icon}</div>
                </div>
            </div>
        </Fragment>
    )
}
