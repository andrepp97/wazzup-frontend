import React, { useState } from 'react';
import Logout from '../assets/images/logout.svg';
import { Tab, Nav, Modal } from 'react-bootstrap';

// COMPONENTS
import Chats from './Chats';
import Contacts from './Contacts';
import NewChatModal from './NewChatModal';
import NewContactModal from './NewContactModal';

const CHATS_KEY = "chats";
const CONTACTS_KEY = "contacts";

const Sidebar = ({ id, logout }) => {
    // STATE
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState(CHATS_KEY)
    const chatsOpen = active === CHATS_KEY

    // HANDLE MODAL
    const closeModal = () => setIsOpen(false)

    // RENDER
    return (
        <div className="sidebar-tab">

            {/* TABS */}
            <Tab.Container activeKey={active} onSelect={setActive}>
                <Nav variant="tabs">
                    <Nav.Item className="flex-grow-1">
                        <Nav.Link eventKey={CHATS_KEY} className="text-center">
                            Chats
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="flex-grow-1">
                        <Nav.Link eventKey={CONTACTS_KEY} className="text-center">
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                    <button className="btn border d-flex" onClick={logout}>
                        <img
                            alt=""
                            height={20}
                            src={Logout}
                            className="m-auto"
                        />
                    </button>
                </Nav>
                <Tab.Content className="flex-grow-1 overflow-auto border border-top-0">
                    <Tab.Pane eventKey={CHATS_KEY}>
                        <Chats />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="border p-2">
                    <span>Your ID : </span>
                    <small className="text-black-50 font-weight-bold">{id}</small>
                </div>
                <button className="btn btn-dark rounded-0" onClick={() => setIsOpen(true)}>
                    New {chatsOpen ? 'Chat' : 'Contact'}
                </button>
            </Tab.Container>

            {/* MODALS */}
            <Modal centered show={isOpen} onHide={closeModal}>
                {
                    chatsOpen
                    ? <NewChatModal onClose={closeModal} />
                    : <NewContactModal onClose={closeModal} />
                }
            </Modal>

        </div>
    );
};

export default Sidebar;