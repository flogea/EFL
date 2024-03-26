import React from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import { EditBlock, InlineMenu, SideMenu, TextBlock } from '../../components/labComponents';
import { Link } from 'react-router-dom';

function ContructorPage() {
  const { blocks } = useAppSelector((state) => state.labConstructor);
  console.log(blocks);

  const block = {
    TextBlock: <TextBlock />,
  }

  React.useEffect(() => {
    console.log(blocks);
  }, [blocks]);

  console.log(blocks[0]?.data.blockName)

  return (
    <div className="constructor">
      <SideMenu />

      {blocks &&
        blocks.map((oneblock, index) => (
          <div key={index}>
            <EditBlock id={oneblock.id}>{block[oneblock.data.blockName]}</EditBlock>
          </div>
        ))}

      <InlineMenu />
      {/* <button>
        <Link to="/preview">Preview</Link>
      </button> */}
    </div>
  );
}

export default ContructorPage;
