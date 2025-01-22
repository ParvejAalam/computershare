import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
      A: [],
      E: [],
      // Add other columns if necessary
    },
    reducers: {
      setTasks(state, action) {
        // Directly set the columns based on API response
        state.A = action.payload.A || [];
        state.E = action.payload.E || [];
      },
      reorderColumn(state, action) {
        const { columnId, reorderedTasks } = action.payload;
        state[columnId] = reorderedTasks;
      },
      moveTask(state, action) {
        const { sourceColumnId, destinationColumnId, sourceTasks, destinationTasks } = action.payload;
        state[sourceColumnId] = sourceTasks;
        state[destinationColumnId] = destinationTasks;
      },
    },
  });
  
  export const { setTasks, reorderColumn, moveTask } = tasksSlice.actions;
  export default tasksSlice.reducer;
  