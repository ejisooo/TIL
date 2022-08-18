import React from 'react'
import styled from "styled-components";
import Image from "next/image";
import Typography from "../components/shared/typography/Typography";
import Button from "../components/shared/buttons/Button";
import BoardTable from "../components/shared/table/BoardTable";
import Thead from "../components/shared/table/Thead";
import Tbody from "../components/shared/table/Tbody";
import Tr from "../components/shared/table/Tr";
import Th from "../components/shared/table/Th";
import Td from "../components/shared/table/Td";
import ColorBadge from "../components/shared/badge/ColorBadge";


export default function Test(){
    return (
        <Container>
            <SideMenu>
                <Profile>
                    <Image
                        src="/images/sample02.png"
                        alt="프로필"
                        width={88}
                        height={88}
                    ></Image>
                    <Name>커넥트업</Name>
                </Profile>
            </SideMenu>
            <Content>
                <Top>
                    <Typography variant="head3">홈</Typography>
                    <Button size="small" color="blue">중요 일정 확인</Button>
                </Top>
                <Bottom>
                    <HomeList>
                        <Typography variant="body1" color="var(--gray80)" mb={16} weight={700}>미확인 공지 총 <span>3</span>개</Typography>
                        <BoardTable >
                            <colgroup>
                                <col width="148px" />
                                <col width="614px" />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <Thead>
                                <Tr>
                                    <Th align="center">분류</Th>
                                    <Th align="center">제목</Th>
                                    <Th align="center">작성자</Th>
                                    <Th align="center">작성일</Th>
                                    <Th align="center">답변</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td><ColorBadge color="red">이벤트</ColorBadge></Td>
                                    <Td>커넥트업 HR연구소, 2022년 인재 트렌드 조사 결과 발표</Td>
                                    <Td align="center">홍유진</Td>
                                    <Td align="center">2022.05.06</Td>
                                    <Td align="center">31/36</Td>
                                </Tr>
                                <Tr>
                                    <Td><ColorBadge color="blue">일반공지</ColorBadge></Td>
                                    <Td>커넥트업 HR연구소, 2022년 인재 트렌드 조사 결과 발표</Td>
                                    <Td align="center">홍유진</Td>
                                    <Td align="center">2022.05.06</Td>
                                    <Td align="center">31/36</Td>
                                </Tr>
                                <Tr>
                                    <Td> <ColorBadge color="green">인사</ColorBadge></Td>
                                    <Td>커넥트업 HR연구소, 2022년 인재 트렌드 조사 결과 발표</Td>
                                    <Td align="center">홍유진</Td>
                                    <Td align="center">2022.05.06</Td>
                                    <Td align="center">31/36</Td>
                                </Tr>
                            </Tbody>
                        </BoardTable>
                    </HomeList>
                    <HomeList>
                        <Typography variant="body1" color="var(--gray80)" mb={16} weight={700}>전월 대비 실적 비교</Typography>
                    </HomeList>
                    <HomeList>
                        <Typography variant="body1" color="var(--gray80)" mb={16} weight={700}><span>7/20(수)</span> 캘린더</Typography>
                    </HomeList>
                </Bottom>
        </Content>
        </Container >

    );
}


const Container = styled.div`
    display:flex;
    height:100%;
    width:100%;
`;

const SideMenu = styled.div`
    position:relative;
    width:240px;
    height:calc(100vh - 100px);
    background:var(--gray10);
    padding:40px 0;
`;

const Profile = styled.div`
    text-align:center;
`;
const Name = styled.p`
    font-size:16px;
    font-weight:700;
    color:var(--gray90); 
    margin-top:20px;
    line-height:28px;
`;
const Content = styled.div`
    width:100%;
    padding:52px 24px;
`;
const Top = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:34px;
`;
const Bottom = styled.ul`
    
`;
const HomeList = styled.li`
    margin-bottom:62px;

`;
