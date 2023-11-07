import { createSlice } from '@reduxjs/toolkit';

interface IConstructorBlocks {
  blocks: any[];
}

const initialState: IConstructorBlocks = {
  blocks: [],
};

const constructorSlice = createSlice({
  name: 'labconstructor',
  initialState,
  reducers: {
    setComponents: (state, action) => {
      const { componentId, componentData } = action.payload;
      console.log(state.blocks);
      state.blocks.push({ id: componentId, data: componentData });
    },
    deleteComponent: (state, action) => {
      state.blocks = state.blocks.filter((block) => block.id !== action.payload);
    },
    moveUp: (state, action) => {
      const index = state.blocks.findIndex((block) => block.id === action.payload);
      console.log(state.blocks);
      if (index > 0) {
        state.blocks.splice(index - 1, 2, state.blocks[index], state.blocks[index - 1]);
      }
    },
    moveDown: (state, action) => {
      const index = state.blocks.findIndex((block) => block.id === action.payload);
      if (index < state.blocks.length - 1) {
        console.log();
        state.blocks.splice(index, 2, state.blocks[index + 1], state.blocks[index]);
      }
    },
  },
});

export const { setComponents, deleteComponent, moveUp, moveDown } = constructorSlice.actions;

export default constructorSlice.reducer;
