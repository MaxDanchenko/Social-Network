import React, {useState} from 'react'
import './Game.css'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';


const puzzle = [
    {id: '1', thumb: require('./puzzle3parts/image_part_002.jpg')},
    {id: '2', thumb: require('./puzzle3parts/image_part_003.jpg')},
    {id: '3', thumb: require('./puzzle3parts/image_part_001.jpg')},
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
        <div className={'mainWrapper'}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable direction="horizontal" droppableId={'puzzles'}>
                    {(provided) => (
                        <div className={'puzzles'} {...provided.droppableProps} ref={provided.innerRef}>
                            {puzzles.map(({id, thumb}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <div
                                                     className={`${'puzzleItem1'} ${'commonPuzzleStyles'}`}>
                                                    <img className={'puzzleImage'} src={thumb} alt="icon"/>
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

// <div className={`${styles.puzzleItem2} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/2.jpg')} alt="icon"/>
// </div>
// <div className={`${styles.puzzleItem3} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/3.jpg')} alt="icon"/>
// </div>
// <div className={`${styles.puzzleItem4} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/4.jpg')} alt="icon"/>
// </div>
// <div className={`${styles.puzzleItem5} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/5.jpg')} alt="icon"/>
// </div>
// <div className={`${styles.puzzleItem6} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/6.jpg')} alt="icon"/>
// </div>
// <div className={`${styles.puzzleItem7} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/7.jpg')} alt="icon"/>
// </div>
// <div className={`${styles.puzzleItem8} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/8.jpg')} alt="icon"/>
// </div>
// <div className={`${styles.puzzleItem9} ${styles.commonPuzzleStyles}`}>
//     <img className={styles.puzzleImage} src={require('./ImagesForPuzzleGame/9.jpg')} alt="icon"/>
// </div>