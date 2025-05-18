import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleHelpSidebarContentsPage from "../components/app_components/HelpSidebarContentsPage/SingleHelpSidebarContentsPage";
import HelpSidebarContentProjectLayoutPage from "../components/app_components/HelpSidebarContentsPage/HelpSidebarContentProjectLayoutPage";
import SingleCompanyPositionMappingsPage from "../components/app_components/CompanyPositionMappingsPage/SingleCompanyPositionMappingsPage";
import CompanyPositionMappingProjectLayoutPage from "../components/app_components/CompanyPositionMappingsPage/CompanyPositionMappingProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
<Route path="/helpSidebarContents/:singleHelpSidebarContentsId" exact element={<SingleHelpSidebarContentsPage />} />
<Route path="/helpSidebarContents" exact element={<HelpSidebarContentProjectLayoutPage />} />
<Route path="/companyPositionMappings/:singleCompanyPositionMappingsId" exact element={<SingleCompanyPositionMappingsPage />} />
<Route path="/companyPositionMappings" exact element={<CompanyPositionMappingProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
        </Routes>
    );
}

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
