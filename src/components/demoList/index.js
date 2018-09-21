/**
 * 获取demoList，不会到生产
 * @author ronffy
 */
import React from 'react';
import LocaleProvider from '../locale-provider/LocaleProvider';
import styles from './index.less';

class DemoList extends React.PureComponent {
  getList = (locale) => {
    const { list } = this.props;
    return list === undefined ? locale.list : list;
  }
  getTitle = (locale) => {
    const { title } = this.props;
    return title === undefined ? locale.title : title;
  }
  state = {
    right: ''
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        right: 'zoomOutUp'
      })
    }, 1000);
  }
  renderDemoList = (locale) => {
    const list = this.getList(locale);
    const title = this.getTitle(locale);
    return (
      <div className={styles.demoListRoot}>
        <h2>{title}</h2>
        <ul className={styles.list}>
          {
            list.map(({ describe, src, key }) => (
              <li key={key} className={styles.li + ' ' + this.state.right}>
                { describe }
                <img alt="" src={src} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
  render() {
    return (
      <LocaleProvider
        componentName="compDemoList"
      >
        {this.renderDemoList}
      </LocaleProvider>
    )
  }
}

export default DemoList;
