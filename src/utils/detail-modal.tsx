import { Modal } from 'antd';
import Markdown from 'react-markdown';

let current = null;

/**
 * open a Modal that show something detail
 * 
 * maybe it would Warning in console: **[antd: Modal] Static function can not consume context like dynamic theme. Please use 'App' component instead.**
 * 
 * but we do not use dynamic theme so ignore it :P
 * @param label title of Modal
 * @param content content of Modal, support markdown
 * 
 * ## example:
 * 
 * openDetailModel("this title", "**this CONTENT**")
 */
export default function openDetailModal(label: string, content: string) {
    if (current !== null) {
        return;
    }

    current = Modal.info({
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