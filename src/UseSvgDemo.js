import React from 'react';
import SvgIcon from '@/components/SvgIcon';

const Demo = () => {
  const svgName = 'content'; // content.svg  已经放到 /src/icons/svg/  目录下

  return (<div>
    <SvgIcon iconClass={svgName} fill='#61dafb' />

      {/* operation.svg和room.svg  已经放到 /src/icons/svg/  目录下*/}
    <SvgIcon iconClass='operation' fill='#ccc' />  
    <SvgIcon iconClass='room' fill='red' />
  </div>)

};

export default Demo;