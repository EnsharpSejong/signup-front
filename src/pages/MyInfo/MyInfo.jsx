import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ROUTE_LOGIN_PAGE } from "../../constant";
import { userApi } from "../../apis";
import { Button, Form, Space } from "../../components";
import * as S from "./MyInfoStyled";

const MyInfo = () => {
    const navigate = useNavigate();
    const loginedEmail = localStorage.getItem("loginedEmail");

    const [userInfo, setUserInfo] = useState(null);

    const handleLogout = () => {
        if (window.confirm("정말로 로그아웃 하시겠습니까?")) {
            localStorage.removeItem("loginedEmail");
            navigate(ROUTE_LOGIN_PAGE);
        }
    };

    useEffect(() => {
        if (!loginedEmail) {
            navigate(ROUTE_LOGIN_PAGE);
            return;
        }

        userApi.getInformation(loginedEmail).then((res) => setUserInfo(res));
    }, [loginedEmail, navigate]);

    return (
        <Form formStyles={{ width: "516px" }} innerStyles={{ padding: "40px 50px" }}>
            <S.TitleText>내정보</S.TitleText>
            <Space size={-1} />
            <S.MyInfoList>
                <li>이름: {userInfo?.username || "불러오는 중..."}</li>
                <li>이메일: {userInfo?.email || "불러오는 중..."}</li>
                <li>주소: {userInfo ? `${userInfo.streetAddress}, ${userInfo.detailAddress}` : "불러오는 중..."}</li>
            </S.MyInfoList>
            <Space size={-1} />
            <Button onClick={handleLogout}>로그아웃</Button>
        </Form>
    );
};

export default MyInfo;
