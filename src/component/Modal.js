import React from 'react'
import Current from './Current'
import Detail from './Detail'
import Loading from './Loading'

const Modal = () => {



    return (
        <>
            <div className="modal fade-in" id="backdrop" role="dialog" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                    <div className="modal-content overview">
                        <Detail />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Modal