import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography, Box, FormGroup, Container } from '@mui/material';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Grid2 as Grid } from '@mui/material';

import { ProjectCreateDTO, ProjectDetailDTO } from '../../../domain/dto/project.dto';
import { insertLendingProject } from '../../../domain/services/lendingProject.service';

const LocationPicker = ({ setLocation }: { setLocation: (lat: number, lng: number) => void }) => {
  useMapEvents({
    click(e) {
      setLocation(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

export const SubmitProjectScreen = () => {
  const [formData, setFormData] = useState<ProjectCreateDTO>({
    id: '',
    title: '',
    description: '',
    summary: '',
    rating: 0,
    submission_date: new Date(),
    targetDate: new Date(),
    fundActual: 0,
    fundTarget: 0,
    status: '',
    location: { lat: -18.9137, lng: 47.5361 },
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === 'number' ? parseFloat(value) : value });
    // Clear error on change
    setErrors({ ...errors, [name]: undefined });
  };

  const handleDateChange = (name: string, date: Date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleLocationChange = (lat: number, lng: number) => {
    setFormData({ ...formData, location: { lat, lng } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation. Enhance as needed.
    const newErrors: any = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (formData.fundTarget <= 0) newErrors.fundTarget = 'Target fund must be greater than 0';
    if (formData.fundActual < 0) newErrors.fundActual = 'Actual fund cannot be negative';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Implement actual form submission here. This is a placeholder.
    console.log('Form submitted:', formData);
    insertLendingProject(formData)
      .then((response) => {
        console.log(response)
        setFormData({
          id: '',
          title: '',
          description: '',
          summary: '',
          rating: 0,
          submission_date: new Date(),
          targetDate: new Date(),
          fundActual: 0,
          fundTarget: 0,
          status: '',
          location: { lat: -18.9137, lng: 47.5361 },
        });
        setErrors({});
    })
  };

  return (
    <>
    <h2>Soumettre un nouveau projet</h2>
    <Grid container spacing={2} sx={{ width: "100%" }}>
      
      <Grid item xs={12} p={2} sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <FormGroup sx={{width: "100%"}}>
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
          <Box sx={{ mb: 2, height: '400px' }}>
            <Typography variant="subtitle1" gutterBottom>
              Cliquez sur la carte pour sélectionner l'emplacement du projet
            </Typography>
            <MapContainer
              center={[formData.location.lat || -18.9137 , formData.location.lng || 47.5361]}
              zoom={6}
              style={{ height: '20rem', width: '100%' }}
            >
              <TileLayer
                url='https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg'
                minZoom= {0}
                maxZoom= {18}
                // attribution= '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[formData.location.lat, formData.location.lng]} />
              <LocationPicker setLocation={handleLocationChange} />
            </MapContainer>
          </Box>
          <Box sx={{ my: 2 }}>
            <TextField
              label="Titre du projet"
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
              label="Description des activités"
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
              label="Objectif du projet"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Date de soumission"
              type="date"
              InputLabelProps={{ shrink: true }}
              name="submissionDate"
              value={formData.submission_date.toISOString().slice(0, 10)}
              fullWidth
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Date de commencement des travaux"
              type="date"
              InputLabelProps={{ shrink: true }}
              name="targetDate"
              value={formData.targetDate.toISOString().slice(0, 10)}
              onChange={(e) => handleDateChange('targetDate', new Date(e.target.value))}
              fullWidth
              inputProps={{ min: new Date().toISOString().slice(0, 10) }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Financement actuel"
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
              label="Financement cible"
              type="number"
              name="fundTarget"
              value={formData.fundTarget}
              onChange={handleChange}
              fullWidth
              error={!!errors.fundTarget}
              helperText={errors.fundTarget}
            />
          </Box>
          <Button variant="contained" type="submit">
            Soumettre le projet
          </Button>
        </FormGroup>
      </form>
      </Grid>
      
    </Grid>
    </>
  );
};
