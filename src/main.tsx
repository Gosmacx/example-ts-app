import ReactDOM from 'react-dom/client'
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import './assets/tailwind.css'

import Publish from './views/Publish'
import Notifications from './views/Notifications'
import Engage from './views/Engage'
import Listen from './views/Listen'
import Summary from './views/Summary'
import Report from './views/Report'
import SideBar from './components/SideBar'


const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HistoryRouter history={history}>
      <div className='flex w-full h-screen' >
        <SideBar/>
        <Routes>
          <Route path="/" element={<Publish />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/report" element={<Report />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/engage" element={<Engage />} />
        </Routes>
      </div>
  </HistoryRouter>
);