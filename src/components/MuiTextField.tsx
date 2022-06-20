import { Stack, TextField, InputAdornment } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from "react";

export const MuiTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label='Name' variant='outlined'/>
                <TextField label='Name' variant='filled'/>
                <TextField label='Name' variant='standard'/>
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label='Secondary Small' color='secondary' size='small' />
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label='Form Input' required />
                <TextField 
                    label='Password'
                    type='password'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required.' : 'Do not share your password with anyone.'}
                    // disabled
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><PasswordIcon /></InputAdornment>
                    }}
                />
                <TextField label='Read Only' InputProps={{ readOnly: true }} />
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label='Price' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
                />
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }}
                />
            </Stack>
        </Stack>
    )
}