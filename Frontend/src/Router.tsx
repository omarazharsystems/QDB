import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./modules/Dashboard";
import Blogs from "./modules/Blogs";
import { Layout, Typography, Input, Button, Pagination, Avatar, Space } from "antd";
import { SearchOutlined, FilterOutlined, PlusOutlined, BellOutlined } from "@ant-design/icons";
import Sidebar from "./modules/Sidebar";
import PostDetail from "./modules/PostDetail";
import styled from "styled-components";
import { useState } from "react";
import profilePic from "./assets/Profile_Pic.jpg";


const { Header, Content } = Layout;
const { Title } = Typography;

const HeaderStyled = styled(Header)`
  background: #fff;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

const ContentStyled = styled(Content)`
  margin: 16px;
  padding: 24px;
  background: #f7f9fc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #1a3353;
`;

const HeaderTitle = styled(Title)`
  margin: 0;
  color: #1a3353;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const HeaderRight = styled(Space)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Router: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePostSelect = (postId: number) => {
    setSelectedPostId(postId);
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh", display: "flex" }}>
        <Sidebar />
        <Layout style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <HeaderStyled>
            <SearchFilterContainer>
              <Input
                placeholder="Type here to search..."
                prefix={<SearchOutlined />}
                style={{ width: 300 }}
              />
            </SearchFilterContainer>

            <HeaderRight>
              <Button type="text" icon={<PlusOutlined />}>
                Add
              </Button>
              <BellOutlined style={{ fontSize: 20, color: "#1a3353" }} />
              <Avatar size="large" src={profilePic} />
            </HeaderRight>
          </HeaderStyled>
          <ContentStyled>
            <SearchFilterContainer>
              <SearchFilterContainer>
                <HeaderTitle level={3}>All Blog Posts</HeaderTitle>
              </SearchFilterContainer>
              <TitleContainer>
                <Button icon={<FilterOutlined />}>Filter/Sort by</Button>
              </TitleContainer>
            </SearchFilterContainer>
            <Routes>
              <Route path="/dashboard" element={<Dashboard title={"Dashboard"} onPostSelect={handlePostSelect}  />} />
              <Route path="/blogs" element={<Blogs title={"Blogs"} onPostSelect={handlePostSelect} />} />
              <Route path="/posts/:postId" element={<PostDetail postId={selectedPostId} />} />
            </Routes>
            <Pagination
              current={currentPage}
              onChange={(page) => setCurrentPage(page)}
              total={50}
              style={{ marginTop: 24, textAlign: "center" }}
            />
          </ContentStyled>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
