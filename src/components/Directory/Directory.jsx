import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};
export default connect(mapStateToProps)(Directory);
