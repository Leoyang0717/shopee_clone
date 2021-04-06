import React from 'react';
import FollowListComponent from './followListComponent';

function NavBarComponent() {
  const titleGroup = ['賣場中心', '下載', '追蹤我們'];
  return (
    <div className="flex justify-between">
      <FollowListComponent title={titleGroup} />
    </div>
  );
}

export default NavBarComponent;
