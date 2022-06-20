import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>('');
    // 값을 여러 개 가질 수 있게 할거면 <string[]> 로 변경!
    const handleFormatChange = (event: React.MouseEvent<HTMLElement>, formats:string | null) => {
        setFormats(formats);
        console.log(formats);
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://www.google.com' target='_blank'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success' onClick={()=>alert('clicked!')}>Success with Alert</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendIcon />} disableRipple>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton>
                    <SendIcon aria-label='Send' color='success' fontSize='large' />
                </IconButton>
                <IconButton>
                    <SendIcon aria-label='Send' color='info' fontSize='small' />
                </IconButton>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' aria-label='alignment button group'>
                    <Button onClick={() => alert('clicked!')}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                {/* ToggleButtonGroup ... array를 value로 가진다. ToggleButton을 누를 때마다 array에 값이 추가되거나 삭제되는 형태
                혹은 exclusive 옵션을 추가하면 값을 오직 한 개만 받을 수 있으므로 -> 이럴 땐 array 말고 하나의 값으로 value를 가진다. */}
                <ToggleButtonGroup
                    aria-label='text formatting'
                    value={formats}
                    onChange={handleFormatChange}
                    color='success'
                    size='small'
                    exclusive
                >
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalicIcon />
                        </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'>
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}