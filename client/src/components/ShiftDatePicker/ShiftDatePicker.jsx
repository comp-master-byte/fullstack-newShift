import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const ShiftDatePicker = (props) => {

    const { selectedDate, setSelectedDate } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    label="Выберите дату"
                    inputFormat="dd.MM.yyyy"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    renderInput={params => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}
