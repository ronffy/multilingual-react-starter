/**
 * demo，不会到生产
 * @author ronffy
 */
import React from 'react';
import LocaleProvider from '../locale-provider/LocaleProvider';
import defaultLocale from '../locale-provider/default';
import styles from './index.less';

class Demo extends React.PureComponent {
  getPreviewFile(locale) {
    const { previewFile } = this.props;
    // 用户使用Demo组件时，Demo组件内优先展示用户自定义的previewFile属性，其次使用locale上的属性
    return previewFile === undefined ? locale.previewFile : previewFile;
  }
  getHref = (e) => {
    return;
    // var player = new window.Aliplayer({
    //   id: 'WHER',
    //   width: '100%',
    //   autoplay: true,
    //   isLive: true,
    //   //支持播放地址播放,此播放优先级最高
    //   source: 'http://live1.sunlands.wang/demo/abcde.flv?auth_key=1537187487-0-0-73b9be918def3db2b3f0f311a7981af1',
    // });

    // player.on('ready', (e) => {
    //   console.log('播放器ready', e);
    // })
    // player.on('play', (e) => {
    //   console.log('播放器ended', e);
    // })

  }
  renderDemo = (locale) => {
    return (
      <div className={styles.demoRoot}>
        <div className={styles.title}>
          {this.getPreviewFile(locale)}
        </div>
        <div id="WHER" ref={this.getHref}></div>
      </div>
    )
  }
  render() {
    // componentName 对应zh_CN默认对象的一级属性名
    return (
      <LocaleProvider
        componentName="Upload"
        defaultLocale={defaultLocale.Select}
      >
        {this.renderDemo}
      </LocaleProvider>
    )
  }
}

Demo.propTypes = {
};

export default Demo;
