import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route, Redirect, Switch } from 'react-router-dom'

import SettingsNav from './SettingsNav'
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'

const SettingsDashboard = () => {
    return (
        <Grid>
            <GridColumn width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic'/>
                    <Route path='/settings/basic' component={BasicPage}/>
                    <Route path='/settings/about' component={AboutPage}/>
                    <Route path='/settings/photos' component={PhotosPage}/>
                    <Route path='/settings/account' component={AccountPage}/>
                </Switch>
            </GridColumn>
            <GridColumn width={4}>
                <SettingsNav></SettingsNav>
            </GridColumn>
        </Grid>
    )
}

export default SettingsDashboard
