import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Sidebar = () => {
    const location = useLocation();
    const sidebarState = location.pathname.includes("micropython/classes/");
    const [display, setDisplay] = useState(false)

    const showModal = () => {
        setDisplay("flex"); // Cambia el display a flex para mostrar el modal
    };

    const hideModal = () => {
        setDisplay("none"); // Cambia el display a none para ocultar el modal
    };

    useEffect(() => {
        setDisplay("none"); // Cambia el display a none para ocultar el modal
    }, [location.pathname]);

    return (
        <>
            {sidebarState ? (
                <>
                    <div className="container mt-5">
                        <button
                            type="button"
                            className="button-sidebar"
                            onClick={showModal}
                        >
                            Puertos RPPW
                        </button>
                    </div>
                    <div className="modal" onClick={hideModal}
                        style={{ display: display, background: "rgba(0,0,0,0.6)" }}>
                        <div className="modal-dialog">
                            <div className="sidebar">
                                <div className="modal-header">
                                    <h3
                                        className="text-center mx-auto w-75 fw-bold"
                                    >
                                        Puertos de Raspberry Pi Pico W
                                    </h3>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <img
                                        className="d-block mx-auto w-100"
                                        alt=""
                                        src="../../img/class1Micropython/picow_sidebar.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Sidebar;