/**
 * home首页
 * @author ronffy
 */
import React from 'react';
import { connect } from 'dva';
import { Demo, DemoList } from '../../components';
import styles from './index.less';

function Home() {
  return (
    <div className={styles.root}>
      <Demo />
      <DemoList />
      
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
