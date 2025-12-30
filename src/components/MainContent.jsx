import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import { GitHub, CheckCircle, Devices, DesignServices } from '@mui/icons-material';

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 4,
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
            Ellty Assignment1
          </Typography>
          <Typography variant="h6" sx={{ color: '#666', maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            This is a pixel-perfect implementation of the sidebar navigation component from the provided Figma design.
            The component is fully responsive and interactive.
          </Typography>
        </Box>

        {/* Preview Card */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            p: 5,
            mb: 4,
            background: 'white',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1a1a1a' }}>
            Component Preview
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mb: 4, lineHeight: 1.6 }}>
            The sidebar navigation on the left replicates the Figma design with accurate spacing, typography, and interactive states.
          </Typography>

          {/* Feature Cards */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
            <Card sx={{ flex: 1, borderRadius: 3 }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <CheckCircle sx={{ fontSize: 48, color: '#6a11cb', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Interactive
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All navigation items are clickable with visual feedback
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1, borderRadius: 3 }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Devices sx={{ fontSize: 48, color: '#2575fc', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Responsive
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Works perfectly on mobile, tablet, and desktop
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1, borderRadius: 3 }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <DesignServices sx={{ fontSize: 48, color: '#2e7d32', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Pixel-Perfect
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exact match to Figma design specifications
                </Typography>
              </CardContent>
            </Card>
          </Stack>

          <Typography variant="body1" sx={{ color: '#666', mb: 3, textAlign: 'center' }}>
            Click on any navigation item to see the interactive state change.
          </Typography>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              startIcon={<GitHub />}
              href="https://github.com"
              target="_blank"
              sx={{
                backgroundColor: '#24292e',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#444d56',
                },
              }}
            >
              View on GitHub
            </Button>
          </Box>
        </Paper>

        {/* Footer */}
        <Typography
          variant="body2"
          sx={{
            color: '#888',
            textAlign: 'center',
            mt: 3,
          }}
        >
          Designed to match Figma specifications | Ready for GitHub Pages deployment
        </Typography>
      </Container>
    </Box>
  );
};

export default MainContent;