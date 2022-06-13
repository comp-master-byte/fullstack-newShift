import React from "react";
import styles from "./DropWrapper.module.scss"
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../data/types"
import { statuses } from "../../data";

export const DropWrapper = (props) => {

    const { onDrop, children, status } = props;

    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        }),
    });

    return (
        <div ref={drop} className={styles.dropWrapper}>
            {React.cloneElement(children, { isOver })}
        </div>
    )
};
