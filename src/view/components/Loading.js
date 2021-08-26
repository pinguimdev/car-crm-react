import React from 'react'
import { Typography, Modal, CircularProgress } from '@material-ui/core'
import { changeLoading } from '../../store/actions/loading.action'
import { useDispatch, useSelector } from 'react-redux'

export default function Loading() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loadingReducer)

    return (
        <div>
            <Modal
                open={loading.open}
                onClose={() => dispatch( changeLoading({open: false}) )}
                className="d-flex justify-content-center align-items-center h-100"
            >
                <div className="bg-white d-flex align-items-center p-3 outline-none">
                    <CircularProgress size={20} className="me-3" />
                    <Typography variant="subtitle1">{loading.msg}</Typography>
                </div>
            </Modal>
        </div>
    )
}