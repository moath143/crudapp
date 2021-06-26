import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import uniqid from 'uniqid';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'



const useStyles = makeStyles({
    root:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rootFonts: {
        fontSize: '3rem',
        color: '#fff',
        textTransform: 'capitalize',
        marginTop: '20px'
    },
    input: {
        width: '40%',
        padding: '10px 0',
        textIndent: '5px',
        border: 'none',
        background: 'transparent',
        borderBottom: '1px solid #fff',
        outline: 'none',
        color: '#fff',
        marginTop: '15px',
        fontSize: '16px'
    },
    textarea: {
        width: '40%',
        padding: '10px 0',
        textIndent: '5px',
        background: 'transparent',
        border: '1px solid #fff',
        outline: 'none',
        color: '#fff',
        marginTop: '15px',
        resize: 'none',
        fontSize: '16px'
    },
    btn: {
        marginTop: '15px'
    }

})

function Addpost(props) {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [desc, setDesc] = useState('')
    const history = useHistory()

    const addPost = () => {

        var post = {
            title: title,
            imageUrl: url,
            desc: desc,
            postid: uniqid()
        }
        console.log(post);
        axios.post('/api/posts/addnewpost', post).then((res) => {
            console.log(res.data);
            swal({
            title: "Good job!",
            text: "The Post is Save Successfuly",
            icon: "success",
            button: "Ok",
            })
            history.push('/')
            

        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <Typography align='center' className={classes.rootFonts} variant="h1" color="initial">add post</Typography>
            <form  className={classes.root} noValidate autoComplete="off">
                <input required value={title} onChange={(e) => {setTitle(e.target.value)}} className={classes.input} type='text' placeholder='Title' />
                <input required value={url} onChange={(e) => {setUrl(e.target.value)}} className={classes.input} type='url' placeholder='Image Url' />
                <textarea required value={desc} onChange={(e) => {setDesc(e.target.value)}} className={classes.textarea} id="" cols="30" rows="10" placeholder='Description'></textarea>
                <Button onClick={addPost} className={classes.btn} variant="contained" color="primary">
                Add Post
                </Button>

            </form>
        </div>
    )
}

export default Addpost
