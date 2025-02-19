import { Avatar, Card, Layout, Menu, Typography, Badge } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profilePic from "../assets/Profile_Pic.jpg";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  FileTextOutlined,
  SettingOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useUserData } from "../UserContext";
import { useState } from "react";

const { Sider } = Layout;
const { Title } = Typography;

// Sidebar Styling
const SidebarWrapper = styled(Sider)<{ collapsed: boolean }>`
  height: 100vh;
  background: #f8fbff;
  padding: 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  .ant-menu {
    background: transparent;
    border-right: none;
  }

  .ant-menu-item {
    font-size: 16px;
    color: #4b5b79;
    &:hover {
      background: #e3f2fd;
      color: #1677ff;
    }
  }

  .ant-menu-item-selected {
    background: #1677ff !important;
    color: #fff !important;
  }

  .menu-heading {
    padding: 10px 24px;
    font-weight: bold;
    font-size: 14px;
    color: #1a3353;
    text-transform: uppercase;
    margin-top: 12px;
  }
`;

// Header Strip
const HeaderStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1677ff;
  padding: 12px 16px;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const StyledCard = styled(Card)`
  text-align: center;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  .ant-avatar {
    background-color: #1677ff;
  }
`;

const Sidebar: React.FC = () => {
  const user = useUserData();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarWrapper width={260} collapsed={collapsed} theme="light">
      {/* Top Header Strip with QDB and Toggle */}
      <HeaderStrip>
        <span>QDB</span>
        {collapsed ? (
          <MenuUnfoldOutlined
            onClick={() => setCollapsed(false)}
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        ) : (
          <MenuFoldOutlined
            onClick={() => setCollapsed(true)}
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        )}
      </HeaderStrip>

      {!collapsed && user && (
        <StyledCard>
          {/* Profile Picture with Online Status */}
          <Badge dot status="success" offset={[-5, 50]} title="Online">
            <Avatar
              size={64}
              src={profilePic}// Dummy profile picture URL
            />
          </Badge>

          {/* User Info */}
          <Title level={5} style={{ marginTop: 10, color: "#4b5b79" }}>
            Hello
          </Title>
          <Title level={4} style={{ marginTop: 0, color: "#1a3353" }}>
            {user.name}
          </Title>
          <Typography.Text type="secondary">{user.email}</Typography.Text>
        </StyledCard>
      )}

      {/* Updated Menu Structure with Section Headings */}
      <Menu mode="inline" defaultSelectedKeys={["dashboard"]}>
        {/* Dashboard Section */}
        <div className="menu-heading">Dashboard</div>
        <Menu.Item key="overview" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Overview</Link>
        </Menu.Item>
        <Menu.Item key="analytics" icon={<FileTextOutlined />}>
          <Link to="">Analytics</Link>
        </Menu.Item>

        {/* Blog Section */}
        <div className="menu-heading">Blog</div>
        <Menu.Item key="all-posts" icon={<EditOutlined />}>
          <Link to="/blogs">All Posts</Link>
        </Menu.Item>
        <Menu.Item key="create-post" icon={<FileTextOutlined />}>
          <Link to="" >Create Post</Link>
        </Menu.Item>

        {/* Settings */}
        <div className="menu-heading">Settings</div>
        <Menu.Item key="account" icon={<SettingOutlined />}>
          <Link to="">Account Settings</Link>
        </Menu.Item>
      </Menu>
    </SidebarWrapper>
  );
};

export default Sidebar;
