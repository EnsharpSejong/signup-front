import { useState } from "react";

const useAddressSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState("");

    const handleSearchAddress = () => {
        if (isOpen) return;

        setIsOpen(true);
        const postcode = new window.daum.Postcode({
            oncomplete: (data) => {
                setAddress(data.address);
                setIsOpen(false);
            },
            onclose: () => {
                setIsOpen(false);
            },
        });

        postcode.open();
    };

    return { address, handleSearchAddress };
};

export default useAddressSearch;
