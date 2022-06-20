import { Typography } from "@mui/material"

export const MuiTypography = () => {
    return (
        <>
            <Typography variant='h1' gutterBottom>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>
            
            <Typography variant='subtitle1'>Sub Title 1</Typography>
            <Typography variant='subtitle2'>Sub Title 2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut, hic laborum dolores architecto ullam. Sequi numquam soluta eius voluptatum eligendi quis eum officia excepturi dignissimos adipisci, magni accusamus culpa.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nobis nemo, dolorem dolore culpa natus quas consequuntur quae saepe enim amet accusamus. Ut aliquam consectetur ea libero iure, expedita voluptatibus.</Typography>
        </>
    )
}