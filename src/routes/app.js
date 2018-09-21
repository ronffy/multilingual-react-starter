/**
 * app 项目一级根组件
 * @author ronffy
 */
/* global window */
import React from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { withRouter } from 'dva/router'
import { LocaleSwitch } from '../components';
import styles from './app.less'
let lastHref

class App extends React.Component {
  static defaultPropTypes = {
    children: PropTypes.element.isRequired,
    dispatch: PropTypes.func,
    app: PropTypes.object,
    loading: PropTypes.object,
  }

  linkTo = (path) => {
    this.props.dispatch(routerRedux.push(path))
  }

  render() {
    const { children, loading, app } = this.props;

    const { localeCode } = app;

    const href = window.location.href

    if (lastHref !== href) {
      NProgress.start()
      if (!loading.global) {
        NProgress.done()
        lastHref = href
      }
    }

    return (
      <div className={styles.appRoot}>
        <div className={styles.lanswitch}>
          <LocaleSwitch localeCode={localeCode} />
        </div>
        {
          children
        }
        <div onClick={this.linkTo.bind(this, `/${localeCode}/_test`)}>go to test</div>
        <div onClick={this.linkTo.bind(this, `/${localeCode}/home`)}>go to home</div>
      </div>
    )
  }
}

export default withRouter(connect(({ app, materialReview, loading }) => ({ app, materialReview, loading }))(App))
