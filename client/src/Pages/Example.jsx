import React, { useState } from 'react'
import styles from "./TaskPage.module.scss"

export const TaskPage = () => {

    const [boards, setBoards] = useState([
        { id: 1, title: "Создать", items: [{ id: 1, title: "Задача 1" }, { id: 2, title: "Задача 2" }] },
        { id: 2, title: "Проверить", items: [{ id: 3, title: "Задача 3" }, { id: 4, title: "Задача 4" }] },
        { id: 3, title: "Сделано", items: [{ id: 5, title: "Задача 5" }, { id: 6, title: "Задача 6" }] },
    ])

    const [currentBoard, setCurrentBoard] = useState()
    const [currentItem, setCurrentItem] = useState()

    const dragOverHandler = e => {
        e.preventDefault()
        if (e.target.className == styles.item) {
            e.target.style.boxShadow = "0 3px 4px gray"
        }
    }

    const dragLeaveHandler = e => {
        e.target.style.boxShadow = "none"
    }

    const onDragStartHandler = (e, board, item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const onDragEndHandler = e => {
        e.target.style.boxShadow = "none"
    }

    const onDropHandler = (e, board, item) => {
        e.preventDefault()
        e.target.style.boxShadow = "none"

        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    const dropCardHandler = (e, board) => {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    return (
        <div className={styles.app}>
            {boards.map(board =>
                <div
                    key={board.id}
                    className={styles.board}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, board)}
                >
                    <div className={styles.title}>{board.title}</div>
                    {board.items.map(item =>
                        <div
                            onDragOver={e => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={e => onDragStartHandler(e, board, item)}
                            onDragEnd={e => onDragEndHandler(e)}
                            onDrop={e => onDropHandler(e, board, item)}
                            draggable={true}
                            key={item.id}
                            className={styles.item}
                        >
                            {item.title}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
