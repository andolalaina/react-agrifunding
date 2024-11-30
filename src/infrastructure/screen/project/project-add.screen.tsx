import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, FormControl, FormHelperText, Select, MenuItem } from '@mui/material';
import { ProjectDetailDTO } from '../../../domain/dto/project.dto';


export const SubmitProjectScreen = () => {
  const [formData, setFormData] = useState<ProjectDetailDTO>({
    id: '',
    title: '',
    description: '',
    summary: '',
    rating: 0,
    owner: { name: '', job: '' },
    submissionDate: new Date(),
    targetDate: new Date(),
    fundActual: 0,
    fundTarget: 0,
    status: '',
    location: { lat: 0, lng: 0 },
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange : React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === 'number' ? parseFloat(value) : value });
    //Clear error on change
    setErrors({...errors, [name]: undefined});
  };

  const handleDateChange = (name: string, date: Date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Basic validation.  Enhance as needed.
    const newErrors : any = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (formData.fundTarget <=0 ) newErrors.fundTarget = 'Target fund must be greater than 0';
    if (formData.fundActual < 0) newErrors.fundActual = 'Actual fund cannot be negative';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    // TODO:  Implement actual form submission here.  This is a placeholder.
    console.log('Form submitted:', formData);
    setFormData({
      id: '',
      title: '',
      description: '',
      summary: '',
      rating: 0,
      owner: { name: '', job: '' },
      submissionDate: new Date(),
      targetDate: new Date(),
      fundActual: 0,
      fundTarget: 0,
      status: '',
      location: { lat: 0, lng: 0 },
    });
    setErrors({});

  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Submit Project
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            error={!!errors.title}
            helperText={errors.title}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Owner Name"
            name="owner.name"
            value={formData.owner.name}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Owner Job"
            name="owner.job"
            value={formData.owner.job}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Submission Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            name="submissionDate"
            value={formData.submissionDate.toISOString().slice(0, 10)}
            onChange={(e) => handleDateChange('submissionDate', new Date(e.target.value))}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Target Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            name="targetDate"
            value={formData.targetDate.toISOString().slice(0, 10)}
            onChange={(e) => handleDateChange('targetDate', new Date(e.target.value))}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Actual Funding"
            type="number"
            name="fundActual"
            value={formData.fundActual}
            onChange={handleChange}
            fullWidth
            error={!!errors.fundActual}
            helperText={errors.fundActual}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Target Funding"
            type="number"
            name="fundTarget"
            value={formData.fundTarget}
            onChange={handleChange}
            fullWidth
            error={!!errors.fundTarget}
            helperText={errors.fundTarget}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.status}
              onChange={handleChange}
              name="status"
            >
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Approved"}>Approved</MenuItem>
              <MenuItem value={"Rejected"}>Rejected</MenuItem>
            </Select>
            <FormHelperText>Project Status</FormHelperText>
          </FormControl>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Latitude"
            type="number"
            name="location.lat"
            value={formData.location.lat}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Longitude"
            type="number"
            name="location.lng"
            value={formData.location.lng}
            onChange={handleChange}
            fullWidth
          />
        </Box>


        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};
