'use strict';

import * as actions from '../actions/ui/login';

const initialState = {
  endpoint: '',
  formVisible: false
};

export default function login (state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
