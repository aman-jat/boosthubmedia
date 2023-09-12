import { Box, FormControl, FormGroup, Stack, TextField } from '@mui/material';
import bg from '../assets/coloured_background.jpg';
import contact from '../assets/contact.svg';
import theme from '../style/theme';
import { useFormik } from 'formik';

const Contact = () => {
  type FormikFields = {
    name: string;
  };

  const formik = useFormik<FormikFields>({
    initialValues: {
      name: '',
    },
    onSubmit: () => {},
  });

  return (
    <Stack
      sx={{
        height: '100vh',
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          backdropFilter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Stack
        p={4}
        direction='row'
        zIndex={1}
        borderRadius={4}
        sx={{ backgroundColor: theme.palette.common.white }}>
        <Stack>
          <img src={contact} width={200} />
        </Stack>
        <Stack>
          <TextField name='name' value={formik.values.name} />
          <TextField name='name' value={formik.values.name} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
