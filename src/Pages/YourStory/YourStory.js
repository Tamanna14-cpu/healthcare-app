import React from 'react';
import './YourStory.css';
import storyImg from '../../images/write-a-story.jpg';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const YourStory = () => {
    return (
        <div >
            <img className="img-fluid story-img" src={storyImg} alt="" />
            <h1 className="story-txt">Write Your Story</h1>

            <div className="my-5 pt-5">
                <h2 >SHARE YOUR PERSONAL STORIES OF TRIUMPH</h2>
                <h5 className="text-muted my-3">It is possible to overcome the mental health problems, all it takes is a little willpower and some help. Share your <br /> stories of recovery & inspire people in overcoming their struggles of various kinds.</h5>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                }}
                noValidate
                autoComplete="off"
                className="container"
            >

                <TextField id="filled-basic" label="Your Name" variant="filled" required />
                <br />
                <br />
                <TextField id="filled-basic" label="Your Email" variant="filled" required />
                <br />
                <br />
                <TextField id="filled-basic" label="Subject" variant="filled" />
                <br />
                <br />

                <TextField
                    id="filled-multiline-static"
                    label="Listening You"
                    multiline
                    rows={4}
                    defaultValue="Share Your Story"
                    variant="filled"
                />
                <br />
                <br />

                <Stack direction="row" spacing={2} className="story-btn ms-5">

                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>

            </Box>
        </div>
    );
};

export default YourStory;