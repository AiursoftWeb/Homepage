import Markdown from 'react-markdown';

let current = null;

/**
 * open a Modal that show something detail
 * 
 * @param label title of Modal
 * @param content content of Modal, support markdown
 * 
 * ## example:
 * 
 * import { Modal } from "antd";
 * 
 * const [modal, contextHolder] = Modal.useModal();
 * openDetailModel(modal, "this title", "**this CONTENT**")
 */
export default function openDetailModal(modal, label: string, content: string) {
    if (current !== null) {
        return;
    }

    current = modal.info({
        title: <div className='modal-title'>{label}</div>,
        width: '800px',
        bodyStyle: {
            minHeight: '300px',
            overflowY: 'auto',
            textOverflow: 'ellipsis',
            maxHeight: '400px',
            paddingLeft: '10px',
        },
        icon: null,
        maskClosable: true,
        content: <Markdown>{content}</Markdown>,
        footer: null,
        afterClose: () => {
            current = null;
        }
    });
}