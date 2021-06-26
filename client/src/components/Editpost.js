import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

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
        background: 'transparent',
        border: 'none',
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

function Editepost() {
    const params = useParams()
        const classes = useStyles();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [desc, setDesc] = useState('')
    const history = useHistory()
    useEffect(() => {
        axios.post('/api/posts/getdatapost', { postid: params.postid }).then((res) => {
            console.log(res.data[0]);
            var oldData = res.data[0];
            setTitle(oldData.title)
            setUrl(oldData.imageUrl)
            setDesc(oldData.desc)


        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const editPost = () => {
            const updatePost = {
                title: title,
                imageUrl: url,
                desc: desc,
                postid: params.postid
            }

        axios.post('/api/posts/updatepost', updatePost).then((res) => {
                history.push('/')
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <Typography align='center' className={classes.rootFonts} variant="h1" color="initial">edit post</Typography>
            <form  className={classes.root} noValidate autoComplete="off">
                <input value={title} onChange={(e) => {setTitle(e.target.value)}} className={classes.input} type='text' placeholder='Title' />
                <input value={url} onChange={(e) => {setUrl(e.target.value)}} className={classes.input} type='url' placeholder='Image Url' />
                <textarea value={desc} onChange={(e) => {setDesc(e.target.value)}} className={classes.textarea} id="" cols="30" rows="10" placeholder='Description'></textarea>
                <Button onClick={editPost} className={classes.btn} variant="contained" color="primary">
                Edit Post
                </Button>

            </form>
        </div>
    )
}

export default Editepost
