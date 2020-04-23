import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../../styles/styles.pcss';

import General from '../General';
import Sidebar from '../Sidebar/Sidebar';
import Filters from '../Filters';
import Stealth from '../Stealth';
import Whitelist from '../Whitelist';
import UserFilter from '../UserFilter';
import Miscellaneous from '../Miscellaneous';
import About from '../About';
import Footer from '../Footer/Footer';

function App() {
    return (
        <HashRouter hashType="noslash">
            <div className="page container">
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={General} />
                        <Route path="/filters" component={Filters} />
                        <Route path="/stealth" component={Stealth} />
                        <Route path="/whitelist" component={Whitelist} />
                        <Route path="/user-filter" component={UserFilter} />
                        <Route path="/miscellaneous" component={Miscellaneous} />
                        <Route path="/about" component={About} />
                        <Route component={General} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </HashRouter>
    );
}

export default App;
