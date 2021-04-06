import React from 'react';

function FollowListComponent(props) {
  const { title } = props;
  return (
    <div className="flex">
      {
        title.map((text, index) => {
          if (index === 1) {
            return <div key={text} className="border-r border-l">{text}</div>;
          }
          return <div key={text}>{text}</div>;
        })
      }
    </div>
  );
}

export default FollowListComponent;
