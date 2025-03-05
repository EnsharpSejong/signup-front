import { Button, Form, Space } from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as S from "./MyInfoStyled";
import { ROUTE_LOGIN_PAGE } from "../../constant";

const MyInfo = () => {
    const navigate = useNavigate();
    const loginedEmail = localStorage.getItem("loginedEmail");

    const handleLogout = () => {
        localStorage.removeItem("loginedEmail");
        navigate(ROUTE_LOGIN_PAGE);
    };

    useEffect(() => {
        if (!loginedEmail) {
            navigate(ROUTE_LOGIN_PAGE);
        }
    }, [loginedEmail, navigate]);

    return (
        <Form formStyles={{ width: "496px" }}>
            <S.TitleText>내정보</S.TitleText>
            <Space size={-1} />
            <ul>
                <li>이름</li>
                <li>이메일: {loginedEmail}</li>
                <li>주소</li>
            </ul>
            <Space size={-1} />
            <Button onClick={handleLogout}>로그아웃</Button>
        </Form>
    );
};

export default MyInfo;
