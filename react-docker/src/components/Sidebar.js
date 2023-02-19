import { SidebarData } from './SidebarData'
import SidebarIcon from "./SidebarIcon"
import React from 'react';
import Sidebar from 'react-sidebar';

class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
  
    render() {
      return (
        <Sidebar
            sidebar={
                <div className="Sidebar">
                <SidebarIcon />
                <ul 
                    className='SidebarList' 
                    container={window.document.body}
                    variant="permanent"
                >
                    {/* map関数で要素一つずつ見ていく */}
                    {SidebarData.map((value, key) => {
                        return (
                            <li 
                                key={key} 
                                id={window.location.pathname === value.link ? "active" : ""}
                                className="row" 
                                onClick={()=>{
                                    window.location.pathname = value.link;
                                }}
                            >
                                <div id='icon'>{value.icon}</div>
                                <div id='title'>{value.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
        >
            <div>
                <button 
                    onClick={() => this.onSetSidebarOpen(true)} 
                    className='SidebarButton'
                >
                    {/* <span> */}
                        {/* <BsReverseLayoutTextSidebarReverse /> */}
                        メニュー
                    {/* </span> */}
                </button>
            </div>
        </Sidebar>
      );
    }
  }
  
  
export default Menu