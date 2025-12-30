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
  Checkbox,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import {
  Square as SquareIcon,
  Layers as LayersIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('button-1');
  const [openPopup, setOpenPopup] = useState(false);
  const [currentAllPagesItem, setCurrentAllPagesItem] = useState(null);
  
  // State for pages in the popup
  const [pages, setPages] = useState([
    { id: 1, name: 'Page 1', checked: false },
    { id: 2, name: 'Page 2', checked: false },
    { id: 3, name: 'Page 3', checked: false },
    { id: 4, name: 'Page 4', checked: false },
  ]);

  // State for the main sections to track "Done" status
  const [sectionsData, setSectionsData] = useState([
    {
      title: 'Button',
      count: 3,
      items: [
        { id: 'button-1', text: 'Done', originalText: 'Done', icon: <SquareIcon />, status: 'Done', statusColor: 'success', checked: true },
        { id: 'button-2', text: 'Done', originalText: 'Done', icon: <SquareIcon />, status: 'Done', statusColor: 'success', checked: true },
        { id: 'button-3', text: 'Done', originalText: 'Done', icon: <SquareIcon />, status: 'Done', statusColor: 'success', checked: true },
      ],
    },
    {
      title: 'Frame 8445891',
      count: 5,
      items: [
        { id: 'frame-1', text: 'All pages', originalText: 'All pages', icon: <LayersIcon />, status: 'All pages', statusColor: 'default', checked: false },
        { id: 'frame-2', text: 'Page 1', originalText: 'Page 1', icon: <DescriptionIcon />, status: 'Page 1', statusColor: 'primary', checked: false },
        { id: 'frame-3', text: 'Page 2', originalText: 'Page 2', icon: <DescriptionIcon />, status: 'Page 2', statusColor: 'primary', checked: false },
        { id: 'frame-4', text: 'Page 3', originalText: 'Page 3', icon: <DescriptionIcon />, status: 'Page 3', statusColor: 'primary', checked: false },
        { id: 'frame-5', text: 'Page 4', originalText: 'Page 4', icon: <DescriptionIcon />, status: 'Done', statusColor: 'success', checked: true },
      ],
    },
  ]);

  const handleTogglePage = (id) => {
    setPages(pages.map(page => 
      page.id === id ? { ...page, checked: !page.checked } : page
    ));
  };

  const handleToggleAllPages = (checked) => {
    setPages(pages.map(page => ({ ...page, checked })));
  };

  const handleItemClick = (sectionIndex, itemIndex) => {
    const item = sectionsData[sectionIndex].items[itemIndex];
    setSelectedItem(item.id);

    if (item.originalText === 'All pages') {
      setCurrentAllPagesItem({ sectionIndex, itemIndex });
      setOpenPopup(true);
    }
  };

  const handleCheckboxChange = (sectionIndex, itemIndex) => {
    const newSectionsData = [...sectionsData];
    const item = newSectionsData[sectionIndex].items[itemIndex];
    
    item.checked = !item.checked;
    
    if (item.checked) {
      // Garder le nom de la page dans le texte, mais changer le statut à "Done"
      item.text = item.originalText; // Garde "Page 1", "Page 2", etc.
      item.status = 'Done';
      item.statusColor = 'success';
      
      // Si c'est "All pages" qui est coché, cocher toutes les pages individuelles
      if (item.originalText === 'All pages') {
        for (let i = 1; i < newSectionsData[sectionIndex].items.length; i++) {
          const pageItem = newSectionsData[sectionIndex].items[i];
          pageItem.checked = true;
          pageItem.text = pageItem.originalText;
          pageItem.status = 'Done';
          pageItem.statusColor = 'success';
        }
      }
    } else {
      // Revert to original text and status if unchecked
      item.text = item.originalText;
      if (item.originalText === 'All pages') {
        item.status = 'All pages';
        item.statusColor = 'default';
        
        // Si "All pages" est décoché, décocher toutes les pages individuelles
        // sauf Page 4 qui garde son état initial
        for (let i = 1; i < newSectionsData[sectionIndex].items.length; i++) {
          const pageItem = newSectionsData[sectionIndex].items[i];
          if (i === 4) {
            // Page 4 garde son état initial "Done"
            pageItem.checked = true;
            pageItem.text = 'Page 4';
            pageItem.status = 'Done';
            pageItem.statusColor = 'success';
          } else {
            pageItem.checked = false;
            pageItem.text = pageItem.originalText;
            pageItem.status = pageItem.originalText;
            pageItem.statusColor = 'primary';
          }
        }
      } else {
        item.status = item.originalText;
        item.statusColor = 'primary';
        
        // Si une page individuelle est décochée, vérifier si on doit décocher "All pages"
        if (itemIndex > 0) { // Pas "All pages"
          // Vérifier si toutes les pages individuelles ne sont plus cochées
          const allIndividualPagesUnchecked = newSectionsData[sectionIndex].items
            .slice(1) // Exclure "All pages"
            .every((page, idx) => {
              if (idx === 3) return true; // Page 4 reste toujours cochée
              return !page.checked;
            });
          
          // Si toutes les pages individuelles sont décochées (sauf Page 4), décocher "All pages"
          if (allIndividualPagesUnchecked) {
            const allPagesItem = newSectionsData[sectionIndex].items[0];
            allPagesItem.checked = false;
            allPagesItem.status = 'All pages';
            allPagesItem.statusColor = 'default';
          }
        }
      }
    }
    
    setSectionsData(newSectionsData);
  };

  const handlePopupDone = () => {
    // Mettre à jour les pages individuelles dans Frame 8445891
    const newSectionsData = [...sectionsData];
    const sectionIndex = 1; // Index de Frame 8445891
    
    // Pour chaque page cochée dans la popup
    pages.forEach((page, index) => {
      if (page.checked) {
        // Chercher l'élément correspondant dans Frame 8445891 (frame-2 = Page 1, frame-3 = Page 2, etc.)
        const frameIndex = index + 1; // +1 car frame-1 est "All pages"
        if (frameIndex < newSectionsData[sectionIndex].items.length) {
          const frameItem = newSectionsData[sectionIndex].items[frameIndex];
          frameItem.checked = true;
          frameItem.text = frameItem.originalText; // Garder "Page 1", "Page 2", etc.
          frameItem.status = 'Done';
          frameItem.statusColor = 'success';
        }
      } else {
        // Si la page est décochée dans la popup, mettre à jour l'état dans Frame 8445891
        const frameIndex = index + 1;
        if (frameIndex < newSectionsData[sectionIndex].items.length) {
          const frameItem = newSectionsData[sectionIndex].items[frameIndex];
          // Ne pas toucher à Page 4 qui est initialement "Done"
          if (!(frameIndex === 4 && frameItem.originalText === 'Page 4')) {
            frameItem.checked = false;
            frameItem.text = frameItem.originalText;
            frameItem.status = frameItem.originalText;
            frameItem.statusColor = 'primary';
          }
        }
      }
    });
    
    // Vérifier si toutes les pages individuelles sont cochées
    const allIndividualPagesChecked = newSectionsData[sectionIndex].items
      .slice(1) // Exclure "All pages"
      .every(item => item.checked);
    
    // Mettre à jour "All pages" en fonction de l'état des pages individuelles
    const allPagesItem = newSectionsData[sectionIndex].items[0];
    if (allIndividualPagesChecked) {
      allPagesItem.checked = true;
      allPagesItem.status = 'Done';
      allPagesItem.statusColor = 'success';
    } else {
      allPagesItem.checked = false;
      allPagesItem.status = 'All pages';
      allPagesItem.statusColor = 'default';
    }
    
    setSectionsData(newSectionsData);
    setOpenPopup(false);
    setCurrentAllPagesItem(null);
  };

  const allChecked = pages.every(p => p.checked);
  const someChecked = pages.some(p => p.checked) && !allChecked;

  return (
    <>
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
        {sectionsData.map((section, sectionIndex) => (
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
              {section.items.map((item, itemIndex) => (
                <ListItem 
                  key={item.id} 
                  disablePadding
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={() => handleCheckboxChange(sectionIndex, itemIndex)}
                      checked={item.checked}
                      sx={{
                        color: '#ccc',
                        '&.Mui-checked': {
                          color: '#1a73e8',
                        },
                      }}
                    />
                  }
                >
                  <ListItemButton
                    selected={selectedItem === item.id}
                    onClick={() => handleItemClick(sectionIndex, itemIndex)}
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
                        mr: 4
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Drawer>

      {/* Popup for All Pages */}
      <Dialog 
        open={openPopup} 
        onClose={() => {
          setOpenPopup(false);
          setCurrentAllPagesItem(null);
        }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            width: '320px',
            p: 1
          }
        }}
      >
        <DialogContent>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={allChecked}
                  indeterminate={someChecked}
                  onChange={(e) => handleToggleAllPages(e.target.checked)}
                />
              }
              label={<Typography sx={{ fontWeight: 500 }}>All pages</Typography>}
              sx={{ mb: 1, borderBottom: '1px solid #f0f0f0', pb: 1 }}
            />
            {pages.map((page) => (
              <FormControlLabel
                key={page.id}
                control={
                  <Checkbox 
                    checked={page.checked} 
                    onChange={() => handleTogglePage(page.id)}
                  />
                }
                label={page.name}
                sx={{ py: 0.5 }}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button 
            fullWidth 
            variant="contained" 
            onClick={handlePopupDone}
            sx={{ 
              backgroundColor: '#ffc107', 
              color: '#000',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#ffb300',
              },
              textTransform: 'none'
            }}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Sidebar;