import React from 'react';
import { Modal } from 'antd';

const MyModal = ({visible = false, children, setVisible, title}) => {

    const handleOk = () => setVisible(false);
    const handleCancel = () => setVisible(false);

    return (
        <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>
    );
};

export default MyModal;