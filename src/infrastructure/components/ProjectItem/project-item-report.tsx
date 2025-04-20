import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Divider,
  Button,
} from '@mui/material';

export interface ReportData {
  title: string;
  spei: number;
  accessibility: number;
  recommendations: string[];
  score: number;
  scoreComment: string;
}

interface ReportModalProps {
  open: boolean;
  handleClose: () => void;
  data: ReportData;
}


const ReportModal: React.FC<ReportModalProps> = ({ open, handleClose, data }) => {
  const {
    title,
    spei,
    accessibility,
    recommendations,
    score,
    scoreComment,
  } = data; // Use sampleData for demonstration

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1" fontWeight="bold">🌧️ Hydrologie (SPEI)</Typography>
        <Typography variant="body2" paragraph>
          L’indice SPEI est à {spei.toFixed(4)} sur 48 mois, indiquant {spei < -0.5 ? 'une légère sécheresse chronique' : 'des conditions hydriques acceptables'}.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">🚜 Accessibilité</Typography>
        <Typography variant="body2" paragraph>
          L’indice d’accessibilité est de {accessibility.toFixed(3)}. 
          Cela représente un niveau {accessibility >= 0.5 ? 'favorable' : 'limité'} pour les opérations logistiques.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">✅ Recommandations</Typography>
        <ul style={{ fontSize: '0.875rem', marginTop: 0 }}>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>

        <Typography variant="subtitle1" fontWeight="bold">📊 Pertinence du projet</Typography>
        <Typography variant="body2" mb={2}>
          <strong>Note : {score} / 5</strong> — {scoreComment}
        </Typography>

        <Box textAlign="right">
          <Button variant="contained" onClick={handleClose}>
            Fermer
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReportModal;