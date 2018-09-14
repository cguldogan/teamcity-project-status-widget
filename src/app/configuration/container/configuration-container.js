import React from 'react';
import {connect} from 'react-redux';

import Configuration from '../component/configuration';
import {
  cancelConfiguration,
  saveConfiguration,
  updateHideChildProjects,
  updateRefreshPeriod,
  updateShowGreenBuilds
} from '../../redux/actions';

import TitleInputContainer from './title-input-container';
import ServiceSelectContainer from './service-select-container';


const ConfigurationContainer = connect(
  state => ({
    refreshPeriod: state.configuration.refreshPeriod,

    titleInput: <TitleInputContainer/>,
    serviceSelect: <ServiceSelectContainer/>,

    isLoadingServices: state.configuration.isLoadingServices,
    selectedService: state.configuration.selectedTeamcityService,
    serviceList: state.configuration.teamcityServices,
    serviceNotFoundMessage: state.configuration.serviceLoadErrorMessage,

    showGreenBuilds: state.configuration.showGreenBuilds,

    hideChildProjects: state.configuration.hideChildProjects
  }),
  dispatch => ({
    onRefreshPeriodUpdate: newSeconds => dispatch(updateRefreshPeriod(newSeconds)),
    onShowGreenBuildsChange: event => dispatch(updateShowGreenBuilds(event.target.checked)),
    onHideChildProjectsChange: event => dispatch(updateHideChildProjects(event.target.checked)),
    onSave: () => dispatch(saveConfiguration()),
    onCancel: () => dispatch(cancelConfiguration())
  })
)(Configuration);

ConfigurationContainer.propTypes = {};


export default ConfigurationContainer;
