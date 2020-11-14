import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./SizeBar.css";
class SizeBar extends Component {
  render() {
    return (
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar" data-sidebarbg="skin6">
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav sizebar_list">
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link sidebar-link sidebar-custom"
                to="/homepage"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home feather-icon"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="hide-menu"> Trang chủ</span>
              </NavLink>
            </li>
            <li className="list-divider" />
            {/*<li className="nav-small-cap">*/}
            {/*    <span className="hide-menu">Chức năng</span>*/}
            {/*</li>*/}
            <li className="sidebar-item">
              <NavLink
                activeClassName="active"
                className="sidebar-link sidebar-link sidebar-custom"
                to="/report"
                aria-expanded="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-tag feather-icon"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7" y2="7"></line>
                </svg>
                <span className="hide-menu"> Báo cáo</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link sidebar-link sidebar-custom"
                to="/manager"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-grid feather-icon"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span className="hide-menu">Quản lý</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link sidebar-link sidebar-custom"
                to="/sentiment"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bar-chart feather-icon"
                >
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
                <span className="hide-menu"> sentiment</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link sidebar-link sidebar-custom"
                to="/campain"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-box feather-icon"
                >
                  <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                  <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                  <line x1="12" y1="22.76" x2="12" y2="11"></line>
                </svg>
                <span className="hide-menu"> Campaign</span>
              </NavLink>
            </li>

            {/*</ul>*/}
          </nav>
        </div>
      </aside>
    );
  }
}

export default SizeBar;
