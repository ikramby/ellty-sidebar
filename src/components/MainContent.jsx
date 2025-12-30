import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
  Stack,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import { CheckCircle, Mouse, TouchApp, Layers, GitHub } from '@mui/icons-material';

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
        {/* Header avec lien GitHub */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Link
            href="https://github.com/ikramby/ellty-sidebar"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <GitHub sx={{ fontSize: 40, color: '#1a1a1a' }} />
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#1a1a1a', '&:hover': { color: '#1976d2' } }}>
                Github EllTy Sidebar
              </Typography>
            </Box>
          </Link>
          <Typography variant="h6" sx={{ color: '#666', maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            Implementation of page selection logic and popup window according to the Figma specifications.
          </Typography>
        </Box>

        {/* Instructions Card */}
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
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#1a1a1a' }}>
            How to use the features
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Check statut" 
                secondary="Check a box to the right of an item to change its status to 'Done'." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Layers color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Select 'All pages'" 
                secondary="Click on any 'All pages' item to open the detailed selection popup." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><TouchApp color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Popup" 
                secondary="In the popup, you can individually select pages 1 to 4 or use 'All pages' to select all." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Mouse color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Button Done" 
                secondary="Click the yellow 'Done' button in the popup to confirm your choices and close the window." 
              />
            </ListItem>
          </List>

          {/* Feature Summary */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mt: 4 }}>
            <Card sx={{ flex: 1, borderRadius: 3, backgroundColor: '#fff9e6' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#f57c00' }}>
                  State logic
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The status changes dynamically between the page name and 'Done' when clicking the checkbox.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1, borderRadius: 3, backgroundColor: '#e3f2fd' }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  Popup Component
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A Material UI styled modal window to match your Figma design exactly.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Paper>

        {/* Footer avec lien */}
        <Typography
          variant="body2"
          sx={{
            color: '#888',
            textAlign: 'center',
            mt: 3,
          }}
        >
          Powered By{' '}
          <Link
            href="https://ikramby.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#1976d2',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Ikram Ben Yahia
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default MainContent;