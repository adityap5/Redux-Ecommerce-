import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <div className="text-[#ffecd1]" >
            <Grid className="bg-black text-center mt-10"
                container
                sx={{ bgcolor: "black",py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5 " variant='h6'>Company</Typography>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>About</Button>
                    </div>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Blog</Button>
                    </div>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Jobs</Button>
                    </div>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Press</Button>
                    </div>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Patners</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant='h6'>Solution's</Typography>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Marketing</Button>

                    </div>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Analytics</Button>

                    </div>
                     <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Commerce</Button>

                    </div>
                     <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Insights</Button>

                    </div>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Support</Button>

                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant='h6'>Documentations</Typography>
                     <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Guide</Button>

                    </div>
                     <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>API status</Button>

                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant='h6'>Legal</Typography>
                     <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Claim</Button>

                    </div>
                     <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Privacy</Button>

                    </div>
                    <div  className="hover:text-zinc-400">
                        <Button className="pb-5" variant='h6' gutterBottom>Terms</Button>

                    </div>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                   <Typography variant="body2" component="p" align='center'>
                    &copy; 2024 Company name. All rights reserved.
                   </Typography>
                   <Typography variant="body2" component="p" align='center'>
                   Made with love by <span className='hover:text-green-500 cursor-pointer'><a href="https://github.com/adityap5" target='blanck'>ap29 </a>
                    </span> 
                   </Typography>
                   <Typography variant="body2" component="p" align='center'>
                 <a href="https://www.linkedin.com/in/adityapippal/" target='blanck'>follow</a>
                   </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer