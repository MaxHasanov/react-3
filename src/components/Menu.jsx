import { Drawer, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import { ForkLeft } from '@mui/icons-material';
import { Box } from '@mui/system';

function Menu({ chats }) {

    const menuItems = [
        {
            id: 'Yandex',
            text: 'Thank you for registering'
        },
        {
            id: 'Admin',
            text: 'You have logged in'
        }
    ]

    return (
        <>
            <Drawer variant='permanent'
                anchor='left'>
                <div>
                    <Typography variant='h5'>
                        Menu chat
                    </Typography>
                </div>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem disablePadding
                            key={index}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={item.id} style={{ fontWeight: 'bold', color: 'blue' }} />
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default Menu;