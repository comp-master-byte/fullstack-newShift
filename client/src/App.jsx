import React from 'react'
import styles from "./styles/main.module.scss"
import node from "./images/node.jpg"

export const App = () => {
    return (
        <div>
            <h1 className={styles.title}>Webpack configured!</h1>
            <img src={node} alt="" />
        </div>
    )
}
