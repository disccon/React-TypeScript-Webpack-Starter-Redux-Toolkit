import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import '../../i18n/config'
import Header from '../Header/Header'
import MainMenu from '../MainMenu/MainMenu'
import classNames from 'classnames/bind'
import './reset.css'
import styles from './globalStyle.scss'

const cx = classNames.bind(styles)

const Root: React.FC = () => (
  <>
    <Header />
    <div className={cx('menu-wrapper')}>
      <MainMenu />
      <Switch>
        {/*<Route path='/vlan' component={VlanPage} />*/}
        <Redirect to='/' />
      </Switch>
    </div>
  </>
)

export default Root
