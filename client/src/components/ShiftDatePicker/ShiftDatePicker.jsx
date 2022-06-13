import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const ShiftDatePicker = () => {

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = newValue => setSelectedDate(newValue);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    label="Выберите дату"
                    inputFormat="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleChange}
                    renderInput={params => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}
