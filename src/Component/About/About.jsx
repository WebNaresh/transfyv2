import Coursel from '../../utils/Coursel'
import { Typography, Stack } from '@mui/material/'

export default function About () {
  return (
    <>
      <Stack>
        <Coursel />
        <Typography
          variant='h3'
          sx={{ color: 'primary.main', textAlign: 'center' }}
          component='div'
          
        >
          Welcome to Transfy
        </Typography>
      </Stack>
    </>
  )
}
