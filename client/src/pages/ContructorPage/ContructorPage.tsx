import React from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import { EditBlock, InlineMenu, SideMenu } from '../../components/labComponents';

function ContructorPage() {
  const { blocks } = useAppSelector((state) => state.labConstructor);
  console.log(blocks);

  React.useEffect(() => {
    console.log(blocks);
  }, [blocks]);

  return (
    <div className="constructor">
      <SideMenu />

      {blocks &&
        blocks.map((block, index) => (
          <div key={index}>
            <EditBlock id={block.id}>{block.data}</EditBlock>
          </div>
        ))}

      <InlineMenu />
    </div>
  );
}

export default ContructorPage;
