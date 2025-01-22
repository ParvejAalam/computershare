// import React, { useEffect } from "react";
// import {
//   DndContext,
//   closestCenter,
//   useDraggable,
//   useDroppable,
// } from "@dnd-kit/core";
// import { arrayMove } from "@dnd-kit/sortable";
// import { useSelector, useDispatch } from "react-redux";
// import { reorderColumn, moveTask, setTasks } from "./ReduxState/TaskSlice";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Droppable Component
// function Droppable({ id, children }) {
//   const { setNodeRef } = useDroppable({ id });
//   const navigate = useNavigate();
//   const handleAdd = () => {}

//   return (
//     <div
//       ref={setNodeRef}
//       style={{
//         width: "200px",
//         minHeight: "300px",
//         backgroundColor: "#f4f4f4",
//         borderRadius: "8px",
//         padding: "10px",
//         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h3 style={{ textAlign: "center" }}>{id}</h3>
//       {children}
//       {id && <button onClick={handleAdd}>Add</button>}
//     </div>
//   );
// }

// // Draggable Component
// function Draggable({ id, title, completed }) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id,
//   });

//   const style = {
//     transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
//     userSelect: "none",
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "4px",
//     backgroundColor: "#fff",
//     boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
//   };

//   console.log("completed",completed)

//   return (
//     <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
//       {title} 
//       {/* {completed === false && <button>Add</button>} */}
//     </div>
//   );
// }

// function App() {
//   const columns = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/todos"
//         );
//         const apiData = response.data;

//         // Map "complete" tasks to column A and "incomplete" to column E
//         const mappedData = {
//           A: apiData
//             .filter((task) => task.completed === true)
//             .map((task) => ({ id: task.id, title: task.title,completed: task.completed })),
//           E: apiData
//             .filter((task) => task.completed === false)
//             .map((task) => ({ id: task.id, title: task.title,completed: task.completed })),
//         };

//         // Dispatch the processed data to Redux
//         dispatch(setTasks(mappedData));
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       }
//     };

//     fetchTasks();
//   }, [dispatch]);

//   const handleDragEnd = ({ active, over }) => {
//     if (!over) return;

//     console.log("Active Item:", active);
//     console.log("Over Item:", over);

//     const sourceColumnId = Object.keys(columns).find(
//       (key) => columns[key].some((task) => task.id === parseInt(active.id)) // Ensure correct task comparison
//     );
//     const destinationColumnId = over.id;

//     console.log("Source Column ID:", sourceColumnId);
//     console.log("Destination Column ID:", destinationColumnId);

//     if (!sourceColumnId || !destinationColumnId) return;

//     // Ensure both source and destination columns exist in state
//     if (columns[sourceColumnId] && columns[destinationColumnId]) {
//       if (sourceColumnId === destinationColumnId) {
//         const sourceColumn = Array.from(columns[sourceColumnId]);
//         const oldIndex = sourceColumn.findIndex(
//           (task) => task.id === parseInt(active.id)
//         );
//         const newIndex = sourceColumn.findIndex(
//           (task) => task.id === parseInt(over.id)
//         );

//         if (oldIndex === -1 || newIndex === -1) {
//           console.error("Task not found in source or destination column");
//           return;
//         }

//         const reorderedTasks = arrayMove(sourceColumn, oldIndex, newIndex);

//         dispatch(reorderColumn({ columnId: sourceColumnId, reorderedTasks }));
//       } else {
//         // Moving between columns: Find the task to move
//         const sourceColumn = Array.from(columns[sourceColumnId]);
//         const destinationColumn = Array.from(columns[destinationColumnId]);

//         const movedTaskIndex = sourceColumn.findIndex(
//           (task) => task.id === parseInt(active.id)
//         );
//         if (movedTaskIndex !== -1) {
//           const [movedTask] = sourceColumn.splice(movedTaskIndex, 1);

//           // Add task to the destination column
//           destinationColumn.push(movedTask);

//           dispatch(
//             moveTask({
//               sourceColumnId,
//               destinationColumnId,
//               sourceTasks: sourceColumn,
//               destinationTasks: destinationColumn,
//             })
//           );
//         } else {
//           console.error("Task not found in source column.");
//         }
//       }
//     } else {
//       console.error("Source or destination column does not exist.");
//     }
//   };

//   return (
//     <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//       <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
//         {Object.keys(columns).map((columnId) => (
//           <Droppable key={columnId} id={columnId}>
//             {columns[columnId].map((task) => (
//               <Draggable
//                 key={task.id}
//                 id={task.id.toString()}
//                 title={task.title}
//                 completed={task.completed}
//               />
//             ))}
//           </Droppable>
//         ))}
//       </div>
//     </DndContext>
//   );
// }

// export default App;
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Component/Main'
import AddTask from './AddComponent/AddTask'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/addTask' element={<AddTask/>}/>
      </Routes>
    </div>
  )
}

export default App

