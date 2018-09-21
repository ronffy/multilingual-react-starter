/**
 * test测试、demo，不会到生产
 * @author ronffy
 */
import React from 'react';
import { connect } from 'dva';

function Test(props) {
  const { list, loading } = props;
  if (loading.models._test) {
    return <div>请求中。。。</div>
  }
  return (
    <div>
      我是test数据：
      {
        list.length
          ? (
            <ul>
              {
                list.map(item => (<div key={item.id}>{item.title}</div>))
              }
            </ul>
          )
          : <div>暂无数据</div>
      }
    </div>
  );
}

Test.propTypes = {
};

export default connect(({ _test, loading }) => ({
  loading,
  list: _test.list,
}))(Test);
