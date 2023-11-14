import {Waiter} from "../types";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {closeWaiterFormAction, persistWaiterAction} from "../store/reducer";
import TextField from "@mui/material/TextField";
import {useFormik} from 'formik';
import {object, string} from 'yup';
import {Button, Grid} from "@mui/material";

const WaiterForm = () => {
    const {editableWaiter: waiter} = useSelector((state: RootState) => state.waiters);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<Waiter>();

    useEffect(() => {
        setFormData(waiter);
    }, [waiter]);

    const validationSchema = object({
        firstName: string().required('First name is required'),
        phone: string()
            .min(11, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: waiter?.firstName || "",
            phone: waiter?.phone || ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const {firstName, phone} = values;
            if (!firstName || !phone) {
                return;
            }

            const nextWaiter: Waiter = {
                id: waiter?.id || undefined,
                firstName: firstName,
                phone: phone
            };

            dispatch(closeWaiterFormAction());
            dispatch(persistWaiterAction(nextWaiter));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{width: '100%'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="first-name"
                        name="firstName"
                        label="First name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        type="tel"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                       Save
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default WaiterForm;