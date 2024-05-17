import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BookingComponent } from './bookingcomponent/bookingcomponent';
import Faq from './faqcomponent/faqcomponent';
import BookingFAQ from './faqbooking/faqbooking';
import { Home } from './home/home';
import Feedback from './feedback/feedbackform';
import HelpCentre from './helpcentre/helpcentre';
import Help from './help/help';
import { Searchcomponent } from './serachcomponent/serach.component';
import AccountManagement from './accountmangement/accountmangement';
import AccountSettings from './accountsetting/accountsetting.component';
import { CustomerSupport } from './customersupport/customersupport';


function AppRouter() {
    return (
        <Routes>
            <Route path="/bookings" element={<BookingComponent />} />
            {/* Add other routes as needed */}
            <Route path="/payment" element={<Faq />} />
            <Route path="/faq" element={<BookingFAQ />} />
            <Route path="/home" element={<Home />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/helpcentre" element={<HelpCentre />} />
            <Route path="/help" element={<Help />} />
            <Route path="/" element={<Searchcomponent />} />
            <Route path="/account" element={<AccountManagement />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/customersupport" element={<CustomerSupport />} />
        </Routes>
    );
}

export default AppRouter;
