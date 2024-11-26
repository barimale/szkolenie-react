
const Gallery = (props) => {

    return (
        props.images.map((item, index) => {
            return <button onClick={()=>props.show(item)} key={index}><img style={{width:'50px', height: 'auto'}} src={item.src} alt={item.alt} /></button>
        })
    );
}

export default Gallery;