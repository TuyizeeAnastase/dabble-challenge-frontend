import { Fragment } from "react";
import "./App.css";
import { Datatable } from "./components/Datatable";
import {Footer} from './components/Footer'

function App() {
  return (
    <Fragment>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div className="container-fluid">
            <div className="text-xl text-black">
              <a className="text-xl text-black" href="/#">
                DabbleLab
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Datatable />
      <Footer/>
    </Fragment>
  );
}

export default App;
