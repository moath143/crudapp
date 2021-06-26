import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Postitems({ post, index }) {
    const classes = useStyles();

    useEffect(() => {
        AOS.init()
    }, [])


    const deletepost = (postid) => {
        axios.post('/api/posts/deletepost', { postid: postid }).then((res) => {
            console.log(res.data);
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary post!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                    });
                    window.location.reload(false);
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
            
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <Card data-aos='fade-up' style={{
            background: 'transparent',
            marginTop: '30px',
            color: '#fff',
            boxShadow: '5px 5px 15px rgba(0,0,0,.7)',
            width: '22%',
            display: 'inline-flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginLeft: '10px',
            marginRight: '10px'
        }} key={index} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={post.imageUrl}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography align='center' gutterBottom variant="h5" component="h2">
                                {post.title}
                            </Typography>
                            <Typography align='center'  style={{color: '#fff',textTransform: 'capitalize'}} variant="body2" color="textSecondary" component="p">
                                {post.desc}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant='contained' size="small" color="primary">
                            <Link to={`/editpost/${post.postid}`} style={{textDecoration: 'none', color: '#fff'}}>Edit</Link>
                            </Button>
                            <Button onClick={() => {deletepost(post.postid)}} variant='contained' size="small" color="secondary">
                            Delete
                            </Button>
                        </CardActions>
                    </Card>
    )
}

export default Postitems
