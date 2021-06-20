import React from 'react'
import { Tab } from 'semantic-ui-react'
import AdminArticles from '../articles/admin/articleAdmin'
import AddArticle from '../articles/admin/addArticle'
const panes = [
    {
        menuItem: 'Tab 1',
        render: () => <Tab.Pane attached={false}><AdminArticles /></Tab.Pane>,
    },
    {
        menuItem: 'Tab 2',
        render: () => <Tab.Pane attached={false}><AddArticle /></Tab.Pane>,
    },

]

const TabExampleSecondaryPointing = () => (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing
