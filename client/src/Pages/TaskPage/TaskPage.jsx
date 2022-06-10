import React from 'react'
import styles from "./TaskPage.module.scss"

export const TaskPage = () => {
    return (
        <div className={styles.taskpage}>

            <div className={styles.card}>
                <div className={styles.cardInner}>
                    <div className={styles.cardInner__title}>Заголовок задачи</div>
                    <div className={styles.cardInner__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, commodi.</div>
                    <div className={styles.cardInner__date}>10.06.2022</div>
                </div>
            </div>

        </div>
    )
}
