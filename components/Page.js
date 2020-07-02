import React from 'react';
import { Provider } from 'react-redux';
import { object, bool } from 'prop-types';
import configureStore from '../modules/utils/store';

const Page = (Child) => {
  class PageWrapper extends React.Component {
    constructor(props) {
      super(props);
      const reduxStore = configureStore(props.isServer, props.initialState);
      this.store = reduxStore.store;
    }

    render() {
      return (
        <Provider store={this.store}>
          <Child {...this.props} />
        </Provider>
      );
    }
  }
  PageWrapper.propTypes = {
    initialState: object,
    isServer: bool,
  };
  return PageWrapper;
};

export default Page;