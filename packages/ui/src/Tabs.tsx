import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'react-aria-components';

const _Tabs = (props) => {
    return <Tabs {...props} />
}

const _TabList = (props) => {
    return <TabList {...props} />
}

const _Tab = (props) => {
    return <Tab {...props} />
}

const _TabPanels = (props) => {
    return <TabPanels {...props} />
}

const _TabPanel = (props) => {
    return <TabPanel {...props} />
}


export {
    _Tabs as Tabs,
    _TabList as TabList,
    _Tab as Tab,
    _TabPanels as TabPanels,
    _TabPanel as TabPanel,
};