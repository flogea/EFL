import { createSlice } from '@reduxjs/toolkit';

type ContentInformation = {
  id: string;
  data: {
    blockName:
      | 'TextBlock'
      | 'FileBlock'
      | 'InputBlock'
      | 'PictureBlock'
      | 'TableBlock'
      | 'TitleBlock';
    content: {
      text?: string;
      url?: string;
      label?: string;
      rows?: number;
      cols?: number;
      tableName?: string;
      tableContent?: number[] | string[];
      inputType?:
        | 'button'
        | 'checkbox'
        | 'date'
        | 'email'
        | 'file'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'tel'
        | 'text';
      placeholder?: string;
      title?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    };
    options?: {
      onChange?: () => void;
      contentEditable?: boolean;
      onClick?: () => void;
      onDoubleClick?: () => void;
      disabled?: boolean;
    };
  };
};

interface IConstructorBlocks {
  blocks: ContentInformation[];
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
