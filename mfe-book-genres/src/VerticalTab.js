import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MfeBookList = React.lazy(() => import("MfeBookList/MfeBookListApp"));

// Memoized TabPanel component
const TabPanel = React.memo(({ children, value, index }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
});

// a11y props
const a11yProps = (index) => ({
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
});

// Genre list
const genres = [
    'ALL',
    'Romance',
    'Fantasy',
    'Mystery',
    'Thriller',
    'Horror',
    'Science Fiction',
    'Historical Fiction',
    'Young Adult',
    'Literary Fiction',
    'Biography',
    'Action & Adventure',
];

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => setValue(newValue);

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                height: 'calc(100vh - 64px)',
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', backgroundColor: '#f5f5f5' }}
            >
                {genres.map((genre, index) => (
                    <Tab key={genre} label={genre} {...a11yProps(index)} sx={{ bgcolor: value === index ? '#e0e0e0' : 'transparent' }} />
                ))}
            </Tabs>
            {genres.map((genre, index) => (
                <TabPanel key={genre} value={value} index={index}>
                    {genre}
                    <React.Suspense fallback={<div>Loading Book List...</div>}>
                        <MfeBookList genre={genre} />
                    </React.Suspense>
                </TabPanel>
            ))}
        </Box>
    );
}
