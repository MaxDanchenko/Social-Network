import React, {useState} from 'react'
import styles from './Game.module.scss'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';


const puzzle = [
    {id: '5', thumb: require('./puzzleGameInto5parts/image_part_005.jpg')},
    {id: '4', thumb: require('./puzzleGameInto5parts/image_part_004.jpg')},
    {id: '2', thumb: require('./puzzleGameInto5parts/image_part_002.jpg')},
    {id: '1', thumb: require('./puzzleGameInto5parts/image_part_001 (1).jpg')},
    {id: '3', thumb: require('./puzzleGameInto5parts/image_part_003.jpg')},
]
const Game = (props) => {
    const [puzzles, setPuzzles] = useState(puzzle)

    function handleOnDragEnd(result) {
        const items = Array.from(puzzles)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setPuzzles(items)
    }
    return (
        <div className={styles.mainWrapper}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable direction="horizontal" droppableId={'puzzles'}>
                    {(provided) => (
                        <div className={styles.puzzles} {...provided.droppableProps} ref={provided.innerRef}>
                            {puzzles.map(({id, thumb}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps}
                                                 ref={provided.innerRef}>
                                                <div
                                                    className={`${styles.puzzleItem1} ${styles.commonPuzzleStyles}`}>
                                                    <img className={styles.puzzleImage} src={thumb} alt="icon"/>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}


export default Game;
