import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';

export default connect(
  state => ({
    statuses: state.statuses 
  })
)(Board);