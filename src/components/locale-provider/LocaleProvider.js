import * as React from 'react';
import * as PropTypes from 'prop-types';

export default class LocaleReceiver extends React.Component {
  static contextTypes = {
    sdLocale: PropTypes.object,
  };

  getLocale() {
    const { componentName, defaultLocale = {} } = this.props;
    const { sdLocale } = this.context;
    const localeFromContext = sdLocale && sdLocale[componentName];
    return {
      ...(typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale),
      ...(localeFromContext || {}),
    };
  }

  getLocaleCode() {
    const { sdLocale } = this.context;
    const localeCode = sdLocale && sdLocale.code;
    if (sdLocale && !localeCode) {
      return 'en';
    }
    return localeCode;
  }

  render() {
    return this.props.children(this.getLocale(), this.getLocaleCode());
  }
}
