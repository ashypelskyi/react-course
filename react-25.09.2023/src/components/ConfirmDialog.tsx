import {useDispatch} from "react-redux";

interface ConfirmDialogProps {
    message: string
}

const ConfirmDialog = ({message}: ConfirmDialogProps) => {
    return (
        <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Yes</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;