import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Sidebar = () => {
    const location = useLocation();
    const sidebarState = location.pathname.includes("micropython/classes/");

    useEffect(() => {
        const modal = document.getElementById("exampleModal");
        if (modal) {
            modal.classList.remove("show");
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";
        }
    }, [location.pathname]);

    return (
        <>
            {sidebarState ? (
                <>
                    <div className="container mt-5">
                        <button
                            type="button"
                            className="button-sidebar"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Puertos RPPW
                        </button>
                    </div>
                    <div
                        className="modal"
                        id="exampleModal"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                        style={{ display: 'none' }}
                    >
                        <div className="modal-dialog">
                            <div className="sidebar">
                                <div className="modal-header">
                                    <h3
                                        className="text-center mx-auto w-75 fw-bold"
                                        id="exampleModalLabel"
                                    >
                                        Puertos de Raspberry Pi Pico W
                                    </h3>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
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