'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Devices from '../components/Devices';
import * as actions from '../actions/api/devices';
import * as uiActions from '../actions/ui/devices';
import * as cmdActions from '../actions/api/commands';

const mapDispatchToProps = (dispatch) => {
  return {
    api: bindActionCreators(actions, dispatch),
    ui: bindActionCreators(uiActions, dispatch),
    cmd: bindActionCreators(cmdActions, dispatch)
  };
};

function mapStateToProps (state) {
  return {
    devices: state.devices,
    selectionMenuVisible: state.devices.selectionMenuVisible,
    selecitonMenuAnchor: state.devices.selectionMenuAnchor
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Devices);
