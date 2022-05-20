import React from 'react'
import Post from './Post/Post'
import useStyles from './Style'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
type Props = {}

const Posts = (props: Props) => {
    const posts = useSelector((state: any) => state.posts)
    const classes = useStyles()
    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {posts.map((post: any) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts