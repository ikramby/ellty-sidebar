import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
} from '@mui/material';
import {
  Square as SquareIcon,
  Home as HomeIcon,
  Layers as LayersIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('button-1');

  const sections = [
    {
      title: 'Button',
      count: 3,
      items: [
        { id: 'button-1', text: 'Done', icon: <SquareIcon />, status: 'Done', statusColor: 'success' },
        { id: 'button-2', text: 'Done', icon: <SquareIcon />, status: 'Done', statusColor: 'success' },
        { id: 'button-3', text: 'Done', icon: <SquareIcon />, status: 'Done', statusColor: 'success' },
      ],
    },
    {
      title: 'Home',
      count: 8,
      items: Array(8).fill(null).map((_, index) => ({
        id: `home-${index + 1}`,
        text: 'All pages',
        icon: <HomeIcon />,
        status: 'All pages',
        statusColor: 'default',
      })),
    },
    {
      title: 'Frame 8445891',
      count: 5,
      items: [
        { id: 'frame-1', text: 'All pages', icon: <LayersIcon />, status: 'All pages', statusColor: 'default' },
        { id: 'frame-2', text: 'Page 1', icon: <DescriptionIcon />, status: 'Page 1', statusColor: 'primary' },
        { id: 'frame-3', text: 'Page 2', icon: <DescriptionIcon />, status: 'Page 2', statusColor: 'primary' },
        { id: 'frame-4', text: 'Page 3', icon: <DescriptionIcon />, status: 'Page 3', statusColor: 'primary' },
        { id: 'frame-5', text: 'Done', icon: <DescriptionIcon />, status: 'Done', statusColor: 'success' },
      ],
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          borderRight: '1px solid #eaeaea',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      {/* Header */}
      <Box sx={{ p: 3, borderBottom: '1px solid #f0f0f0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            F
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            Figma Component
          </Typography>
        </Box>
      </Box>

      {/* Navigation Sections */}
      {sections.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ py: 2.5, borderBottom: '1px solid #f0f0f0' }}>
          {/* Section Title */}
          <Box sx={{ px: 2.5, pb: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              {section.title}
            </Typography>
            <Chip
              label={section.count}
              size="small"
              sx={{
                backgroundColor: '#f0f2f5',
                color: '#666',
                fontSize: '0.6875rem',
                height: 20,
              }}
            />
          </Box>

          {/* Section Items */}
          <List>
            {section.items.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  selected={selectedItem === item.id}
                  onClick={() => setSelectedItem(item.id)}
                  sx={{
                    px: 2.5,
                    py: 1.25,
                    borderLeft: selectedItem === item.id ? '3px solid #1a73e8' : '3px solid transparent',
                    backgroundColor: selectedItem === item.id ? '#f0f7ff' : 'transparent',
                    '&:hover': {
                      backgroundColor: '#f8f9fa',
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#f0f7ff',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: '#666' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: '#333',
                    }}
                  />
                  <Chip
                    label={item.status}
                    size="small"
                    color={item.statusColor}
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      height: 24,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Drawer>
  );
};

export default Sidebar;