import { RingLoader } from "react-spinners"; // 링 로더 임포트
import { LoaderContainer } from "./LoaderStyled";

const Loader = () => {
    return (
        <LoaderContainer>
            <RingLoader size={60} color="var(--blue100)" />
        </LoaderContainer>
    );
};

export default Loader;
