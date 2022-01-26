import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { RiGroupLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdNoEncryption, MdWorkspacesOutline } from "react-icons/md";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";



import './styles.css';

interface SidebarProps {
  onChange?: (event: React.MouseEvent, isChecked?: boolean) => void;
  isCheckedInitial: boolean;
}

 
export function Sidebar({ onChange, isCheckedInitial, ...rest }: SidebarProps) {
  const [isChecked, setCheckedState] = useState(isCheckedInitial);

  useEffect(() => {
    setCheckedState(isCheckedInitial);
  }, [isCheckedInitial]);

  const handleChange = (event: React.MouseEvent) => {
    setCheckedState(!isChecked);
    onChange && onChange(event, isChecked);    
  };

   const styl = {
     display: 'none'
    };

      const styli = {
     display: "block"
    };
    
  return (
    <div id="header">
    <ProSidebar collapsed={isChecked}>
      <Menu>
          <SidebarContent>
          <MenuItem icon={<MdWorkspacesOutline />}>Workspace</MenuItem>
          <MenuItem icon={<RiGroupLine />}>Usuários</MenuItem>
          </SidebarContent>

          <SidebarFooter className="footer__sidebar">
          <MenuItem icon={<IoSettingsOutline />}>Configurações</MenuItem>

          <div className="closemenu" onClick={handleChange}>
              {/* {isChecked ? (        
                <BsChevronDoubleRight /> 
              ) : (
              
              )} */}
                <BsChevronDoubleLeft id='left'/>

          </div>
          </SidebarFooter>
          <div style={styl}>
          <MenuItem icon={<BsChevronDoubleRight />} onClick={handleChange}></MenuItem>
          </div>
      </Menu>
    </ProSidebar>
    </div>
  );
}

export default Sidebar;