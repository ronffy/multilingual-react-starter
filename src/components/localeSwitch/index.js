/**
 * localeSwitch组件
 * 语言切换下拉框组件
 * @author ronffy
 */
import React from 'react';
import styles from './index.less';
import locale from '../locale-provider/default';
import selectList from './selectList';

const { code: defalutLocaleCode } = locale;

class LocaleSwitch extends React.PureComponent {
  handleChange = (e) => {
    const value = e.target.value;
    const { protocol, host } = window.location;
    window.location.href = `${protocol}//${host}/${value}/home`; 
  }
  render() {
    return (
      <div className={styles.localeSwitchRoot}>
        <select onChange={this.handleChange} value={this.props.localeCode || defalutLocaleCode}>
          {
            selectList.map(({ value, localeCode }) => <option key={localeCode} value={localeCode}>{value}</option>)
          }
        </select>
      </div>
    )
  }
}

export default LocaleSwitch;
