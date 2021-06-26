import React, { useEffect, useState } from 'react'
import Postitems from './Postitems';
import axios from 'axios'
import { Link } from 'react-router-dom'




import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'




function Postlist() {
    const [postList, setPostList] = useState([])
    useEffect(() => {
        axios.get('/api/posts/postlist').then((res) => {
            console.log(res.data)
            setPostList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const postListFinal = postList.map((item, index) => {
                return (

                    <Postitems key={index} post={item} idex={index} />
                )
    })
    return (
        <Container style={{display: 'flex', justifyContent: 'flex-end', marginTop: '30px', flexDirection: 'column'}}>

            <Link to='/addpost' style={{ textDecoration: 'none', color: '#fff', display: 'flex', justifyContent: 'flex-end' }}>
                <Button style={{width: '25%'}} variant='contained' size="small" color="primary">Add Post</Button>
            </Link>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingBottom: '30px'
            }}>
                {postListFinal}
            </div>
        </Container>
  );
}

export default Postlist
