import * as React from 'react';
import * as PropTypes from 'prop-types';

export default class LocaleProvider extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
  };

  static defaultProps = {
    locale: {},
  };

  static childContextTypes = {
    sdLocale: PropTypes.object,
  };

  getChildContext() {
    return {
      sdLocale: {
        ...this.props.locale,
      },
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
