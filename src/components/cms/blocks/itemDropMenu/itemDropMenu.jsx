import React from 'react';
import PropTypes from 'prop-types';

// import {
//   itemDropMenuStyles
// } from './itemDropMenu.styles.js';

import {
  DropdownMenu,
} from 'qe-react-components-web';

const ItemDropMenu = ({
  uuid,
  onClickEdit,
  onClickDelete,
  ...rest
}) => {
  return (
    <DropdownMenu
      menuItems={[
        {
          onClick: () => onClickEdit(uuid),
          key: 'edit',
          label: 'Edit',
        },
        {
          onClick: () => onClickDelete(uuid),
          key: 'delete',
          label: 'Delete',
        },
      ]}
    >
      More
    </DropdownMenu>
  );
};

ItemDropMenu.propTypes = {
  uuid: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,

};

export default ItemDropMenu;
